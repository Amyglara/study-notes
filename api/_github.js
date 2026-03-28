// GitHub API 工具层
const OWNER = 'Bitdong798';
const REPO = 'study-notes';
const BRANCH = 'main';
const BASE_URL = 'https://api.github.com';

function getToken() {
  return process.env.GITHUB_TOKEN;
}

/** base64 → utf-8 字符串，兼容 Node.js 和 Edge Runtime */
function b64decode(str) {
  // 去掉 GitHub API 返回中的换行符
  const clean = str.replace(/\n/g, '');
  if (typeof Buffer !== 'undefined') {
    // Node.js Serverless Runtime
    return Buffer.from(clean, 'base64').toString('utf-8');
  }
  // Edge Runtime / 浏览器
  return decodeURIComponent(
    atob(clean)
      .split('')
      .map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('')
  );
}

/** utf-8 字符串 → base64，兼容 Node.js 和 Edge Runtime */
function b64encode(str) {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str, 'utf-8').toString('base64');
  }
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
}

async function ghFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Authorization': `token ${getToken()}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || `GitHub API error ${res.status}`);
  return data;
}

// 获取文件内容（返回 {content, sha}）
export async function getFile(filePath) {
  try {
    const data = await ghFetch(`/repos/${OWNER}/${REPO}/contents/${filePath}?ref=${BRANCH}`);
    const content = b64decode(data.content);
    return { content, sha: data.sha, exists: true };
  } catch (e) {
    if (e.message.includes('Not Found') || e.message.includes('404')) {
      return { content: '', sha: null, exists: false };
    }
    throw e;
  }
}

// 创建或更新文件
export async function putFile(filePath, content, message, sha = null) {
  const body = {
    message,
    content: b64encode(content),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;
  return ghFetch(`/repos/${OWNER}/${REPO}/contents/${filePath}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

// 删除文件
export async function deleteFile(filePath, message, sha) {
  return ghFetch(`/repos/${OWNER}/${REPO}/contents/${filePath}`, {
    method: 'DELETE',
    body: JSON.stringify({ message, sha, branch: BRANCH }),
  });
}

// 递归列举目录下所有文件（用 Git Trees API，效率高）
export async function listAllFiles() {
  const data = await ghFetch(`/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`);
  return data.tree.filter(item => item.type === 'blob' && item.path.startsWith('docs/') && item.path.endsWith('.md'));
}

// 验证密码
export function checkAuth(req) {
  const token = req.headers['x-admin-token'] || req.cookies?.adminToken;
  return token === process.env.ADMIN_PASSWORD;
}

// 通用响应
export function ok(res, data) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
}
export function err(res, msg, status = 500) {
  res.setHeader('Content-Type', 'application/json');
  res.status(status).json({ error: msg });
}
export function unauthorized(res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(401).json({ error: 'Unauthorized' });
}
