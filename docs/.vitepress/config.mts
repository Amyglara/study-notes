import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '跟着Bit东学习Web3',
  description: '系统学习Web3、DeFi、链上交易的知识库',
  lang: 'zh-CN',

  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#7c3aed' }],
  ],

  themeConfig: {
    logo: '🦞',
    siteTitle: '跟着Bit东学Web3',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Web3基础', link: '/web3-basics/' },
      { text: 'DeFi进阶', link: '/defi/' },
      { text: '交易策略', link: '/trading/' },
      { text: '工具箱', link: '/tools/' },
      { text: '麒麟会情报', link: 'https://zx.bitdong.xyz', target: '_blank' },
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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bitdong798' },
    ],

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

    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到亮色',
    darkModeSwitchTitle: '切换到暗色',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
  },

  markdown: {
    lineNumbers: true,
  },

  ignoreDeadLinks: true,
})
