import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '跟着Bit东学习Web3',
  description: '系统学习Web3、DeFi、链上交易的知识库',
  lang: 'zh-CN',

  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#7c3aed' }],
    // 强制暗色：页面加载时立即写死 dark class，防止闪白
    ['script', {}, `
      (function() {
        document.documentElement.classList.add('dark');
        localStorage.setItem('vitepress-theme-appearance', 'dark');
      })();
    `],
  ],

  themeConfig: {
    logo: { src: '/avatar.jpg', width: 28, height: 28, style: 'border-radius: 50%' },
    siteTitle: '跟着Bit东学Web3',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习',
        items: [
          { text: '🧱 Web3 基础', link: '/web3-basics/' },
          { text: '💧 DeFi 进阶', link: '/defi/' },
          { text: '📈 交易策略', link: '/trading/' },
          { text: '🛠️ 工具箱', link: '/tools/' },
        ]
      },
      {
        text: '知识库',
        items: [
          { text: '📕 区块链红宝书', link: '/redbook/' },
          { text: '📗 币圈投资指南', link: '/guide/' },
          { text: '🌟 Bit东知识库', link: '/bitdong/' },
        ]
      },
      { text: '🦞 麒麟会情报', link: 'https://zx.bitdong.xyz', target: '_blank' },
    ],

    sidebar: {
      '/web3-basics/': [
        {
          text: 'Web3 基础',
          items: [
            { text: '什么是Web3', link: '/web3-basics/' },
            { text: '区块链原理', link: '/web3-basics/blockchain' },
            { text: '钱包与私钥', link: '/web3-basics/wallet' },
            { text: '公链对比', link: '/web3-basics/chains' },
          ]
        }
      ],
      '/defi/': [
        {
          text: 'DeFi 进阶',
          items: [
            { text: 'DeFi概览', link: '/defi/' },
            { text: 'DEX 交易所', link: '/defi/dex' },
            { text: '流动性挖矿', link: '/defi/liquidity' },
            { text: '借贷协议', link: '/defi/lending' },
          ]
        }
      ],
      '/trading/': [
        {
          text: '交易策略',
          items: [
            { text: '策略概览', link: '/trading/' },
            { text: '技术分析入门', link: '/trading/ta-basics' },
            { text: 'RSI+MACD共振', link: '/trading/rsi-macd' },
            { text: '仓位管理', link: '/trading/position' },
          ]
        }
      ],
      '/tools/': [
        {
          text: '工具箱',
          items: [
            { text: '工具概览', link: '/tools/' },
            { text: '链上数据工具', link: '/tools/onchain' },
            { text: '行情监控', link: '/tools/monitor' },
          ]
        }
      ],
      '/redbook/': [
        {
          text: '📕 区块链红宝书',
          items: [
            { text: '前言 & 目录', link: '/redbook/' },
          ]
        },
        {
          text: 'A - F',
          items: [
            { text: 'A：A16Z / AAVE / AMM…', link: '/redbook/a' },
            { text: 'B：BTC / BSC / 爆仓…', link: '/redbook/b' },
            { text: 'C：CEX / 仓位 / CZ…', link: '/redbook/c' },
            { text: 'D：DeFi / DAO / 地板价…', link: '/redbook/d' },
            { text: 'E：EVM / ERC-20 / ETF…', link: '/redbook/e' },
            { text: 'F：FOMO / FUD / 分叉…', link: '/redbook/f' },
          ]
        },
        {
          text: 'G - M',
          items: [
            { text: 'G：Gas / GameFi / 公链…', link: '/redbook/g' },
            { text: 'H：哈希 / HODL / 合约…', link: '/redbook/h' },
            { text: 'I：ICO / IDO / IPFS…', link: '/redbook/i' },
            { text: 'J：韭菜 / 节点 / 机枪池…', link: '/redbook/j' },
            { text: 'K：KYC / 空投 / 跨链桥…', link: '/redbook/k' },
            { text: 'L：Layer2 / 流动性 / 冷钱包…', link: '/redbook/l' },
            { text: 'M：Mint / MetaMask / MEME…', link: '/redbook/m' },
          ]
        },
        {
          text: 'N - Z',
          items: [
            { text: 'N：NFT / 匿名币', link: '/redbook/n' },
            { text: 'O：OTC / OG / 欧易', link: '/redbook/o' },
            { text: 'P：PoW / PoS / 私钥…', link: '/redbook/p' },
            { text: 'Q：去中心化 / 区块 / 清算…', link: '/redbook/q' },
            { text: 'R：ROI / Rug Pull / 软分叉…', link: '/redbook/r' },
            { text: 'S：Staking / 私钥 / 梭哈…', link: '/redbook/s' },
            { text: 'T：TVL / Token / 土狗…', link: '/redbook/t' },
            { text: 'U：USDT / Uniswap', link: '/redbook/u' },
            { text: 'V：Volume / V神', link: '/redbook/v' },
            { text: 'W：Web3 / Whale / 稳定币…', link: '/redbook/w' },
            { text: 'X：洗盘 / 现货 / 限价单', link: '/redbook/x' },
            { text: 'Y：预言机 / 以太坊 / 硬分叉…', link: '/redbook/y' },
            { text: 'Z：智能合约 / 助记词 / 做多…', link: '/redbook/z' },
          ]
        },
      ],
      '/bitdong/': [
        {
          text: '🌟 Bit东知识库',
          items: [
            { text: '知识库总览', link: '/bitdong/' },
          ]
        },
        {
          text: '📋 入门教程',
          collapsed: false,
          items: [
            { text: '投资导航', link: '/bitdong/nav' },
            { text: '第1步：交易所注册', link: '/bitdong/step1' },
            { text: '第2步：买币·钱包·链上', link: '/bitdong/step2' },
            { text: '第3步：十大神级工具', link: '/bitdong/step3' },
            { text: '第4步：链上土狗暴赚', link: '/bitdong/step4' },
            { text: '第5步：电报隐私设置', link: '/bitdong/step5' },
            { text: '从零到500万教程', link: '/bitdong/500w' },
            { text: '40%稳定币年化利息', link: '/bitdong/stable40' },
            { text: 'AI教程一文搞定', link: '/bitdong/ai-guide' },
            { text: '币安OKX管道收入', link: '/bitdong/exchange-income' },
            { text: '不冻卡出金&炒美股', link: '/bitdong/withdraw' },
          ]
        },
        {
          text: '✍️ Bit东原创',
          collapsed: false,
          items: [
            { text: '原创合集', link: '/bitdong/original/' },
            { text: '序言：正道', link: '/bitdong/original/preface' },
            { text: 'MEME币观点集锦', link: '/bitdong/original/meme' },
            { text: '观点合集：流动性与噪音', link: '/bitdong/original/views-collection' },
            { text: '进化思考：13个思维模型', link: '/bitdong/original/evolution-thinking' },
          ]
        },
        {
          text: '💡 投资智慧',
          collapsed: false,
          items: [
            { text: '智慧总览', link: '/bitdong/wisdom/' },
          ]
        },
        {
          text: '🏦 投资大师',
          collapsed: false,
          items: [
            { text: '大师索引', link: '/bitdong/wisdom/masters' },
            { text: '巴菲特：价值投资哲学', link: '/bitdong/wisdom/buffett' },
            { text: '段永平：逻辑100条', link: '/bitdong/wisdom/duan-yongping' },
            { text: '彼得·蒂尔：反直觉哲学', link: '/bitdong/wisdom/peter-thiel' },
            { text: '麦刚：比特币布道者', link: '/bitdong/wisdom/maigang' },
          ]
        },
        {
          text: '🥷 跨界大神',
          collapsed: false,
          items: [
            { text: '杨振宁：直觉与人生智慧', link: '/bitdong/wisdom/yang-zhenning' },
            { text: '黄铮：把资本主义倒过来', link: '/bitdong/wisdom/huang-zheng' },
          ]
        },
        {
          text: '💪 民间高手',
          collapsed: false,
          items: [
            { text: 'GCR的30条交易心得', link: '/bitdong/wisdom/gcr-30-tips' },
            { text: '王川：投资智慧精华', link: '/bitdong/wisdom/wang-chuan' },
            { text: '神鱼：分层投资策略', link: '/bitdong/wisdom/shenyu-strategy' },
            { text: '四海：信仰与基础概率', link: '/bitdong/wisdom/si-hai' },
            { text: 'ZTZZBTC：币圈十戒', link: '/bitdong/wisdom/ztzzbtc' },
            { text: 'Paulwei：注意力经济', link: '/bitdong/wisdom/paulwei' },
          ]
        },
        {
          text: '🎤 各界名人',
          collapsed: false,
          items: [
            { text: 'CZ的原则', link: '/bitdong/wisdom/cz-principles' },
            { text: '何一：打造基业长青的系统', link: '/bitdong/wisdom/he-yi' },
          ]
        },
        {
          text: '🌱 成长好文',
          collapsed: false,
          items: [
            { text: '掌控多巴胺', link: '/bitdong/wisdom/control-dopamine' },
          ]
        },
        {
          text: '🎭 佚名精选',
          collapsed: true,
          items: [
            { text: '佚名精选观点', link: '/bitdong/wisdom/anonymous' },
          ]
        },
        {
          text: '📚 投资经典',
          collapsed: false,
          items: [
            { text: '经典总览', link: '/bitdong/classics/' },
            { text: '📖 好书推荐', link: '/bitdong/classics/books' },
            { text: '🔵 价值投资与加密货币', link: '/bitdong/classics/value-investing' },
          ]
        },
        {
          text: '📐 经典理论',
          collapsed: false,
          items: [
            { text: '全球18位最伟大投资家', link: '/bitdong/classics/18-investors' },
            { text: '如何逃顶和抄底·霍华德马克斯', link: '/bitdong/classics/howard-marks' },
          ]
        },
        {
          text: '🧠 超级思维',
          collapsed: false,
          items: [
            { text: '彼得·蒂尔：投资帝国与反直觉', link: '/bitdong/wisdom/peter-thiel' },
            { text: '神鱼：从1000到10亿美元建议', link: '/bitdong/wisdom/shenyu-strategy' },
            { text: '为什么马斯克总能打败对手', link: '/bitdong/classics/why-musk-wins' },
            { text: '价值投资在加密货币复现', link: '/bitdong/classics/value-investing' },
            { text: '顶流公链估值模型', link: '/bitdong/classics/blockchain-valuation' },
          ]
        },
        {
          text: '🔍 专项研究',
          collapsed: true,
          items: [
            { text: '交易秘诀', link: '/bitdong/trading-secrets/' },
            { text: '🔒 精通 Zcash', link: '/bitdong/projects/zcash' },
          ]
        },
      ],
      '/guide/': [
        {
          text: '📗 币圈投资指南',
          items: [
            { text: '简介 & 作者序', link: '/guide/' },
          ]
        },
        {
          text: '📗 上册',
          items: [
            { text: '第一章：投资的刚需是避险', link: '/guide/chapter1' },
            { text: '第二章：你真的在价值投资吗', link: '/guide/chapter2' },
            { text: '第三章：币市赚钱的真相', link: '/guide/chapter3' },
          ]
        },
        {
          text: '📘 下册',
          items: [
            { text: '第四章：学会躺着挣钱', link: '/guide/chapter4' },
            { text: '第五章：赋予币圈投资人生意义', link: '/guide/chapter5' },
            { text: '第六章：会管理仓位才能盈利', link: '/guide/chapter6' },
            { text: '第七章：热门高赞回答锦集', link: '/guide/chapter7' },
          ]
        },
      ],
    },


    footer: {
      message: '知识改变命运，学习创造财富',
      copyright: '© 2026 Bit东 · 麒麟会'
    },

    search: {
      provider: 'local'
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
  },

  markdown: {
    lineNumbers: true,
  },

  ignoreDeadLinks: true,
})
