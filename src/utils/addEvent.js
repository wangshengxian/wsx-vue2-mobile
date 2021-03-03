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

window.addEventListener('pageshow', function() {
  console.log('show')
})
window.addEventListener('pagehide', function() {
  console.log('hide')
})
