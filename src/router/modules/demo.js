const demoRouter = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import(/* webpackChunkName: 'activity' */ '@/views/activity/actOne'),
    meta: {
      title: '活动页'
    }
  },
  {
    path: '/listPage',
    name: 'ListPage',
    component: () => import(/* webpackChunkName: 'listPage' */ '@/views/listPage'),
    meta: {
      title: '列表页'
    }
  }
]

export default demoRouter
