<template>
  <div>
    <!-- 导航栏 -->
    <div class="header" :class="{header_gb:this.$route.path != '/home'}">
      <div class="top">
        <div class="left-nav">
          <img v-if="this.$route.path == '/home'" class="logo" src="https://www.yabanghn.com/static/img/logo.7d46310.png" lazy="loaded">
          <img v-else class="logo logo_blue"
            src="data:image/png;base64,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"
            lazy="loaded">
          <div class="top-nav">
            <router-link to="/home" class="key-worlds" active-class="active">首页</router-link>
            <router-link to="/living" class="key-worlds" :class="{active:this.$route.path != '/house'}" active-class="active">直播</router-link>
            <router-link to="/sports" class="key-worlds" active-class="active">赛事</router-link>
            <router-link to="/subscription" class="key-worlds" active-class="active">订阅</router-link>
            <router-link to="/download" class="key-worlds" active-class="active">下载APP</router-link>
          </div>
        </div>
        <div class="right-nav">
          <div class="btn" @click="loginEvent">登录</div>
          <div class="btn" @click="registerEvent">注册</div>
        </div>
      </div>
    </div>
    <!-- <div style="padding-top:7rem;"></div> -->
    <div class="details div-center">
      <div class="house-details">
        <div class="living-title">
          <div class="anchor">
            <img src="https://img.ncyrsc.com/image/avatar/20201216/674600bb7fd26d4ce65235de6823f2db?imageView2/2/w/200/h/200" lazy="loaded">
            <div class="anchor-desc">
              <div class="living-name">日职联 FC东京VS 湘南海洋</div>
              <div class="living-heats">
                <div><span class="iconfont iconperson"></span>铁蛋</div>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                <div><span class="iconfont iconfire"></span>1012856</div>
              </div>
            </div>
          </div>
          <div class="booking">
            <div class="download"><span class="iconfont iconshouji"></span>手机观看</div>
            <div class="booking-count">70人&ensp;|&ensp;<span class="iconfont icondingyue" />订阅</div>
          </div>
        </div>
        <div class="living-content">
          <d-player @play="play" :options="options"></d-player>
        </div>
      </div>
      <div class="chat">
        <div class="bulletin">
          <div class="bulletin-title">直播公告：</div>
          <div class="bulletin-value">直播很低调什么也没有留下!</div>
        </div>
        <div class="copy">
          <span class="copy-btn">复制</span>
        </div>
        <div class="chatting">
          <div class="statement">
            云雀禁止任何传播违法、违规、低俗等信息行为，一经发现将给予封禁处理，请勿相信任何方式的诱导打赏，私下交易等行为，以防人身或财产损失
          </div>
          <div class="chat-content">
            <div class="chat-li" v-for="(index) in 3" :key="index">
              <img src="https://img.ncyrsc.com/image/avatar/20201216/674600bb7fd26d4ce65235de6823f2db?imageView2/2/w/200/h/200" lazy="loaded">
              手机用户7561:公牛领先18分我笑哈哈，最后也是死
            </div>
          </div>
          <div class="send">
            <div class="send-content">当前用户未登录</div>
            <!-- <input type="text" class="send-content"> -->
            <div class="send-btn">发送</div>
          </div>
        </div>
      </div>
    </div>
    <recommed></recommed>
    <appfooter></appfooter>
  </div>
