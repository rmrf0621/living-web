<template>
  <div class="middle-section div-center">
    <div class="living-list">
      <div class="living-title">
        <div class="main-title">直播推荐</div>
        <div class="title-li">全部</div>
        <div class="title-li">足球</div>
        <div class="title-li">篮球</div>
        <div class="title-li">电竞</div>
      </div>
      <div class="list-content">
        <div class="content-li" v-for="(index) in 6" :key="index">
          <img class="li-logo" alt="adlogo" src="https://img.ncyrsc.com/image/live/20210308/a5f8a7c51c02f48dd87be2a39f66c01a?imageView2/2/w/600/h/600">
          <div class="li-detail">
            <div class="li-category">19:35 CBA 福建VS广州</div>
            <div class="li-name">
              <img alt="图标" src="https://img.ncyrsc.com/image/avatar/default_thumb.jpg" lazy="loaded">绝世大前锋
              &ensp;&ensp;&ensp;&ensp;&ensp;
              <span class="iconfont iconfire"></span>1009251
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ranking">
      <div class="ranking-title">主播排行</div>
      <div class="ranking-content">
        <div class="content-li" v-for="(index) in 5" :key="index">
          <img alt="logo" src="https://img.ncyrsc.com/image/avatar/20201220/103d17c8dc37eac0272f7031707d70d2?imageView2/2/w/200/h/200">
          <div class="anchor">
            <div class="anchor-name">阿杰说球</div>
            <div class="anchor-heat">1148833</div>
          </div>
          <div class="booking">订阅</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'recommed',
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="less" scoped>
.middle-section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .living-list {
    margin-top: 1rem;
    .living-title {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      width: 40rem;

      .main-title {
        font-size: 2.4rem;
        font-weight: 700;
      }
      .title-li {
        cursor: pointer;
      }
      .title-li:hover {
        color: #ff6631;
      }
    }

    .list-content {
      margin-top: 1rem;
      padding: 0 1rem;
      width: 92rem;
      background-color: #ffffff;
      height: 44.4rem;
      display: flex;
      flex-flow: row wrap;
      // justify-content: space-around;

      .content-li {
        cursor: pointer;
        margin: 1rem 0.4rem;
        width: 22rem;

        border: 0.1rem solid #e0dede;
        .li-logo {
          width: 22rem;
          height: 12.3rem;
        }
        .li-detail {
          font-size: 0.5rem;
          padding-left: 1rem;
          padding-top: 1rem;
          .li-category {
            font-weight: 700;
          }
          .li-name {
            padding: 1rem 1rem 1rem 0rem;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            color: #9f9f9f;
            line-height: 1;
            font-size: 0.9rem;
            img {
              width: 2.7rem;
              height: 2.7rem;
              vertical-align: middle;
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  }
  .ranking {
    width: 24.1rem;
    .ranking-title {
      margin-top: 1rem;
      width: 24.1rem;
      font-size: 2.4rem;
      font-weight: 700;
    }
    .ranking-content {
      margin-top: 10px;
      background: #fff;
      height: 44.4rem;
      .content-li {
        font-size: 1rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        line-height: 2;

        padding-top: 2rem;
        // vertical-align: middle;
        img {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 0.5rem;
          object-fit: cover;
        }
        .anchor {
          .anchor-name {
            font-size: 1.3rem;
            font-weight: 700;
          }
          // .anchor-heat {
          //   padding: 0.1rem 0;
          // }
        }
        .booking {
          min-width: 6rem;
          height: 2.2rem;
          border-radius: 1.1rem;
          box-sizing: border-box;
          border: 1px solid #eaeaea;
          text-align: center;
          line-height: 2.2rem;
          margin-right: 1.1rem;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          padding: 0rem 1rem;
        }
      }
    }
  }
}
</style>