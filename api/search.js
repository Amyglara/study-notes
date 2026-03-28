// GET /api/search?q=关键词 - 全文搜索
import { listAllFiles, getFile, ok, err, unauthorized, checkAuth } from './_github.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!checkAuth(req)) return unauthorized(res);
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const q = (req.query.q || '').trim().toLowerCase();
    if (!q || q.length < 2) return err(res, '搜索词至少2个字符', 400);

    const files = await listAllFiles();
    const results = [];

    // 并发读取文件内容（限制并发数避免 GitHub API 限流）
    const BATCH = 8;
    for (let i = 0; i < files.length; i += BATCH) {
      const batch = files.slice(i, i + BATCH);
      const reads = await Promise.all(batch.map(f => getFile(f.path).catch(() => null)));
      for (let j = 0; j < batch.length; j++) {
        const f = batch[j];
        const r = reads[j];
        if (!r || !r.content) continue;
        const content = r.content.toLowerCase();
        const relPath = f.path.replace('docs/', '');
        const filename = relPath.split('/').pop().replace('.md', '');

        // 标题匹配权重更高
        const inTitle = filename.toLowerCase().includes(q);
        const inContent = content.includes(q);
        if (!inTitle && !inContent) continue;

        // 提取匹配上下文（前后50字符）
        const idx = content.indexOf(q);
        const contextStart = Math.max(0, idx - 50);
        const contextEnd = Math.min(r.content.length, idx + q.length + 80);
        const context = r.content.slice(contextStart, contextEnd)
          .replace(/\n+/g, ' ')
          .replace(/[#*`>]/g, '')
          .trim();

        results.push({
          path: relPath,
          filename,
          inTitle,
          context: context + (contextEnd < r.content.length ? '…' : ''),
          size: f.size,
          sha: f.sha,
        });
      }
    }

    // 标题匹配排前面
    results.sort((a, b) => (b.inTitle ? 1 : 0) - (a.inTitle ? 1 : 0));
    return ok(res, { results, total: results.length, query: q });
  } catch (e) {
    err(res, e.message);
  }
}
