// 请求拦截器
import axios from 'axios'
import { Toast, Dialog } from 'vant'
import store from '@/store'
import router from '@/router'

const service = axios.create()

// 定义额外的配置
let configMore

function request(config) {
  const { isSelf } = config
  configMore = { isSelf }
  return service(config)
}

// request interceptor
service.interceptors.request.use(
  config => {
    config.baseURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_SERVER_URL : ''
    config.timeout = config.timeout || 50000
    // 数据传参使用表单形式
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
    if (store.state.user.accessToken) {
      // console.log('-key-', store.state.user.accessToken)
      config.headers['key'] = store.state.user.accessToken
    }
    config.headers['language'] = 0
    config.method = config.method || 'post'
    if (config.method === 'post') {
      config.data = config.data || {}
    } else if (config.method === 'get') {
      config.params = config.data || config.params
    }
    // console.log('-config-', config)
    return config
  },
  error => {
    // Do something with request error
    console.log('_REQ_ERROR_', error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // isSelf为true，直接返回res
    if (configMore.isSelf) {
      return res
    }
    // code为200,正常返回数据
    if (+res.code == 200) {
      return res
    }
    Toast({
      message: res.msg,
      duration: 2000
    })
    return Promise.reject(res)
  },
  error => {
    // TODO 服务器繁忙，可能是key值不对
    // 超时/响应失败，系统故障
    console.log('_RES_ERROR_', error, error.message)
    console.log('-router-name-', router.currentRoute.name)
    if (router.currentRoute.name === 'Index') {
      // 返回到客户端环境
      console.log('-首页-')
      return
    }
    console.log('-其它页-')
    Toast({
      message: 'error：' + error.message,
      duration: 2000
    })
    return Promise.reject(error)
  }
)

export default request
