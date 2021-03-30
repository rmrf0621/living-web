<template>
  <div class="home_main">
    <div class="banner">
      <div class="div-center">
        <!-- 首页视频展示-->
        <!-- https://img.ncyrsc.com/image/slide/20210217/e46530e679429e1fc3c9b102e10f34d3.jpg -->
        <div class="recommend">
          <div class="recommend-living">
            <d-player @play="play" :options="options"></d-player>
          </div>
          <div class="recommend-list">
            <div class="recommed-li" v-for="(item,index) in living_list" @click="showIndex=index" @mouseover="showIndex=index" :key="index" :class="{recommed_li_hover:showIndex == index}">
              <img class="li-img" alt="logo" :src="item.url">
              <span :class="{li_title_show:showIndex == index}" class="li-title">{{item.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 赛事预告,列表 -->
    <div class="sport_menu">
      <div class="sport_list div-center">
        <!-- <sport-slider></sport-slider> -->
        <sport-swiper></sport-swiper>
      </div>
    </div>
    <!-- 文章广告 -->
    <div class="ad-middle div-center">
      <div class="ad-carousel">
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide class="swiper_li"><img alt="adlogo" src="https://img.ncyrsc.com/image/slide/20210312/106e784300251efa98f53c549cebcdf9.jpg"></swiper-slide>
          <swiper-slide><img alt="adlogo" src="https://img.ncyrsc.com/image/slide/20210312/c4a311673c63a327d8b4907f53d833d5.jpg"></swiper-slide>
          <swiper-slide><img alt="adlogo" src="https://img.ncyrsc.com/image/slide/20210312/918b32d3f020d1d7240084b1b75192b8.jpg"></swiper-slide>
        </swiper>
      </div>
      <div class="ad-aritle">
        <div class="aritle-title">公告</div>
        <div class="artile-content">
          <div class="artile-li"><span>【3月12日】推荐 意甲 22:00 拉齐奥 VS 克罗托内</span><span>03-12</span></div>
          <div class="artile-li"><span>【3月12日】推荐 意甲 22:00 拉齐奥 VS 克罗托内</span><span>03-12</span></div>
          <div class="artile-li"><span>【3月12日】推荐 意甲 22:00 拉齐奥 VS 克罗托内</span><span>03-12</span></div>
          <div class="artile-li"><span>【3月12日】推荐 意甲 22:00 拉齐奥 VS 克罗托内</span><span>03-12</span></div>
          <div class="artile-li"><span>【3月12日】推荐 意甲 22:00 拉齐奥 VS 克罗托内</span><span>03-12</span></div>
          <div class="artile-li"><span>【3月12日】推荐 意甲 22:00 拉齐奥 VS 克罗托内</span><span>03-12</span></div>
        </div>
      </div>
      <div class="ad-download">
        <img alt="adlogo" src="https://img.ncyrsc.com/image/slide/20201117/0fe67b6a3e0e0b9e55d598711871f29e.png">
      </div>
    </div>
    <recommed></recommed>
  </div>
</template>
<script>
import SportSlider from '@/components/SportSlider'
import SportSwiper from '@/components/SportSwiper'
import recommed from '@/views/common/recommed'
export default {
  name: 'home',
  components: {
    SportSlider,
    SportSwiper,
    recommed
  },
  data() {
    return {
      home: '首页',
      display: 'block',
      showIndex: [Number],
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-nexts',
          prevEl: '.swiper-button-prevs'
        }
      },
      living_list: [
        {
          title: '英雄联盟赛事',
          url: 'https://img.ncyrsc.com/image/live/20210308/a5f8a7c51c02f48dd87be2a39f66c01a?imageView2/2/w/600/h/600'
        },
        {
          title: '英雄联盟赛事',
          url: 'https://img.ncyrsc.com/image/live/20210308/a5f8a7c51c02f48dd87be2a39f66c01a?imageView2/2/w/600/h/600'
        },
        {
          title: '英雄联盟赛事',
          url: 'https://img.ncyrsc.com/image/live/20210308/a5f8a7c51c02f48dd87be2a39f66c01a?imageView2/2/w/600/h/600'
        },
        {
          title: 'MLB春训:水手vs道奇',
          url: 'http://upstatic.qiecdn.com/upload/homeset/202103120956321161.jpg'
        },
        {
          title: '全运会女子篮球3X3资格赛',
          url: 'http://upstatic.qiecdn.com/upload/homeset/202103120929097933.jpg'
        },
        {
          title: '直播！美洲杯帆船赛决赛',
          url: 'http://upstatic.qiecdn.com/upload/homeset/202103121110082356.jpg'
        }
      ],
      options: {
        container: document.getElementById('dplayer'), //播放器容器
        mutex: false, //  防止同时播放多个用户，在该用户开始播放时暂停其他用户
        theme: '#b7daff', // 风格颜色，例如播放条，音量条的颜色
        loop: false, // 是否自动循环
        lang: 'zh-cn', // 语言，'en', 'zh-cn', 'zh-tw'
        // screenshot: true, // 是否允许截图（按钮），点击可以自动将截图下载到本地
        hotkey: true, // 是否支持热键，调节音量，播放，暂停等
        preload: 'auto', // 自动预加载
        volume: 0.7, // 初始化音量
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2, 3], //可选的播放速度，可自定义
        logo: 'https://qczh-1252727916.cos.ap-nanjing.myqcloud.com/pic/273658f508d04d488414fd2b84c9f923.png', // 在视频左角上打一个logo
        video: {
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4', // 播放视频的路径
          quality: [
            // 设置多个质量的视频
            {
              name: '高清',
              url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
              type: 'auto' // 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或 其他自定义类型
            },
            {
              name: '标清',
              url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
              type: 'auto'
            }
          ],
          defaultQuality: 0, // 默认是高清
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606462956126&di=2d87964d4faf656af55d09d938640d97&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201310%2F10%2F150326y7dzdd8d4kpjjdsd.jpg', // 视频封面图片
          thumbnails: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606462956126&di=2d87964d4faf656af55d09d938640d97&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201310%2F10%2F150326y7dzdd8d4kpjjdsd.jpg' // 进度条上的缩略图,需要通过dplayer-thumbnails来生成
        },
        // subtitle: {   //字幕
        //   url: "",   //字幕网址
        //   color:'#fff' 字幕颜色
        //   fontSize: "20px",
        //   bottom: "40px",
        // },
        danmaku: {
          // 弹幕
          id: '9E2E3368B56CDBB4',
          api: 'https://api.prprpr.me/dplayer/',
          token: 'tokendemo', //后端验证令牌
          maximum: 1000, //弹幕最大数量
          addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'], //其他弹幕
          user: 'DIYgod', //弹幕用户名
          bottom: '15%', //值，例如：10px，10％，即弹幕底部和播放器底部之间的距离，以防止遮挡字幕
          unlimited: true //即使弹幕重叠也显示所有弹幕
        },
        contextmenu: [
          //  自定义上下文菜单
          // 右键菜单
          {
            text: 'custom1',
            link: 'https://www.bilibili.com'
          },
          {
            text: 'custom2',
            click: player => {
              console.log(player)
            }
          }
        ],
        highlight: [
          //进度条上的自定义时间标记
          // 进度条时间点高亮
          {
            text: '10M',
            time: 6
          },
          {
            text: '20M',
            time: 12
          }
        ]
      }
    }
  },
  methods: {
    init() {
      console.log('==============================')
    },
    changeColor() {},
    play() {
      console.log('play callback')
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="less" scoped>
.home_main {
  min-width: 120rem;
}
.banner {
  padding-top: 7.8rem;
  padding-bottom: 2rem;
  background-image: url(https://img.ncyrsc.com/image/slide/20210217/e46530e679429e1fc3c9b102e10f34d3.jpg);

  background-repeat: repeat;
  background-position: center;
}
.recommend {
  width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: rgba(11, 9, 9, 0.66);

  overflow: hidden;
  .recommend-living {
    width: 102.2rem;
    height: 57.4rem;
    background: #000;
    overflow: hidden;
  }
  .recommend-list {
    flex: 1;
    height: 57.4rem;
    font-size: 1rem;
    overflow: hidden;
    .recommed-li {
      margin-top: 0.5rem;
      width: 16rem;
      height: 8.4rem;
      margin-left: 0.5rem;
      position: relative;
      border-radius: 1rem;
      border: 0.2rem solid transparent;
      img {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
      }
    }
    .li-title {
      display: none;
      color: #fff;
      bottom: 0.2rem;
      left: 1rem;
      position: absolute;
    }
    .li_title_show {
      display: block;
    }
    .recommed_li_hover {
      border-radius: 1rem;
      border: 0.2rem solid #d2ac84;
    }
  }
}
.sport_menu {
  height: 14.5rem;
  background: #32302c;
  background-color: #32302c;
  .sport_list {
    padding-top: 1rem;
  }
}
.ad-middle {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  height: 17.5rem;
  padding: 1.2rem 0;
  .ad-carousel {
    // width: 28%;
    width: 46.4rem;
    height: 17.5rem;
    max-width: 100%;
    .swiper_li {
      width: 46.4rem;
      height: 17.5rem;
      max-width: 100%;
    }
  }
  .ad-aritle {
    width: 46.4rem;
    height: 17.5rem;
    max-width: 100%;
    overflow: hidden;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 1rem 1rem 0 1rem;
    .aritle-title {
      color: #ff6631;
    }
    .artile-content {
      font-size: 1.2rem;
      .artile-li {
        cursor: pointer;
        padding-top: 1.2rem;
        display: flex;
        justify-content: space-between;
      }
      .artile-li :hover {
        color: #ff6631;
      }
    }
  }
}
a :hover {
  color: #ff6631;
}
</style>

