<template>
  <div class="custom-home">
    <!-- 背景光球 -->
    <div class="hero-glow"></div>

    <!-- 主 Hero 区域 -->
    <section class="hero-section">
      <!-- 书本 3D 封面 -->
      <div class="book-wrapper">
        <div class="book-scene">
          <div class="book">
            <!-- 封面正面 -->
            <div class="book-front">
              <img src="/avatar.jpg" alt="Bit东" class="book-cover-img" />
              <div class="book-cover-overlay">
                <div class="book-title-top">跟着Bit东</div>
                <div class="book-title-bottom">学习 Web3</div>
              </div>
              <!-- 封面光泽 -->
              <div class="book-shine"></div>
            </div>
            <!-- 书脊 -->
            <div class="book-spine">
              <span>Web3 · 学习 · 实战</span>
            </div>
            <!-- 书页厚度 -->
            <div class="book-pages"></div>
          </div>
        </div>
      </div>

      <!-- 文字内容 -->
      <div class="hero-content">
        <div class="hero-badge">📚 系统化知识体系</div>
        <h1 class="hero-name">
          <span class="gradient-text">跟着 Bit东</span>
        </h1>
        <h2 class="hero-text">学习 Web3</h2>
        <p class="hero-tagline">系统化知识体系 · 实战交易方法论 · 每日情报推送</p>

        <!-- 按钮组 - 统一容器 -->
        <div class="hero-actions">
          <a href="/web3-basics/" class="btn btn-primary">
            <span class="btn-icon">🚀</span>
            <span>开始学习</span>
          </a>
          <a href="https://zx.bitdong.xyz" target="_blank" class="btn btn-secondary">
            <span class="btn-icon">🦞</span>
            <span>麒麟会情报中心</span>
          </a>
        </div>

        <!-- 统计数字 -->
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">300+</span>
            <span class="stat-label">词条术语</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">7章</span>
            <span class="stat-label">投资指南</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">每日</span>
            <span class="stat-label">情报推送</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 矩阵式学习菜单 -->
    <section class="modules-section">
      <div class="modules-header">
        <h2 class="modules-title">选择学习方向</h2>
        <p class="modules-sub">六大模块，系统构建你的 Web3 知识体系</p>
      </div>
      <div class="modules-grid">
        <a href="/web3-basics/" class="module-card">
          <div class="module-icon-wrap">
            <span class="module-icon">🧱</span>
          </div>
          <div class="module-body">
            <div class="module-title">Web3 基础</div>
            <div class="module-desc">区块链原理、钱包安全、主流公链对比，从底层逻辑理解 Web3</div>
            <div class="module-meta">
              <span class="module-tag">入门必读</span>
              <span class="module-arrow">→</span>
            </div>
          </div>
        </a>
        <a href="/defi/" class="module-card">
          <div class="module-icon-wrap">
            <span class="module-icon">💧</span>
          </div>
          <div class="module-body">
            <div class="module-title">DeFi 进阶</div>
            <div class="module-desc">DEX、AMM、流动性挖矿、借贷协议深度解析，搞懂 TVL/APY</div>
            <div class="module-meta">
              <span class="module-tag">进阶研究</span>
              <span class="module-arrow">→</span>
            </div>
          </div>
        </a>
        <a href="/trading/" class="module-card">
          <div class="module-icon-wrap">
            <span class="module-icon">📈</span>
          </div>
          <div class="module-body">
            <div class="module-title">交易策略</div>
            <div class="module-desc">RSI+MACD+EMA 共振、仓位管理、三档止盈止损体系</div>
            <div class="module-meta">
              <span class="module-tag">实战方法论</span>
              <span class="module-arrow">→</span>
            </div>
          </div>
        </a>
        <a href="/tools/" class="module-card">
          <div class="module-icon-wrap">
            <span class="module-icon">🛠️</span>
          </div>
          <div class="module-body">
            <div class="module-title">工具箱</div>
            <div class="module-desc">链上数据、行情监控、聪明钱追踪、安全工具，精选 20+ 神器</div>
            <div class="module-meta">
              <span class="module-tag">效率工具</span>
              <span class="module-arrow">→</span>
            </div>
          </div>
        </a>
        <a href="/redbook/" class="module-card module-card--featured">
          <div class="module-icon-wrap">
            <span class="module-icon">📕</span>
          </div>
          <div class="module-body">
            <div class="module-title">区块链红宝书</div>
            <div class="module-desc">300+ 币圈术语 A-Z 全解析，AMM/DeFi/NFT/HODL 每词讲透</div>
            <div class="module-meta">
              <span class="module-tag module-tag--hot">🔥 最全词典</span>
              <span class="module-arrow">→</span>
            </div>
          </div>
        </a>
        <a href="/guide/" class="module-card module-card--featured">
          <div class="module-icon-wrap">
            <span class="module-icon">📗</span>
          </div>
          <div class="module-body">
            <div class="module-title">币圈投资指南</div>
            <div class="module-desc">从避险到躺赚，仓位管理 334 战法，7章带你穿越牛熊周期</div>
            <div class="module-meta">
              <span class="module-tag module-tag--hot">🔥 精华必读</span>
              <span class="module-arrow">→</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* ===== 整体容器 ===== */
