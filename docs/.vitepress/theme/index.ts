import DefaultTheme from 'vitepress/theme'
import HomeHero from './HomeHero.vue'
import './custom.css'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeHero', HomeHero)
  }
} satisfies Theme
