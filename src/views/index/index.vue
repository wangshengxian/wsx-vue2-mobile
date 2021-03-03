<!--
  首页
 -->
<template>
  <div class="index">
    <headerBar :onBack="onBack"></headerBar>

    <div class="main">
      <div class="btnBox">
        <van-button class="btn" type="primary" size="small" @click="toPageHandle('Home')">首页</van-button>
        <van-button class="btn" type="primary" size="small" @click="toPageHandle('Activity')">活动页</van-button>
        <van-button class="btn" type="primary" size="small" @click="toPageHandle('ListPage')">列表页</van-button>
        <van-button class="toLoginBtn" type="info" size="small" @click="toPageHandle('Login')">登录页</van-button>
      </div>
      <div class="btnBox">
        <van-button class="btn" type="primary" size="small" @click="handleCache('add')">添加缓存</van-button>
        <van-button class="btn" type="primary" size="small" @click="handleCache('del')">删除缓存</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from '@/components/headerBar'
import openNative from '@/native/openNative'
import api from '@/api/index'
import { mapState } from 'vuex'
import storage from '@/utils/storage'
import tools from '@/utils/tools'
export default {
  name: 'Index',
  data() {
    return {}
  },
  created() {},
  mounted() {
    console.log('测试服版本v0.0.1')
  },
  computed: {
    ...mapState('user', ['userInfo'])
  },
  methods: {
    onBack() {
      openNative.closeWebview()
    },
    handleCache(type) {
      console.log('type', type)
      let arr = ['home', 'order', 2, true, undefined, null, NaN, { name: 1 }, [1]]
      let source = ['detail', 'goods', 1, 2, 6, true, undefined, null, NaN, { name: 1 }, [1]]
      let result = []
      if (type === 'add') {
        result = [...arr, ...source]
      } else {
        result = tools.removeArrEl(source, arr)
      }
      console.log(result, source, arr)
    },
    toPageHandle(routerName) {
      console.log('-router-name-', routerName)
      this.$router.push({ name: routerName })
    },
    getData() {
      this.$loading.show()
      api
        .getTsInfo()
        .then(res => {
          // console.log(res)
          this.$loading.hide()
          const data = res.data
          console.log(data)
          this.$store.commit('user/setUserInfo', data)
          storage.setItem('userInfo', JSON.stringify(data))
        })
        .catch(error => {
          console.log(error)
          this.$loading.hide()
        })
    }
  },
  components: { headerBar }
}
</script>
<style lang="less" scoped>
.btnBox {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 30px;

  .btn {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
