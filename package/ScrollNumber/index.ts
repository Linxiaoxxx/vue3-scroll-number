import { App } from 'vue'
import ScrollNumber from './index.vue'

ScrollNumber.install = (app: App) => {
  app.component(ScrollNumber.name, ScrollNumber)
}

export default ScrollNumber
