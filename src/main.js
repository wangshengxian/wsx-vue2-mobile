import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from '@/components/loading'
// 全局样式
import '@/styles/index.less'
// 重置样式插件
import 'normalize.css/normalize.css'
// 路由守卫
import '@/static/routerGuards.js'
// vconsole调试工具
import '@/static/vconsole.js'
// rem适配
import '@/static/flexible.js'
// vant按需引入
import '@/static/importVant.js'

// 面向对象相关
import '@/utils/oop/srp.js'
import '@/utils/oop/stateModel.js'

Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
