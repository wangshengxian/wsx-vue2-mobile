import Vue from 'vue'
import VueRouter from 'vue-router'

// require.context 函数接受三个参数：
// 1、directory {String} -读取文件的路径
// 2、useSubdirectories {Boolean} -是否遍历文件的子目录
// 3、regExp {RegExp} -匹配文件的正则

// require.context() 返回的为一个函数，该函数有三个属性：
// 属性 1 ==》resolve {Function} -接受一个参数request,request为modules文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
// 属性 2 ==》keys {Function} -返回匹配成功模块的名字组成的数组
// 属性 3 ==》id {String} -执行环境的id,返回的是一个字符串,主要用在module.hot.accept,应该是热加载?
// 这三个都是作为函数的属性(注意是作为函数的属性,函数也是对象,有对应的属性)

// 模块自动化导入
const modulesFiles = require.context('./modules', false, /\.js$/)

const modulesRouters = modulesFiles.keys().reduce((total, curr) => {
  const value = modulesFiles(curr)
  return total.concat(value.default)
}, [])

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: 'index' */ '@/views/index'),
    meta: {
      title: 'index页'
    }
  },
  ...modulesRouters
]

const errorPage = [
  {
    path: '/errorPage',
    name: 'ErrorPage',
    component: () => import(/* webpackChunkName: 'errorPage' */ '@/views/errorPage/404')
  }
]
console.log('-router-', routes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.concat(errorPage)
})
export default router
