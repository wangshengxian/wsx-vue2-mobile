<!--
  动态生成二维码
-->
<template>
  <div class="qrcode" v-show="imgUrl" :style="{ width: codeWidth + 'px', height: codeHeight + 'px' }">
    <img :src="imgUrl" alt="" />
    <slot />
  </div>
</template>

<script>
import qrCode from 'qrcode'
export default {
  name: '',
  data() {
    return {
      imgUrl: ''
    }
  },
  props: {
    wxUrl: {
      type: String,
      default: ''
    },
    codeWidth: {
      type: Number,
      default: 100
    },
    codeHeight: {
      type: Number,
      default: 100
    }
  },
  watch: {
    wxUrl(val) {
      console.log('-val-', val)
      if (val) {
        this.getData(val)
      }
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {
    getData(data) {
      qrCode
        .toDataURL(data)
        .then(res => {
          console.log('-res-', res)
          this.imgUrl = res
        })
        .catch(err => {
          console.log('-err-', err)
        })
    }
  }
}
</script>
<style lang="less" scoped>
.qrcode {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
