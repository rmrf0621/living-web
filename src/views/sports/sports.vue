<template>
  <div class="sports_main">
    <div class="zhanweizhi"></div>
    <div class="sports-category div-center">
      <ul class="category-list category">
        <!-- <li class="category-li" :class="{category_li_choosed:chooseIndex==1}" @click="chooseIndex = 1">全部</li> -->
        <li class="category-li" :class="{category_li_choosed:chooseIndex==2}" @click="chooseIndex = 2">足球</li>
        <li class="category-li" :class="{category_li_choosed:chooseIndex==3}" @click="chooseIndex = 3">篮球</li>
        <li class="category-li" :class="{category_li_choosed:chooseIndex==4}" @click="chooseIndex = 4">电竞</li>
      </ul>
    </div>
    <div class="sports-content div-center">
      <div class="content-by-day">
        <p class="content-day">今日 2021-03-13 星期六</p>
        <div class="content-li" v-for="(index) in 12" :key="index">
          <div class="sports-main">
            <div class="sports-time">07:00</div>
            <div class="sports-league">乌拉甲</div>
            <div class="sports-vs">
              <div class="home_team">塞罗拉尔</div>
              <div class="team-logo">
                <img src="https://guqniupic.oss-cn-hangzhou.aliyuncs.com/fb/team/20130919130332.png">
                <span>VS</span>
                <img src="https://guqniupic.oss-cn-hangzhou.aliyuncs.com/fb/team/20130919125830.png">
              </div>
              <div class="away_team">芬斯</div>
            </div>
          </div>
          <div class="sports-state">未开赛</div>
        </div>
      </div>

      <div class="content-by-day">
        <p class="content-day">今日 2021-03-13 星期六</p>
        <div class="content-li" v-for="(index) in 6" :key="index">
          <div class="sports-main">
            <div class="sports-time">07:00</div>
            <div class="sports-league">乌拉甲</div>
            <div class="sports-vs">
              <div class="home_team">塞罗拉尔</div>
              <div class="team-logo">
                <img src="https://guqniupic.oss-cn-hangzhou.aliyuncs.com/fb/team/20130919130332.png">
                <span>VS</span>
                <img src="https://guqniupic.oss-cn-hangzhou.aliyuncs.com/fb/team/20130919125830.png">
              </div>
              <div class="away_team">芬斯</div>
            </div>
          </div>
          <div class="sports-state">未开赛</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sports',
  data() {
    return {
      chooseIndex: 2
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
@import url('../../assets/css/images.css');
.sports_main {
  padding-top: 6rem;
  min-height: calc(~'100vh - 13.5rem');
  // .zhanweizhi {
  //   height: 6rem;
  //   width: 100%;
  //   background-color: #fff;
  // }
}
.sports-category {
  height: 6.2rem;

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
.sports-content {
  .content-by-day {
    .content-day {
      margin-top: 2rem;
    }
    .content-li {
      background-color: #fff;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;

      height: 10.7rem;
      // width: 100%;

      margin-top: 1rem;
      padding: 0rem 4rem;

      .sports-main {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        .sports-time {
          width: 10rem;
          font-size: 1.8rem;
          font-weight: 800;
          font-family: PingFang SC;
        }
        .sports-league {
          width: 10rem;
          margin-left: 4rem;
          font-weight: 600;
          font-family: PingFang SC;
          font-size: 1.5rem;
        }
        .sports-vs {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          margin-left: 4rem;

          width: 51rem;
          .team-logo {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;

            width: 20rem;

            img {
              width: 5.4rem;
              height: 5.4rem;
              border: 2px solid #d9d2cf;
              border-radius: 50%;
              overflow: hidden;
              -o-object-fit: cover;
              object-fit: cover;
              vertical-align: middle;
            }
          }
        }
      }
      .sports-state {
        padding: 0.5rem 2rem;
        background: #595959;
        color: #fff;
        // border: 2px solid #d9d2cf;
        border-radius: 40rem;
        // padding: 0 1rem;
      }
    }
  }
}
</style>

