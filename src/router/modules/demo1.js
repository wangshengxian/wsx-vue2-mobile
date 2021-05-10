const demo1Router = [
  {
    path: '/filterDemo',
    name: 'FilterDemo',
    component: () => import(/* webpackChunkName: 'filterDemo' */ '@/views/demo/filterDemo')
  }
]

export default demo1Router
