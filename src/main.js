import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from '@/plugins/loading'
import PageLoading from '@/plugins/pageLoading'
// 全局样式
import '@/styles/index.less'
// 重置样式插件
import 'normalize.css/normalize.css'
// 路由守卫
import '@/utils/routerGuards.js'
// vconsole调试工具
import '@/utils/vconsole.js'
// rem适配
import '@/utils/flexible.js'
// vant按需引入
import '@/utils/importVant.js'

Vue.use(Loading)
Vue.use(PageLoading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
