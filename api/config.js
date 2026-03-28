// GET  /api/config - 读取 config.mts
// POST /api/config - 保存 config.mts {content}
import { getFile, putFile, ok, err, unauthorized } from './_github.js';

function checkAuth(req) {
  const token = req.headers['x-admin-token'];
  return token === process.env.ADMIN_PASSWORD;
}

const CONFIG_PATH = 'docs/.vitepress/config.mts';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!checkAuth(req)) return unauthorized(res);

  try {
    if (req.method === 'GET') {
      const result = await getFile(CONFIG_PATH);
      return ok(res, { content: result.content, sha: result.sha });
    }

    if (req.method === 'POST') {
      const { content } = req.body || {};
      if (!content) return err(res, 'content required', 400);
      const existing = await getFile(CONFIG_PATH);
      await putFile(CONFIG_PATH, content, 'config: 更新 sidebar 配置', existing.sha);
      return ok(res, { success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    err(res, e.message);
  }
}
