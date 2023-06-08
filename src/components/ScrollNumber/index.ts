import { App } from 'vue'
import ScrollNumber from './index.vue'

ScrollNumber.name = 'scroll-number'

ScrollNumber.install = (app: App) => {
  app.component('scroll-number', ScrollNumber)
}

export default ScrollNumber
