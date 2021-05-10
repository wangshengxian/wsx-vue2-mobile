/**
 * 点击按钮 --> 唤起app/去下载页
 */
import platform from '@/utils/platform'
import { downloadUrl } from '@/const/global'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      timerObj: null,
      nativeUrlObj: {
        android: 'app://com.xinxin.tangseng',
        ios: 'tangsengLive://'
      }
    }
  },
  computed: {
    ...mapState('user', ['accessToken']),
    isNoKey() {
      console.log('-key-mixin-复用-', !this.accessToken)
      return this.accessToken == 'undefined' || !this.accessToken
    },
    downloadUrl() {
      return process.env.VUE_APP_SERVER_ENV === 'prod' ? downloadUrl['prod'] : downloadUrl['test']
    }
  },
  mounted() {
    window.addEventListener('pagehide', this.handlePagehide)
    window.addEventListener('visibilitychange', this.handleVisibility)
  },
  destroyed() {
    window.removeEventListener('pagehide', this.handlePagehide)
    window.removeEventListener('visibilitychange', this.handleVisibility)
  },
  methods: {
    handlePagehide() {
      // TODO: 该函数会在打开新的界面之后触发，暂时不能解决唤起ios 唐僧直播app后还会去跳转下载页的bug
      console.log('-界面隐藏-ios可以监听-')
      clearTimeout(this.timerObj)
    },
    handleVisibility() {
      console.log('-visibility-安卓可以监听-')
      let hidden =
        window.document.hidden || window.document.mozHidden || window.document.msHidden || window.document.webkitHidden
      console.log('-hidden-', hidden)
      if (hidden) {
        clearTimeout(this.timerObj)
      }
    },
    // 点击事件(TODO: 页面组件调用)
    clickEventFunc() {
      console.log('-click-mixin-复用-')
      if (platform.isAndroid) {
        window.location.href = this.nativeUrlObj.android
      }
      if (platform.isIos) {
        window.location.href = this.nativeUrlObj.ios
      }
      this.timerObj = setTimeout(() => {
        console.log('去下载', this.downloadUrl)
        window.location.href = this.downloadUrl
      }, 3000)
    }
  }
}
