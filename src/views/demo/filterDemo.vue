<!--
   filters - 过滤器
-->
<template>
  <div class="filterDemo">
    <p>{{ text | textChange1 }}</p>
    <p>{{ text | textChange2 }}</p>
    <p>{{ text | textChange3 }}</p>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      text: 'hello World'
    }
  },
  filters: {
    // charAt(index) 获取index下标字符，toUpperCase() 转大写，toLowerCase() 转小写，slice(start,end) 截取字符串
    textChange1(val) {
      if (!val) return ''
      val = val.toString()
      return val.charAt(0).toUpperCase() + val.slice(1)
    },
    textChange2(val) {
      if (!val) return ''
      val = val.toString()
      return val.toLowerCase()
    },
    textChange3(val) {
      if (!val) return ''
      val = val.toString()
      return val.toUpperCase()
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
