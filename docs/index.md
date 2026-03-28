---
layout: home
---

<HomeHero />

<div class="features-section">

## 学习模块

<div class="features-grid">
  <a href="/web3-basics/" class="feature-card">
    <span class="feature-icon">🧱</span>
    <div class="feature-body">
      <div class="feature-title">Web3 基础</div>
      <div class="feature-desc">区块链原理、钱包安全、主流公链对比。从底层逻辑理解 Web3，不做无知韭菜。</div>
    </div>
    <span class="feature-link">开始学习 →</span>
  </a>
  <a href="/defi/" class="feature-card">
    <span class="feature-icon">💧</span>
    <div class="feature-body">
      <div class="feature-title">DeFi 进阶</div>
      <div class="feature-desc">DEX、AMM、流动性挖矿、借贷协议深度解析。真正搞懂 TVL、APY 背后的运作机制。</div>
    </div>
    <span class="feature-link">深入研究 →</span>
  </a>
  <a href="/trading/" class="feature-card">
    <span class="feature-icon">📈</span>
    <div class="feature-body">
      <div class="feature-title">交易策略</div>
      <div class="feature-desc">RSI+MACD+EMA 三指标共振、仓位管理、止损止盈体系。每条信号附止损位和三档止盈目标。</div>
    </div>
    <span class="feature-link">查看策略 →</span>
  </a>
  <a href="/tools/" class="feature-card">
    <span class="feature-icon">🛠️</span>
    <div class="feature-body">
      <div class="feature-title">工具箱</div>
      <div class="feature-desc">链上数据、行情监控、聪明钱追踪、安全工具。精选 20+ 工具，效率翻倍。</div>
    </div>
    <span class="feature-link">查看工具 →</span>
  </a>
  <a href="/redbook/" class="feature-card">
    <span class="feature-icon">📕</span>
    <div class="feature-body">
      <div class="feature-title">区块链红宝书</div>
      <div class="feature-desc">300+ 币圈术语 A-Z 全解析。AMM、DeFi、NFT、HODL……每个词条都讲透，快速建立认知体系。</div>
    </div>
    <span class="feature-link">查词典 →</span>
  </a>
  <a href="/guide/" class="feature-card">
    <span class="feature-icon">📗</span>
    <div class="feature-body">
      <div class="feature-title">币圈投资指南</div>
      <div class="feature-desc">从避险到躺赚，从价值投资到仓位管理 334 战法。7章精华，带你穿越牛熊周期。</div>
    </div>
    <span class="feature-link">读指南 →</span>
  </a>
</div>

</div>

<style>
.features-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px 80px;
}

.features-section h2 {
  text-align: center;
  font-size: 1.6rem !important;
  font-weight: 800 !important;
  color: rgba(255, 255, 255, 0.85) !important;
  margin-bottom: 32px !important;
  margin-top: 0 !important;
  padding-top: 0 !important;
  border-top: none !important;
  letter-spacing: -0.5px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 24px 24px;
  background: linear-gradient(145deg, rgba(17, 17, 24, 0.8) 0%, rgba(13, 13, 18, 0.9) 100%);
  border: 1px solid rgba(139, 92, 246, 0.12);
  border-radius: 20px;
  text-decoration: none !important;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(12px);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.6) 30%, rgba(192, 132, 252, 0.8) 50%, rgba(139, 92, 246, 0.6) 70%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.feature-card:hover {
  border-color: rgba(139, 92, 246, 0.35) !important;
  transform: translateY(-6px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.15);
  text-decoration: none !important;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  font-size: 2.2rem;
  line-height: 1;
  filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.3));
}

.feature-body {
  flex: 1;
}

.feature-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: 8px;
  letter-spacing: -0.2px;
}

.feature-desc {
  font-size: 0.855rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.45);
}

.feature-link {
  font-size: 0.82rem;
  color: #a78bfa;
  font-weight: 500;
}

@media (max-width: 960px) {
  .features-section {
    padding: 0 32px 60px;
  }
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-section {
    padding: 0 20px 48px;
  }
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
