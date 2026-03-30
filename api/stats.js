// GET /api/stats - 知识库统计信息
import { listAllFiles, ok, err, unauthorized, checkAuth } from './_github.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!checkAuth(req)) return unauthorized(res);
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const files = await listAllFiles();

    const catStats = {};
    let totalSize = 0;

    for (const f of files) {
      const parts = f.path.replace('docs/', '').split('/');
      const cat = parts.length > 1 ? parts[0] : '__root__';
      if (!catStats[cat]) catStats[cat] = { count: 0, size: 0 };
      catStats[cat].count++;
      catStats[cat].size += f.size || 0;
      totalSize += f.size || 0;
    }

    // 获取最近提交（repo commits API）
    const ghRes = await fetch(
      `https://api.github.com/repos/Amyglara/study-notes/commits?per_page=5`,
      {
        headers: {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
        }
      }
    );
    const commits = ghRes.ok ? await ghRes.json() : [];
    const recentCommits = Array.isArray(commits) ? commits.map(c => ({
      sha: c.sha.slice(0, 7),
      message: c.commit.message.split('\n')[0].slice(0, 60),
      date: c.commit.author.date,
      author: c.commit.author.name,
    })) : [];

    return ok(res, {
      total: files.length,
      totalSizeKB: Math.round(totalSize / 1024),
      categories: catStats,
      recentCommits,
    });
  } catch (e) {
    err(res, e.message);
  }
}
