import { App } from 'vue'
import ScrollNumber from './ScrollNumber'

//按需引入
export { ScrollNumber }

const install = (app: App) => {
  app.component('scroll-number', ScrollNumber)
}

export default { install }
