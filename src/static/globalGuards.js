// 全局守卫
import store from '@/store'
import storage from '@/utils/storage'
import { Toast } from 'vant'

/**
 * 设置顶部状态栏高度
 */
function setStatusBarHeight(to, from) {
  // console.log('-to-', to.query)
  const { statusBarHeight } = to.query
  statusBarHeight && store.commit('global/setStatusBarHeight', statusBarHeight)
}

/**
 * 存储登录状态
 */
function setLoginStatus(to, from) {
  if (to.query && to.query.key !== undefined) {
    // console.log('-query-', to.query)
    let accessToken = to.query.key
    // 通知store更改状态
    store.commit('user/setAccessToken', accessToken)
    storage.setItem('key', accessToken)
    storage.setItem('locationSearch', window.location.search)
  }
}

/**
 * 修改页面title
 */
function setDocumentTitle(to, from) {
  document.title = '' // TODO 根据具体的项目自行更改
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
}

/**
 * 跳转登录页(需要地址栏有need_login参数)
 */
function jumpNeedLogin(to, from, next) {
  if (to.query && to.query.need_login) {
    if (store.getters && !store.getters['user/accessToken']) {
      Toast({
        message: '去登录页',
        duration: '3000'
        // onClose: () => {
        //   next('/login')
        // }
      })
    }
  }
}

/**
 * 设置路由跳转的name
 */
function setRouteNames(to, from) {
  let names = [to.name, from.name]
  console.log(names)
  store.commit('global/setToFromRouteNames', names)
  storage.setItem('routeNames', names)
  return
}

export default {
  setStatusBarHeight,
  setLoginStatus,
  setDocumentTitle,
  jumpNeedLogin,
  setRouteNames
}