.custom-home {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

/* 背景光球 */
.hero-glow {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 800px;
  background:
    radial-gradient(ellipse 60% 55% at 50% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 65%),
    radial-gradient(ellipse 35% 30% at 70% 40%, rgba(192, 132, 252, 0.07) 0%, transparent 55%),
    radial-gradient(ellipse 30% 25% at 25% 65%, rgba(56, 189, 248, 0.05) 0%, transparent 50%);
  pointer-events: none;
  animation: glowPulse 8s ease-in-out infinite;
  z-index: 0;
}

@keyframes glowPulse {
  0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
  50% { opacity: 0.75; transform: translateX(-50%) scale(1.06); }
}

/* ===== Hero 布局：左书右文，大屏居中 ===== */
.hero-section {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 100px 48px 80px;
  max-width: 1100px;
  margin: 0 auto;
}

/* ===== 3D 书本 ===== */
.book-wrapper {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.book-scene {
  perspective: 1200px;
  perspective-origin: 50% 50%;
}

.book {
  position: relative;
  width: 220px;
  height: 300px;
  transform-style: preserve-3d;
  transform: rotateY(-25deg) rotateX(4deg);
  animation:
    bookEntrance 1s cubic-bezier(0.22, 1, 0.36, 1) both,
    bookFloat 6s ease-in-out 1.2s infinite;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.book:hover {
  transform: rotateY(-10deg) rotateX(2deg) translateY(-8px);
}

@keyframes bookEntrance {
  0% {
    opacity: 0;
    transform: rotateY(-60deg) rotateX(8deg) scale(0.85) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: rotateY(-25deg) rotateX(4deg) scale(1) translateY(0px);
  }
}

@keyframes bookFloat {
  0%, 100% { transform: rotateY(-25deg) rotateX(4deg) translateY(0px); }
  50%       { transform: rotateY(-25deg) rotateX(4deg) translateY(-10px); }
}

/* 封面正面 */
.book-front {
  position: absolute;
  width: 220px;
  height: 300px;
  background: linear-gradient(145deg, #1a1030 0%, #0d0820 100%);
  border-radius: 3px 12px 12px 3px;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translateZ(18px);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(139, 92, 246, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.book-cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  opacity: 0.85;
  filter: brightness(0.9) contrast(1.08) saturate(0.95);
}

.book-cover-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 16px 16px;
  background: linear-gradient(to top,
    rgba(7, 2, 20, 0.92) 0%,
    rgba(7, 2, 20, 0.6) 60%,
    transparent 100%
  );
}

.book-title-top {
  font-size: 0.8rem;
  color: rgba(196, 181, 253, 0.85);
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 3px;
}

.book-title-bottom {
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.3px;
  background: linear-gradient(90deg, #f5f3ff 0%, #c4b5fd 60%, #e879f9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 光泽效果 */
.book-shine {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    105deg,
    transparent 20%,
    rgba(255, 255, 255, 0.06) 50%,
    transparent 80%
  );
  pointer-events: none;
}

/* 书脊 */
.book-spine {
  position: absolute;
  left: 0;
  top: 0;
  width: 36px;
  height: 300px;
  background: linear-gradient(
    to right,
    #2a1a50 0%,
    #1e1040 40%,
    #160d30 100%
  );
  transform: rotateY(-90deg) translateX(-18px);
  transform-origin: left center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px 0 0 3px;
  box-shadow: inset -2px 0 8px rgba(0, 0, 0, 0.4);
}

.book-spine span {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.6rem;
  color: rgba(196, 181, 253, 0.6);
  letter-spacing: 2px;
  font-weight: 500;
  transform: rotate(180deg);
}

/* 书页厚度（侧面） */
.book-pages {
  position: absolute;
  right: 0;
  top: 2px;
  width: 36px;
  height: 296px;
  background: repeating-linear-gradient(
    to bottom,
    #e8e4d8 0px,
    #e8e4d8 1px,
    #d4cfc2 1px,
    #d4cfc2 2px
  );
  transform: rotateY(90deg) translateX(18px);
  transform-origin: right center;
  border-radius: 0 2px 2px 0;
  opacity: 0.85;
}

/* ===== 文字内容区 ===== */
.hero-content {
  flex: 1;
  max-width: 520px;
  animation: contentSlideIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
}

@keyframes contentSlideIn {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 14px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.22);
  border-radius: 100px;
  font-size: 0.78rem;
  color: rgba(196, 181, 253, 0.85);
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-bottom: 20px;
}

/* 主标题 */
.hero-name {
  font-size: 3.8rem;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.0;
  margin: 0 0 8px;
  padding: 0;
  border: none;
}

.gradient-text {
  background: linear-gradient(135deg,
    #f5f3ff 0%,
    #c4b5fd 25%,
    #a78bfa 55%,
    #e879f9 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.2));
}

/* 副标题 */
.hero-text {
  font-size: 3.8rem;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.05;
  color: rgba(255, 255, 255, 0.88);
  margin: 0 0 20px;
  padding: 0;
  border: none;
}

/* Tagline */
.hero-tagline {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 36px;
  letter-spacing: 0.2px;
  line-height: 1.6;
}

/* ===== 按钮组（统一容器）===== */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 28px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  box-sizing: border-box;
}

.btn-icon {
  font-size: 1rem;
  line-height: 1;
}

/* 主按钮 */
.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: #fff;
  box-shadow:
    0 0 0 1px rgba(139, 92, 246, 0.3),
    0 4px 20px rgba(124, 58, 237, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.4s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 0 1px rgba(139, 92, 246, 0.5),
    0 8px 28px rgba(124, 58, 237, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  color: #fff;
}

/* 次按钮 */
.btn-secondary {
  background: rgba(139, 92, 246, 0.08);
  color: #c4b5fd;
  border: 1px solid rgba(139, 92, 246, 0.28);
}

.btn-secondary:hover {
  background: rgba(139, 92, 246, 0.15);
  border-color: rgba(139, 92, 246, 0.5);
  transform: translateY(-2px);
  color: #ddd6fe;
}

/* ===== 统计数字 ===== */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-num {
  font-size: 1.4rem;
  font-weight: 800;
  color: #c4b5fd;
  letter-spacing: -0.5px;
  line-height: 1;
}

.stat-label {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.38);
  font-weight: 500;
  letter-spacing: 0.3px;
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.08);
}

/* ===== 响应式：平板 ===== */
@media (max-width: 960px) {
  .hero-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
    padding: 64px 32px 56px;
  }

  .hero-content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-name,
  .hero-text {
    font-size: 2.6rem;
    letter-spacing: -1px;
  }

  .hero-tagline {
    font-size: 0.95rem;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-stats {
    justify-content: center;
  }
}

/* ===== 响应式：手机 ===== */
@media (max-width: 640px) {
  .hero-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 32px;
    padding: 48px 20px 48px;
  }

  .hero-content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* 书本缩小：手机上完整可见 */
  .book-scene {
    perspective: 900px;
  }

  .book {
    width: 160px;
    height: 220px;
    transform: rotateY(-20deg) rotateX(3deg);
    animation:
      bookEntrance 1s cubic-bezier(0.22, 1, 0.36, 1) both,
      bookFloatMobile 6s ease-in-out 1.2s infinite;
  }

  .book:hover {
    transform: rotateY(-10deg) rotateX(2deg) translateY(-6px);
  }

  .book-front {
    width: 160px;
    height: 220px;
    transform: translateZ(14px);
  }

  .book-spine {
    width: 28px;
    height: 220px;
    transform: rotateY(-90deg) translateX(-14px);
  }

  .book-pages {
    width: 28px;
    height: 216px;
    transform: rotateY(90deg) translateX(14px);
  }

  /* 标题 */
  .hero-name,
  .hero-text {
    font-size: 2rem;
    letter-spacing: -0.6px;
    line-height: 1.1;
  }

  .hero-tagline {
    font-size: 0.85rem;
    margin-bottom: 24px;
    color: rgba(255, 255, 255, 0.4);
  }

  .hero-badge {
    font-size: 0.72rem;
    padding: 4px 12px;
    margin-bottom: 14px;
  }

  /* 按钮：手机全宽竖排 */
  .hero-actions {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-bottom: 28px;
  }

  .btn {
    width: 100%;
    height: 52px;
    font-size: 1rem;
    border-radius: 14px;
  }

  /* 统计数字缩小 */
  .hero-stats {
    justify-content: center;
    gap: 16px;
  }

  .stat-num {
    font-size: 1.2rem;
  }

  .stat-label {
    font-size: 0.68rem;
  }

  .stat-divider {
    height: 24px;
  }
}

/* ===== 响应式：小屏手机 ===== */
@media (max-width: 375px) {
  .hero-section {
    padding: 40px 16px 40px;
    gap: 28px;
  }

  .book {
    width: 140px;
    height: 192px;
  }

  .book-front {
    width: 140px;
    height: 192px;
  }

  .book-spine,
  .book-pages {
    height: 192px;
  }

  .hero-name,
  .hero-text {
    font-size: 1.75rem;
    letter-spacing: -0.4px;
  }
}

@keyframes bookFloatMobile {
  0%, 100% { transform: rotateY(-20deg) rotateX(3deg) translateY(0px); }
  50%       { transform: rotateY(-20deg) rotateX(3deg) translateY(-8px); }
}

/* ===== 矩阵式学习菜单 ===== */
.modules-section {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px 100px;
}

.modules-header {
  text-align: center;
  margin-bottom: 40px;
}

.modules-title {
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.6px;
  line-height: 1.2;
  margin: 0 0 10px;
  padding: 0;
  border: none;
  /* 暗色默认 */
  color: rgba(255, 255, 255, 0.9);
}

.modules-sub {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.42);
  margin: 0;
  letter-spacing: 0.2px;
}

/* 3列网格 */
.modules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* 单个模块卡片（暗色默认）*/
.module-card {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 28px 24px 24px;
  background: linear-gradient(145deg, rgba(17, 17, 26, 0.75) 0%, rgba(12, 12, 18, 0.88) 100%);
  border: 1px solid rgba(139, 92, 246, 0.13);
  border-radius: 20px;
  text-decoration: none !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  cursor: pointer;
}

/* 顶部彩虹光边 */
.module-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(139, 92, 246, 0.7) 30%,
    rgba(192, 132, 252, 0.9) 50%,
    rgba(139, 92, 246, 0.7) 70%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.3s;
}

