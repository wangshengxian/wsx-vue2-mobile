<!--
   活动页
-->
<template>
  <div class="activity">
    <headerBar
      :background="headConfig.bgColor"
      :arrowsType="headConfig.arrowsType"
      :titleOpacity="headConfig.titleOpacity"
      isMainFullScreen
      :isHighColor="false"
      :onBack="onBack"
    ></headerBar>
    <div class="main">
      <!-- 主要内容区 -->
      <div class="imgBg">
        <img :src="bgImgUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from '@/components/headerBar'
import headConfigMixins from '@/mixins/headConfig'
import openNative from '@/native/openNative'
export default {
  name: '',
  mixins: [headConfigMixins],
  data() {
    return {
      bgImgUrl: require('@/assets/images/activity/liveFeatureBg.png')
    }
  },
  computed: {},
  components: { headerBar },
  created() {
    this.$loading.show()
    setTimeout(() => {
      this.$loading.hide()
    }, 300)
  },
  mounted() {},
  methods: {
    onBack() {
      const { key } = this.$route.query
      console.log('-query-key-', key)
      if (key) {
        openNative.closeWebview()
        return
      }
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.activity {
  img {
    display: block;
    width: 100%;
  }
}
</style>