</template>
<script>
import recommed from '@/views/common/recommed'
import appfooter from '@/views/common/appfooter'
export default {
  name: 'house',
  components: {
    recommed,
    appfooter
  },
  data() {
    return {
      home: '首页',
      chooseIndex: [Number],
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
    loginEvent() {
      console.log('==============登录事件========')
    },
    registerEvent() {
      console.log('==============注册事件========')
    }
  },
  mounted() {
    // this.init()
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/css/images.css');

@chooseColor: #ff5116;
@golbalFontColor: #fff;

.header_gb {
  background-color: @golbalFontColor;
}
.header:hover {
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);
  background-color: hsla(0, 0%, 100%, 0.08);
}
.header {
  min-width: 100%;
  font-family: Microsoft Yahei, Arial, Helvetica Neue, Helvetica, sans-serif;
  color: #333;
  line-height: 1rem;
  position: absolute;

  .top {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 120rem;
    height: 5.4rem;
    margin: 0px auto;
    .left-nav {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      .logo {
        width: 12.9rem;
        height: 4.3rem;
        object-fit: cover;
      }
      .top-nav {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        margin-left: 10rem;
        .key-worlds {
          cursor: pointer;
          color: #333;
          font-weight: 700;
          padding: 0.8rem 1.4rem;
          margin: 0 1rem;
          text-align: center;
          border-radius: 1.4rem;
        }
        .active {
          color: @golbalFontColor;
          background: @chooseColor;
        }
      }
    }
    .right-nav {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      .btn {
        cursor: pointer;
        margin: 0px 5px;
      }
    }
  }
}
.details {
  padding-top: 7rem;
  display: flex;
  height: 59rem;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  .house-details {
    width: 85rem;
    height: 57rem;
    background-color: #fff;
    .living-title {
      height: 7rem;
      // background-color: red;
      padding: 1.2rem 1rem 1rem 1rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: flex-end;
      .anchor {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: top;
        // max-width: 50rem;
        img {
          width: 6.9rem;
          height: 6.9rem;
          border-radius: 50%;
        }
        .anchor-desc {
          padding-left: 1rem;
          .living-name {
            font-size: 1.7rem;
          }
          .living-heats {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            margin-top: 2rem;
            font-size: 1.2rem;
            color: #9f9f9f;
          }
        }
      }
      .booking {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        .download {
          padding: 0.5rem 1rem;
          color: #9f9f9f;
          font-size: 1.2rem;
          margin-right: 2rem;

          color: #fff;
          border-radius: 0.5rem;
          background-color: #fa5406;
        }
        // .download {
        // }
        .booking-count {
          color: #fff;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          background-color: #fa5406;
        }
      }
    }
    .living-content {
      // width: 99.99%;
      height: 48rem;

      // background: #000;
      overflow: hidden;
    }
  }
  .chat {
    width: 33.4rem;
    height: 57rem;
    overflow: hidden;
    background-color: #fff;
    .bulletin {
      padding: 1rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      line-height: 2;
      border-bottom: 1px solid #f3f5f9;
      box-sizing: border-box;
      .bulletin-title {
        font-size: 1.6rem;
        color: #2c2727;
      }
      .bulletin-value {
        font-size: 1.4rem;
        color: #9f9f9f;
      }
    }
    .copy {
      padding: 0.4rem 1rem;
      text-align: right;

      border-bottom: 1px solid #f3f5f9;
      box-sizing: border-box;
      .copy-btn {
        cursor: pointer;
        display: inline-block;
        color: #fff;

        font-size: 1.2rem;
        padding: 0.4rem 1rem;
        border-radius: 0.5rem;
        background-color: #fa5406;
      }
    }
    .chatting {
      // flex-flow: column nowrap;
      // justify-content: space-between;
      // align-items: flex-start;

      .statement {
        color: #9f9f9f;
        font-size: 1.4rem;
        line-height: 2rem;
        padding: 0.86rem 1.9rem 0;
      }
      .chat-content {
        height: 33rem;
        overflow-y: auto;

        flex: 1;
        padding: 1rem;
        .chat-li {
          line-height: 2;
          font-size: 1.4rem;
          img {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 2.5rem;
            vertical-align: middle;
          }
        }
      }
      .send {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        margin: 0 0.5rem;

        height: 3.4rem;

        box-sizing: content-box;

        .send-content {
          text-align: center;
          background: #eee;
          font-size: 1.2rem;
          line-height: 3;
          // height: 3.4rem;
          flex: 1;
        }
        .send-btn {
          padding: 0 2rem;
          color: #9f9f9f;
          font-size: 1.2rem;
          line-height: 3;
          color: #fff;
          box-sizing: border-box;
          background-color: #fa5406;
        }
      }
    }
  }
}

.app-footer {
  // margin-top: 1rem;
  background-color: #33312d;
  min-width: 120rem;
  height: 13.5rem;
  background: #32302c;
  .bottom {
    width: 120rem;
    margin: 0 auto;
    height: 13.5rem;
    justify-content: space-between;
  }
}
</style>
