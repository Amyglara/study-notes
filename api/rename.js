// POST /api/rename - 重命名或移动文章
// body: { oldPath, newPath }
import { getFile, putFile, deleteFile, ok, err, unauthorized, checkAuth } from './_github.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!checkAuth(req)) return unauthorized(res);
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { oldPath, newPath } = req.body || {};
    if (!oldPath || !newPath) return err(res, 'oldPath and newPath required', 400);
    if (oldPath === newPath) return err(res, 'same path', 400);

    const gitOld = 'docs/' + oldPath;
    const gitNew = 'docs/' + newPath;

    // 读取原文件
    const src = await getFile(gitOld);
    if (!src.exists) return err(res, 'Source file not found', 404);

    // 检查目标是否已存在
    const dest = await getFile(gitNew);
    if (dest.exists) return err(res, '目标路径已存在，请换个名字', 409);

    // 创建新文件
    await putFile(gitNew, src.content, `docs: 移动 ${oldPath} → ${newPath}`, null);

    // 删除原文件
    await deleteFile(gitOld, `docs: 移动后清理 ${oldPath}`, src.sha);

    return ok(res, { success: true, oldPath, newPath });
  } catch (e) {
    err(res, e.message);
  }
}
