import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import HomeHero from './HomeHero.vue'
import './custom.css'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('HomeHero', HomeHero)
  }
} satisfies Theme
