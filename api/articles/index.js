// GET /api/articles - 获取所有文章列表
import { listAllFiles, unauthorized, ok, err } from '../_github.js';

function checkAuth(req) {
  const token = req.headers['x-admin-token'];
  return token === process.env.ADMIN_PASSWORD;
}

/** slug → 可读名，例: buffett-rules → Buffett Rules */
function slugToLabel(slug) {
  // 纯英文 slug 才转换，中文直接返回
  if (/^[a-z0-9-]+$/.test(slug)) {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
  return slug;
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

    // 按目录分组（不读文件内容，保持高速）
    const grouped = {};
    for (const f of files) {
      const parts = f.path.replace('docs/', '').split('/');
      const category = parts.length > 1 ? parts[0] : '__root__';
      if (!grouped[category]) grouped[category] = [];

      const slug = parts[parts.length - 1].replace('.md', '');
      const relPath = f.path.replace('docs/', '');
      const link = '/' + relPath.replace('.md', '');

      grouped[category].push({
        path: relPath,
        fullGitPath: f.path,
        filename: slug,
        title: slugToLabel(slug),   // 前端用，可被实际标题覆盖
        mdTitle: null,               // 由前端懒加载填充
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
