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

/* ===== 响应式 ===== */
@media (max-width: 960px) {
  .hero-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 56px;
    padding: 80px 32px 60px;
  }

  .hero-name,
  .hero-text {
    font-size: 2.8rem;
    letter-spacing: -1.2px;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-content {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 20px 48px;
    gap: 40px;
  }

  .hero-name,
  .hero-text {
    font-size: 2.2rem;
    letter-spacing: -0.8px;
  }

  .book {
    width: 180px;
    height: 245px;
  }

  .book-front {
    width: 180px;
    height: 245px;
  }

  .book-spine,
  .book-pages {
    height: 245px;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
