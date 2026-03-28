// GET /api/articles - 获取所有文章列表（含真实标题）
import { listAllFiles, getFile, unauthorized, ok, err } from '../_github.js';

function checkAuth(req) {
  const token = req.headers['x-admin-token'];
  return token === process.env.ADMIN_PASSWORD;
}

/** 从 Markdown 内容中提取第一个 # 标题，失败则返回 null */
function extractTitle(content) {
  if (!content) return null;
  for (const line of content.split('\n').slice(0, 20)) {
    const m = line.match(/^#\s+(.+)/);
    if (m) return m[1].trim();
  }
  return null;
}

/** slug → 可读名，例: buffett-rules → Buffett Rules */
function slugToLabel(slug) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!checkAuth(req)) return unauthorized(res);
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const files = await listAllFiles();

    // 并发读取所有文件内容，提取 # 标题（限制并发 20 防超时）
    const BATCH = 20;
    const titleMap = {};
    for (let i = 0; i < files.length; i += BATCH) {
      const batch = files.slice(i, i + BATCH);
      await Promise.all(batch.map(async f => {
        try {
          const result = await getFile(f.path);
          titleMap[f.path] = extractTitle(result.content);
        } catch {
          titleMap[f.path] = null;
        }
      }));
    }

    // 按目录分组
    const grouped = {};
    for (const f of files) {
      const parts = f.path.replace('docs/', '').split('/');
      const category = parts.length > 1 ? parts[0] : '__root__';
      if (!grouped[category]) grouped[category] = [];

      const slug = parts[parts.length - 1].replace('.md', '');
      const relPath = f.path.replace('docs/', '');
      const link = '/' + relPath.replace('.md', '');

      // 优先用 Markdown # 标题，其次尝试把 slug 转成可读名
      const mdTitle = titleMap[f.path];
      const displayTitle = mdTitle || slugToLabel(slug);

      grouped[category].push({
        path: relPath,
        fullGitPath: f.path,
        filename: slug,          // 原始 slug（用于路径操作）
        title: displayTitle,     // 展示用标题
        mdTitle: mdTitle || null, // 是否有真实 Markdown 标题
        link,
        sha: f.sha,
        size: f.size,
        category,
      });
    }

    ok(res, { grouped });
  } catch (e) {
    err(res, e.message);
  }
}
