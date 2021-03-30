<template>
  <div class="living_main">
    <div class="zhanweizhi"></div>
    <div class="living-category div-center">
      <ul class="category-list category">
        <li class="category-li" :class="{category_li_choosed:chooseIndex==1}" @click="chooseIndex = 1">全部</li>
        <li class="category-li" :class="{category_li_choosed:chooseIndex==2}" @click="chooseIndex = 2">足球</li>
        <li class="category-li" :class="{category_li_choosed:chooseIndex==3}" @click="chooseIndex = 3">篮球</li>
        <li class="category-li" :class="{category_li_choosed:chooseIndex==4}" @click="chooseIndex = 4">电竞</li>
      </ul>
    </div>
    <div class="living-content div-center">
      <div class="content-li" v-for="(index) in 6" :key="index" @click="anchorLiving">
        <img src="https://img.ncyrsc.com/image/live/20210313/8d53f94939e73d2b00bc202cc4674054?imageView2/2/w/600/h/600">
        <div class="living-name">15:30 CBA 江苏VS上海</div>
        <div class="anchor">
          <div class="anchor-name"><img alt="图标" src="https://img.ncyrsc.com/image/avatar/default_thumb.jpg" lazy="loaded">阿蛇</div>
          <div class="anchor-heat"><span class="iconfont iconfire"></span>1132235</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'living',
  data() {
    return {
      home: '首页',
      chooseIndex: 1
    }
  },
  methods: {
    init() {
      console.log('==============================')
    },
    anchorLiving() {
      let routeUrl = this.$router.resolve({
        name: 'house',
        params: { id: 96 }
      })
      window.open(routeUrl.href, '_blank')
      // this.$router.push({ name: 'house', params: { id: 1 } })
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/css/images.css');
.living_main {
  padding-top: 6rem;
  // min-height: calc(~'100vh - 13.5rem');
  min-height: calc(~'100vh - 13.5rem');
  // .zhanweizhi {
  //   height: 6rem;
  //   width: 100%;
  //   background-color: #fff;
  // }
}
.living-category {
  .category-list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    background-color: #fff;
    padding: 1rem 0;

    .category-li {
      cursor: pointer;
      margin-left: 1rem;
      border-radius: 2rem;
      font-size: 1.2rem;
      padding: 1rem 5rem;
    }
    .category_li_choosed {
      background: #ff5116;
      color: #fff;
    }
  }
}
.living-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-top: 2rem;
  .content-li {
    margin: 1rem 2rem 1rem 0rem;
    width: 28rem;
    background: #fff;
    img {
      width: 100%;
      height: 15.7rem;
    }
    .living-name {
      padding: 0.5rem 0 0 1rem;
      font-size: 1.2rem;
      font-weight: 700;
    }
    .anchor {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1rem 1rem 1rem;
      font-size: 1.2rem;
      line-height: 1;
      img {
        width: 2.5rem;
        height: 2.5rem;
        vertical-align: middle;
        margin-right: 0.5rem;
      }
      .anchor-name {
        color: #9f9f9f;
      }
      .anchor-heat {
        color: #9f9f9f;
      }
    }
  }
}
</style>


