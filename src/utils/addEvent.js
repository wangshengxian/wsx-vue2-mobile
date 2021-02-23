// 监听事件
import router from '@/router'

window.addEventListener(
  'popstate',
  function(e) {
    // console.log('-main-')
    router.isBack = true
  },
  false
)
