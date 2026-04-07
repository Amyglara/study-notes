// POST /api/upload - 上传图片到 GitHub
// body: { filename, content (base64), directory }
import { ok, err, checkAuth, unauthorized } from './_github.js';

const OWNER = 'Amyglara';
const REPO = 'study-notes';
const BRANCH = 'main';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!checkAuth(req)) return unauthorized(res);
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { filename, content, directory = 'images' } = req.body || {};

    if (!filename || !content) {
      return err(res, 'filename and content required', 400);
    }

    // 安全检查：只允许图片格式
    const allowedExts = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico'];
    const ext = filename.substring(filename.lastIndexOf('.')).toLowerCase();
    if (!allowedExts.includes(ext)) {
      return err(res, 'Only image formats allowed: png/jpg/gif/webp/svg', 400);
    }

    // 限制大小：5MB
    const sizeBytes = Math.ceil((content.length * 3) / 4);
    if (sizeBytes > 5 * 1024 * 1024) {
      return err(res, 'Image too large, max 5MB', 400);
    }

    // 文件名安全化
    const safeName = filename.replace(/[^a-zA-Z0-9._\-\u4e00-\u9fff]/g, '_');
    const datePrefix = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const gitPath = `docs/public/${directory}/${datePrefix}-${safeName}`;

    // 直接用 GitHub API 上传 base64 内容
    const ghRes = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${gitPath}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `upload: ${safeName}`,
          content: content, // 直接传 base64
          branch: BRANCH,
        }),
      }
    );

    const data = await ghRes.json();
    if (!ghRes.ok) throw new Error(data.message || `GitHub API error ${ghRes.status}`);

    const publicUrl = `/${directory}/${datePrefix}-${safeName}`;
    return ok(res, {
      success: true,
      url: publicUrl,
      path: gitPath,
      filename: `${datePrefix}-${safeName}`,
      download_url: data.content?.download_url,
    });
  } catch (e) {
    err(res, e.message);
  }
}
