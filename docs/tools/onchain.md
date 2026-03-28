# 链上数据工具

链上数据是加密市场的"底层现实"——价格可以操纵，链上数据难以造假。

## 为什么看链上数据？

```
K 线看的是价格（结果）
链上数据看的是资金流向（原因）

机构在买还是在卖？
巨鲸在囤还是在出货？
交易所里的 BTC 在增加还是在减少？

这些问题，链上数据能回答。
```

## 核心工具

### Glassnode — 链上分析王者

```
网址：glassnode.com
费用：基础数据免费，深度指标需订阅
适合：BTC / ETH 宏观周期判断
```

**必看指标**：

| 指标 | 含义 | 使用方法 |
|------|------|---------|
| **MVRV Ratio** | 市值/已实现市值 | >3 历史顶部区域；<1 历史底部区域 |
| **SOPR** | 链上盈利情况 | >1 平均在盈利卖出；<1 恐慌割肉 |
| **交易所净流量** | 进出交易所的币量 | 净流出（提币）= 看多；净流入 = 抛压 |
| **长期持有者供应** | 155天未动的币 | 长期持有者不动 = 市场底部信心强 |
| **NVT Ratio** | 网络价值/交易量 | 高 NVT = 价值高估 |

---

### DefiLlama — DeFi 数据大本营

```
网址：defillama.com
费用：完全免费
适合：DeFi 协议研究、链 TVL 对比
```

**主要功能**：
- **TVL 排行**：各公链 / 各协议 TVL 实时对比
- **收益率**：各 DeFi 协议的 APY（`defillama.com/yields`）
- **稳定币**：稳定币发行量和锚定状态
- **DEX 成交量**：各 DEX 每日成交额排行
- **Fees/Revenue**：各协议手续费收入（判断是否有真实使用）

---

### Nansen — 聪明钱追踪

```
网址：nansen.ai
费用：需订阅（约 $150/月），有免费额度
适合：追踪大户、机构钱包动向
```

**特色**：对以太坊地址打标签（已知 CEX / 鲸鱼 / KOL / VC 等），帮你看聪明钱在做什么。

**典型用法**：
- 某代币突然被多个 Smart Money 地址买入 → 提前布局信号
- 交易所地址大量收币 → 抛压信号

---

### Dune Analytics — 自定义链上查询

```
网址：dune.com
费用：基础查询免费
特点：SQL 查询链上数据，任何人都能建 Dashboard
```

**优质免费 Dashboard**：
- [uniswap.dune.com](https://dune.com/hagaetc/dex-metrics) — DEX 成交量
- Blur / OpenSea NFT 数据
- 各 L2 活跃地址数、Gas 使用

---

### Etherscan / BscScan / Solscan

**最基础的区块链浏览器**，每条链都有对应版本：

| 链 | 浏览器 |
|----|-------|
| 以太坊 | [etherscan.io](https://etherscan.io) |
| BNB Chain | [bscscan.com](https://bscscan.com) |
| Solana | [solscan.io](https://solscan.io) |
| Arbitrum | [arbiscan.io](https://arbiscan.io) |
| Base | [basescan.org](https://basescan.org) |

**常用操作**：
- 查询任意钱包地址的持仓和交易记录
- 查合约代码是否开源、是否有 Audit
- 查询代币 Top 100 持仓（判断是否过度集中）
- 追踪大额转账

## 追踪鲸鱼地址

### 手动追踪

1. 发现一个可疑的大额买入地址
2. 在 Etherscan 查看该地址历史
3. 判断是否是"聪明钱"（历史交易多次提前布局）
4. 用 Etherscan 的"地址标签"或 Debank 查全链持仓

### 自动提醒

| 工具 | 功能 |
|------|------|
| **Whale Alert** | Twitter/Telegram 推送大额转账 |
| **Nansen 提醒** | 订阅特定钱包地址动态 |
| **Arkham Intelligence** | 地址溯源，机构分析 |

## 实用链上分析流程

### 判断当前市场周期

```
1. 看 BTC MVRV（Glassnode）
   < 1 → 历史底部区域（低风险买入）
   1-2  → 中期区间
   > 3  → 历史顶部区域（高风险，考虑减仓）

2. 看交易所 BTC 余额（Glassnode）
   持续下降 → 大量提币到冷钱包 → 看多

3. 看恐慌贪婪指数（alternative.me）
   < 20 极恐 → 历史好买点
   > 80 极贪 → 历史好卖点
```

### 研究一个新代币

```
1. Etherscan 查合约：
   - 是否开源？
   - Top 10 钱包持仓比例？（>50% 危险）
   - 流动性锁定了吗？

2. DefiLlama 查 TVL：
   - TVL 在增加还是减少？
   - 和 FDV 对比是否合理？

3. Dune 查活跃用户数：
   - 真实用户在增长吗？
   - 还是只有几个钱包在倒手？
```

## 延伸阅读

→ [行情监控工具](./monitor)  
→ [工具箱概览](/tools/)
