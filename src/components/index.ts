import { App } from 'vue'
import ScrollNumber from './ScrollNumber'

const install = (app: App) => {
  app.component(ScrollNumber.name, ScrollNumber)
}

export default {
  install,
  ScrollNumber
}