.module-card:hover {
  border-color: rgba(139, 92, 246, 0.38) !important;
  transform: translateY(-5px);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(139, 92, 246, 0.12);
  text-decoration: none !important;
}

.module-card:hover::before {
  opacity: 1;
}

/* 精选卡片略有区分 */
.module-card--featured {
  border-color: rgba(139, 92, 246, 0.2);
  background: linear-gradient(145deg, rgba(20, 14, 35, 0.8) 0%, rgba(14, 10, 26, 0.9) 100%);
}

.module-icon-wrap {
  margin-bottom: 14px;
}

.module-icon {
  font-size: 2rem;
  line-height: 1;
  display: block;
  filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.25));
}

.module-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.module-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
  letter-spacing: -0.2px;
  line-height: 1.3;
}

.module-desc {
  font-size: 0.845rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.45);
  flex: 1;
}

.module-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
}

.module-tag {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 100px;
  font-size: 0.72rem;
  color: #a78bfa;
  font-weight: 500;
  letter-spacing: 0.2px;
}

.module-tag--hot {
  background: rgba(236, 72, 153, 0.1);
  border-color: rgba(236, 72, 153, 0.25);
  color: #f472b6;
}

.module-arrow {
  font-size: 1rem;
  color: rgba(139, 92, 246, 0.5);
  transition: transform 0.2s, color 0.2s;
}

