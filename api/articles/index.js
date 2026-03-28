// GET /api/articles - 获取所有文章列表
import { listAllFiles, getFile, unauthorized, ok, err } from '../_github.js';

function checkAuth(req) {
  const token = req.headers['x-admin-token'];
  return token === process.env.ADMIN_PASSWORD;
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

    // 按目录分组
    const grouped = {};
    for (const f of files) {
      // path 例: docs/bitdong/wisdom/buffett.md
      const parts = f.path.replace('docs/', '').split('/');
      const category = parts.length > 1 ? parts[0] : '__root__';
      if (!grouped[category]) grouped[category] = [];

      // 取文件名（无扩展名）
      const filename = parts[parts.length - 1].replace('.md', '');
      const relPath = f.path.replace('docs/', '');
      const link = '/' + relPath.replace('.md', '');

      grouped[category].push({
        path: relPath,
        fullGitPath: f.path,
        filename,
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
