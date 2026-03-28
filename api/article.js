// GET  /api/article?path=xxx  - 读取文章内容
// POST /api/article           - 保存文章 {path, content, message}
// DELETE /api/article?path=xxx&sha=xxx - 删除文章
import { getFile, putFile, deleteFile, ok, err, unauthorized } from '../_github.js';

function checkAuth(req) {
  const token = req.headers['x-admin-token'];
  return token === process.env.ADMIN_PASSWORD;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!checkAuth(req)) return unauthorized(res);

  try {
    // ── 读取文章 ──
    if (req.method === 'GET') {
      const { path: relPath } = req.query;
      if (!relPath) return err(res, 'path required', 400);
      const gitPath = 'docs/' + relPath;
      const result = await getFile(gitPath);
      if (!result.exists) return err(res, 'File not found', 404);
      return ok(res, { content: result.content, sha: result.sha, path: relPath });
    }

    // ── 保存文章 ──
    if (req.method === 'POST') {
      const { path: relPath, content, message } = req.body || {};
      if (!relPath || content === undefined) return err(res, 'path and content required', 400);

      const gitPath = 'docs/' + relPath;
      // 先读取现有 sha（更新时需要）
      const existing = await getFile(gitPath);
      const commitMsg = message || (existing.exists ? `docs: 更新 ${relPath}` : `docs: 新增 ${relPath}`);

      await putFile(gitPath, content, commitMsg, existing.sha || null);
      return ok(res, { success: true, path: relPath });
    }

    // ── 删除文章 ──
    if (req.method === 'DELETE') {
      const { path: relPath, sha } = req.query;
      if (!relPath) return err(res, 'path required', 400);

      const gitPath = 'docs/' + relPath;
      let fileSha = sha;
      if (!fileSha) {
        const existing = await getFile(gitPath);
        if (!existing.exists) return err(res, 'File not found', 404);
        fileSha = existing.sha;
      }

      await deleteFile(gitPath, `docs: 删除 ${relPath}`, fileSha);
      return ok(res, { success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    err(res, e.message);
  }
}
