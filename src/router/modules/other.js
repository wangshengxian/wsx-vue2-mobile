const loginRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/login'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/userAgreement',
    name: 'UserAgreement',
    component: () => import(/* webpackChunkName: 'userAgreement' */ '@/views/userAgreement'),
    meta: {
      title: '用户协议'
    }
  }
]
export default loginRouter
