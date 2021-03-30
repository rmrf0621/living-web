<template>
  <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
    <slideritem v-for="(item,index) in sport_list" :key="index" class="sport_list">
      <div class="sport_li">
        <div class="sport_title">
          <span class="category">{{item.category}}</span>
          <span class="state">{{item.state}}</span>
        </div>
        <div class="sport_vs">
          <img alt="logo" src="https://guqniupic.oss-cn-hangzhou.aliyuncs.com/fb/team/20130919130332.png">
          <div>{{item.time}}</div>
          <img alt="logo" src="https://guqniupic.oss-cn-hangzhou.aliyuncs.com/fb/team/20130919125830.png">
        </div>
        <div class="sport_name">
          <span class="team_name">{{item.home_team}}</span>
          <span class="team_name">{{item.away_team}}</span>
        </div>
        <div class="league-name">{{item.league}}</div>
      </div>
    </slideritem>
    <!-- <div slot="loading">loading...</div> -->
  </slider>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
  el: '#app',
  name: 'sportSlider',
  data() {
    return {
      //data list [array]
      sport_list: [
        {
          category: '足球',
          state: '未开赛',
          time: '20:00',
          home_team: '塞罗拉尔',
          away_team: '芬死',
          league: '奥甲'
        },
        {
          category: '足球',
          state: '未开赛',
          time: '20:00',
          home_team: '塞罗拉尔',
          away_team: '芬死',
          league: '奥甲'
        },
        {
          category: '足球',
          state: '未开赛',
          time: '20:00',
          home_team: '塞罗拉尔',
          away_team: '芬死',
          league: '奥甲'
        },
        {
          category: '足球',
          state: '未开赛',
          time: '20:00',
          home_team: '塞罗拉尔',
          away_team: '芬死',
          league: '奥甲'
        },
        {
          category: '足球',
          state: '未开赛',
          time: '20:00',
          home_team: '塞罗拉尔',
          away_team: '芬死',
          league: '奥甲'
        }
      ],
      options: {
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 300,
        infinite: 1,
        slidesToScroll: 1,
        loop: true
      }
    }
  },
  components: {
    slider,
    slideritem
  }
}
</script>
<style lang="less" scoped>
.sport_list {
  font-size: 1rem;
  width: 24rem;
  .sport_li {
    width: 22rem;
    height: 12.2rem;
    background: #fff;
    .sport_title {
      display: flex;
      flex-flow: row nowrap;
      padding: 0.4rem 1rem;
      border-bottom: 0.1rem solid #e9e9e9;
      box-sizing: border-box;
      justify-content: space-between;
      .category {
        color: #333;
        font-size: 1.3rem;
        font-weight: 700;
      }
      .state {
        width: 5.1rem;
        height: 2rem;
        background-color: #959292;
        text-align: center;
        line-height: 2rem;
        color: #fff;
        border-radius: 0.3rem;
      }
    }
    .sport_vs {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      overflow: hidden;
      color: #ff5216;
      font-weight: 700;
      padding: 0.8rem 1.8rem 0;
      img {
        width: 3.8rem;
        height: 3.8rem;
      }
    }
    .sport_name {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      box-sizing: border-box;
      padding: 0.6rem 0 0;
      color: #999;
      font-size: 1rem;
      .team_name {
        font-family: PingFang SC;
        color: #2b2626;
        width: 7.4rem;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .league-name {
      margin-top: 0.5rem;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      font-size: 0.8rem;
      text-overflow: ellipsis;
    }
  }
}
</style>