<template>
  <div class="down_main">

  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      home: '首页'
    }
  },
  methods: {
    init() {
      console.log('==============================')
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="less" scoped>
.down_main {
  padding-top: 6rem;
  min-height: calc(~'100vh - 13.5rem');
}
</style>

