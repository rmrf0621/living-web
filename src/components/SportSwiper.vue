<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in sport_list" :key="index" class="sport_list">
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
      </swiper-slide>
      <div class="swiper-button-prevs" slot="button-prev"></div>
      <div class="swiper-button-nexts" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
export default {
  name: 'sportSwiper',
  // components: {
  //   Swiper,
  //   SwiperSlide
  // },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-nexts',
          prevEl: '.swiper-button-prevs'
        }
      },
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
        },
        {
          category: '足球',
          state: '未开赛',
          time: '20:00',
          home_team: '塞罗拉尔',
          away_team: '芬死',
          league: '奥甲'
        }
      ]
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    }
  }
}
</script>
<style lang="less" scoped>
.sport_list {
  font-size: 1rem;
  width: 24rem;
  position: relative;
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
.swiper-button-prevs {
  // left: 0;
  // top: 5.5rem;
  // width: 2.8rem;
  // height: 5.6rem;
  // position: absolute;
  // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAA4CAYAAAAB8vOKAAACWElEQVRYR72ZO0oEQRCG/x5d3+ITX7mYGRoYKqyIIhgZi4fQQFjEyEPoEcy8h95BVBBUVNxApKTG2nVmdl7d1TMFDRss/XVV/1NVU2NQgRHRAICGrH4AfQAML2PMI//wYkQ0BGAYwCCAIGtTY8yDCkpEvPmorExQ5ADk7CkR8WHHZNkc3A0qYZyQe7K9GjuoeMewEVuSU3iJiNU3LWpUMFHOUyJiyc84hjN5wGKoAGfzHgFLt/OhElIGcmi9WeZzKqJhIGcVr5YHnVSqNPOgqVB5DlmplVgPVMI65/seo6dPg44D4FWZxaCSvOelBNUGrdxL9iTp6YLHJFCs3qoVmyokIpqSql/ZXXY27oaXiGoJrYAfjTRRnPJ01m4bnO5sYm3rDgfHzzmbhVDucbg4uxsDT5o7+HxdQdB4x9nNFZaWfjI2DKG6PBsFIvjG+vY1ji7uizzl0HKfam/2QGaEnnIWsq+ZbsAu1F657sAudNEq3+qADlA90CG8Ly8BWnu7+HpbRjmlponTQUh6cAi1f2R0YEVycAcr06Ab2EPCtwf/vYmrS1sUHDQ+cHZzmZvwBaov4gw+329ideMWh62n3IQvUJ4XVNZgJw7wP+hQh7h8jYpBa2lBw9LWOWBdzXYMKndbh7fx4VUdL1AAnnpmQDU03r1QCbOuWctXciaUI1DJ639qeCNq5mbN+6AjFyph5hmSz5EOb5se3uiVeB5elYOKx77GdOWhAmZxaQeSdtCIwLgiuY5e3aARr12GzH99b/mK1PtPh3G6HppQeakPB2pPs6JU9InkF7F+cQxu+6cpAAAAAElFTkSuQmCC) no-repeat 50%;
}
.swiper-button-nexts {
  // right: 0;
  // top: 5.5rem;
  // width: 2.8rem;
  // height: 5.6rem;
  // position: absolute;
  // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA4CAYAAADuMJi0AAACPklEQVRYR73Zz2oTURQG8O9rcZFSxRakrfgO+h7ufAT7EK5ECl20DyGuuyqIRQzo0oVLd+I+2FJN0j9JmrQz5ZtkQmLmZu7MnDsXsggM88s59/8J4zjeAkAAMYA7ALeTz5DkEMaNE3DV8V79iBsAfQADkvpeqeWBsy+PAPQAXJNUJkq1ImAKKMprAJdlIi4DprCi7JIcFAm1Cpg6SrNgr/61AAWPAPzz6VsrUKhS/JekppWzWYJCNJLPl6HWYBqp0MypEwJM+1TowkAKBQrtkez835khQVkauXPzNDSofjybTW1oUFFekbxIU1sHqIFzSlJTBnWAc1HWBUYk/9QZoaw2yX5dEQrsk2zXCSZpFbgNYCVzeT86fIIfX55j/+QrGg2v/S5nMz53g63WKt69fI1o9AjrG79w0DwxQLvLI3z/5hm+f34FRA+M0N5yUPmxRYf5oC165wfaoZE/aIPGxcDqaEVw7fFv7H38hM3NZCfwaBVSWhxLDlj+KZ2dHuUwgcm02JncD90ZscHGB6tc0A4TmCxt7ghtMYHJ4p0NjhfvXUSjhyjfZ7PdNN2e3BF+2NvGz28v8Pa4WWDou8bCdAPOHzQeE8zjkekRow5w7hBVBzg9DOdPC49c5TyycBAOHeHCUT8kmHmZCQlmXteeVu+mzDc4L6QhQJVRnFdua1D9trSoYAl6lU2sQO/CkMUoLVT6qgqqeNspUtwrC5YuXxYFKxdofUGzErT7Qjqu9Acpsmf+jaDCq+9g8F0e7wEsGbIYcFV7gQAAAABJRU5ErkJggg==) no-repeat 50%;
}
</style>