.module-card:hover .module-arrow {
  transform: translateX(4px);
  color: #a78bfa;
}

/* ===== 亮色模式：Hero 区域适配 ===== */
:global(:root:not(.dark)) .hero-glow {
  background:
    radial-gradient(ellipse 60% 55% at 50% 50%, rgba(124, 58, 237, 0.07) 0%, transparent 65%),
    radial-gradient(ellipse 35% 30% at 70% 40%, rgba(139, 92, 246, 0.04) 0%, transparent 55%);
}

:global(:root:not(.dark)) .hero-badge {
  background: rgba(109, 40, 217, 0.07);
  border-color: rgba(109, 40, 217, 0.18);
  color: #5b21b6;
}

:global(:root:not(.dark)) .gradient-text {
  background: linear-gradient(135deg,
    #4c1d95 0%,
    #5b21b6 25%,
    #6d28d9 55%,
    #7c3aed 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: none;
}

:global(:root:not(.dark)) .hero-text {
  color: #1a1523 !important;
}

:global(:root:not(.dark)) .hero-tagline {
  color: rgba(50, 30, 80, 0.55);
}

:global(:root:not(.dark)) .btn-primary {
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  box-shadow:
    0 0 0 1px rgba(109, 40, 217, 0.3),
    0 4px 16px rgba(109, 40, 217, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}
:global(:root:not(.dark)) .btn-primary:hover {
  box-shadow:
    0 0 0 1px rgba(109, 40, 217, 0.5),
    0 8px 24px rgba(109, 40, 217, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
  color: #fff;
}

:global(:root:not(.dark)) .btn-secondary {
  background: rgba(109, 40, 217, 0.07);
  color: #5b21b6;
  border-color: rgba(109, 40, 217, 0.25);
}
:global(:root:not(.dark)) .btn-secondary:hover {
  background: rgba(109, 40, 217, 0.12);
  border-color: rgba(109, 40, 217, 0.45);
  color: #4c1d95;
}

:global(:root:not(.dark)) .stat-num {
  color: #6d28d9;
}
:global(:root:not(.dark)) .stat-label {
  color: rgba(50, 30, 80, 0.45);
}
:global(:root:not(.dark)) .stat-divider {
  background: rgba(109, 40, 217, 0.12);
}

/* 亮色书本封面顶部文字 */
:global(:root:not(.dark)) .book-title-top {
  color: rgba(196, 181, 253, 0.9);
}

/* ===== 亮色模式：矩阵菜单适配 ===== */
:global(:root:not(.dark)) .modules-title {
  color: #1a1523;
}
:global(:root:not(.dark)) .modules-sub {
  color: #7a7090;
}

:global(:root:not(.dark)) .module-card {
  background: #ffffff;
  border-color: rgba(139, 92, 246, 0.12);
  box-shadow: 0 2px 8px rgba(100, 60, 180, 0.05);
  backdrop-filter: none;
}
:global(:root:not(.dark)) .module-card--featured {
  background: linear-gradient(145deg, #faf8ff 0%, #f5f0ff 100%);
  border-color: rgba(139, 92, 246, 0.18);
}
:global(:root:not(.dark)) .module-card:hover {
  border-color: rgba(139, 92, 246, 0.35) !important;
  box-shadow:
    0 16px 40px rgba(100, 60, 180, 0.12),
    0 0 0 1px rgba(139, 92, 246, 0.1);
}

:global(:root:not(.dark)) .module-title {
  color: #1a1523;
}
:global(:root:not(.dark)) .module-desc {
  color: #5a5070;
}
:global(:root:not(.dark)) .module-tag {
  background: rgba(109, 40, 217, 0.07);
  border-color: rgba(109, 40, 217, 0.18);
  color: #5b21b6;
}
:global(:root:not(.dark)) .module-tag--hot {
  background: rgba(219, 39, 119, 0.07);
  border-color: rgba(219, 39, 119, 0.2);
  color: #be185d;
}
:global(:root:not(.dark)) .module-arrow {
  color: rgba(109, 40, 217, 0.4);
}
:global(:root:not(.dark)) .module-card:hover .module-arrow {
  color: #6d28d9;
}

/* ===== 响应式：矩阵菜单 ===== */
@media (max-width: 960px) {
  .modules-section {
    padding: 0 32px 72px;
  }
  .modules-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
}

@media (max-width: 640px) {
  .modules-section {
    padding: 0 20px 56px;
  }
  .modules-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .module-card {
    flex-direction: row;
    align-items: flex-start;
    gap: 14px;
    padding: 20px;
  }
  .module-icon-wrap {
    margin-bottom: 0;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .module-icon {
    font-size: 1.6rem;
  }
  .modules-title {
    font-size: 1.4rem;
  }
}
</style>
