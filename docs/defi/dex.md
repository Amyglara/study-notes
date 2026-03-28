# DEX 去中心化交易所

DEX（Decentralized Exchange）是 DeFi 最核心的基础设施——不需要注册账号，钱包连上就能交易。

## DEX vs CEX

| 对比 | CEX（币安/OKX） | DEX（Uniswap） |
|------|---------------|--------------|
| 托管方 | 交易所 | 你自己 |
| 需要 KYC | 是 | 否 |
| 资产安全 | 依赖交易所 | 依赖合约安全性 |
| 被黑风险 | 交易所层面 | 合约层面 |
| 上币速度 | 慢（审核） | 即时（任何人都能创建交易对） |
| 滑点控制 | 精确 | 受流动性影响 |

> 💡 黄金法则：**长期持仓放冷钱包，交易用 DEX，大额出入金用 CEX**。

## AMM 自动做市商原理

传统交易所用"订单簿"（买家挂价等卖家）。  
DEX 用 **AMM（Automated Market Maker）**：

```
流动性池 = 两种代币的资金池

核心公式：x * y = k（恒定乘积）

  ETH数量(x) × USDC数量(y) = 常数(k)

例：池子里有 100 ETH + $200,000 USDC
    k = 100 × 200000 = 20,000,000

用户买入 10 ETH：
  新ETH量 = 90
  新USDC量 = 20,000,000 / 90 = $222,222
  用户需支付 $22,222（比预期贵，这就是"价格影响"）
```

**流动性越低 → 价格影响越大 → 滑点越高**

## 主流 DEX

### Uniswap（以太坊生态）

```
网址：app.uniswap.org
支持链：ETH / Arbitrum / Base / Polygon / Optimism 等
版本：V3（主力） / V4（2024年推出）
```

**V3 核心创新：集中流动性**
- LP 可以把资金集中在特定价格区间
- 同等资金提供更深流动性，手续费收益更高
- 代价是需要主动管理（价格超出区间就不赚了）

---

### PancakeSwap（BNB Chain）

```
网址：pancakeswap.finance
原链：BNB Chain
代币：CAKE
```

- BNB Chain 第一大 DEX
- V3 也支持集中流动性
- 额外的 Syrup Pool / Farm 赚额外收益

---

### Jupiter（Solana）

```
网址：jup.ag
原链：Solana
```

- Solana 最大的交易聚合器
- 自动找最优路径，跨多个 Solana DEX 拆单
- 交易体验接近 CEX

---

### GMX（衍生品 DEX）

```
网址：gmx.io
支持链：Arbitrum / Avalanche
```

- 永续合约 DEX
- 零滑点，直接使用预言机报价
- GLP 持有者充当做市商，赚手续费

## 实际操作：在 Uniswap Swap

1. 打开 [app.uniswap.org](https://app.uniswap.org)
2. 连接 MetaMask（右上角 Connect）
3. 选择网络（推荐 Arbitrum 省 Gas）
4. 选择卖出代币 → 买入代币
5. 设置**滑点容忍度**（默认 0.5%，土狗代币可能需要 5-15%）
6. 点击 Swap → 钱包确认

::: warning 滑点说明
滑点 = 你接受的最大不利价格偏差。  
滑点设太低 → 交易失败  
滑点设太高 → 可能被三明治攻击（MEV）  
建议：主流币 0.5%，小币 1-3%
:::

## MEV 与三明治攻击

```
你的交易还在 mempool（待处理区）时：

机器人看到你要买 ETH：
  1. 抢先买 ETH（推高价格）
  2. 你的交易执行（以更高价格买入）
  3. 机器人卖出（赚差价）
```

**防御**：使用 [MEV Blocker](https://mevblocker.io/) RPC 或 Flashbots Protect。

## DEX 聚合器

聚合多个 DEX 的流动性，自动找最优价格：

| 聚合器 | 主要链 | 优势 |
|--------|-------|------|
| **1inch** | 多链 | 最老牌，覆盖链多 |
| **Paraswap** | 多链 | 机构级拆单 |
| **Jupiter** | Solana | Solana 必用 |
| **OKX DEX** | 多链 | 中文友好 |

## 延伸阅读

→ [流动性挖矿](./liquidity)  
→ [借贷协议](./lending)
