/**
 * 刷新当前界面
 */
import openNative from '@/utils/openNative'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('global', ['loadErrorCount'])
  },
  methods: {
    handleReload(msg, fn) {
      this.$dialog
        .confirm({
          title: '服务器开小差了!',
          message: msg,
          cancelButtonText: '返回',
          confirmButtonText: '重新加载'
        })
        .then(() => {
          this.$store.commit('global/setLoadErrorCount')
          console.log('-load-count-', this.loadErrorCount)
          if (this.loadErrorCount > 3) {
            this.$toast({
              message: '服务器开小差了，请稍后再重试!',
              onClose: () => {
                openNative.closeWebview()
              }
            })
            return
          }
          fn()
        })
        .catch(() => {
          openNative.closeWebview()
        })
    }
  }
}
