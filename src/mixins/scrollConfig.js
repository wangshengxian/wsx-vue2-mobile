// 隐藏显示滚动条
export default {
  methods: {
    onHiddenScroll() {
      document.documentElement.style.position = 'fixed'
      document.body.style.overflow = 'hidden' //隐藏滚动条
    },
    onShowScroll() {
      document.documentElement.style.position = 'static'
      document.body.style.overflow = '' //出现滚动条
    }
  }
}
