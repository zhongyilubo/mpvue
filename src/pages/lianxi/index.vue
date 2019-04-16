<template>
  <div>
    <button class="authlogin" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" v-if="getusershow"> 获取头像昵称 </button>
    <div class="myContainer">
      <!-- 搜索 -->
      <div>
        <input class="inp-search" type="text">
      </div>
      <!-- banner -->
      <div class="banner">
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, index) in images" :index="index" :key="key">
            <swiper-item>
              <image :src="item" class="slide-image" mode="aspectFill"/>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <!-- 热门推荐 -->
      <h1 class="myTitle">热门推荐</h1>

      <ul class="zt-box one-line">
        <li>
          <span><img src="../../../../mpvue/static/images/class-img1.png" alt="" mode="widthFix" width="100%" ></span>
          <p>中医教你如何正确的拔罐子拔罐子拔罐子</p>
          <dl class="zt-money">
            <dt class="red">￥:<span>52.00</span></dt>
            <dd class="gray">李时珍</dd>
          </dl>
        </li>

        <li>
          <span><img src="../../../../mpvue/static/images/class-img1.png" alt="" mode="widthFix"></span>
          <p>中医教你如何正确的拔罐子拔罐子拔罐子</p>
          <dl class="zt-money">
            <dt class="red">￥:<span>52.00</span></dt>
            <dd class="gray">李时珍</dd>
          </dl>
        </li>
      </ul>

      <!-- 最新视频 -->
      <h1 class="myTitle">最新视频</h1>
      <ul class="zt-box two-line">
        <li>
          <span><img src="../../../../mpvue/static/images/class-img1.png" alt="" mode="widthFix"></span>
        </li>
        <li>
          <p>著名中医教你如何正确的拔罐子著名中医教你如何正确的拔罐子著名中医教你如何正确的拔罐子</p>
          <dl class="zt-money gray">
            <dt>李时珍</dt>
            <dd><span>256</span>次</dd>
          </dl>
          <dl class="zt-money red">
            <dt>￥:<span>52.00</span></dt>
            <dd>系列课</dd>
          </dl>
        </li>
      </ul>

    </div>
    <div class="h130"></div>
    <ul class="nav">
      <li><a href="">
        <img src="../../../../mpvue/static/images/nav-index.png" mode="widthFix" alt=""><br/>首页
      </a></li>
      <li><a href="">
          <img src="../../../../mpvue/static/images/nav-classify.png" mode="widthFix" alt=""><br/>分类
       </a></li>
      <li><a href="">
        <img src="../../../../mpvue/static/images/nav-news.png" mode="widthFix" alt=""><br/>消息
      </a></li>
      <li><a href="">
        <img src="../../../../mpvue/static/images/nav-myself.png" mode="widthFix" alt=""><br/>我的
      </a></li>
    </ul>

  </div>
</template>

<script>
  import '@/assets/css/style.css';
  export default {
    data: {
      images: [
          '../../../../mpvue/static/images/banner1.jpg',
          '../../../../mpvue/static/images/banner1.jpg',
          '../../../../mpvue/static/images/banner1.jpg',
          '../../../../mpvue/static/images/banner1.jpg',
      ],
      message: 'Hello Vue!',
      getusershow:true,
      userInfo: {}
    },
    mounted(){
        var _this = this;
        wx.getSetting({
            success: function(res){
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function(res) {
                            console.log(res.userInfo)
                            //用户已经授权过
                            console.log('用户已经授权过')
                            _this.getusershow = false;
                            _this.userInfo = res.userInfo;
                            mpvue.setStorageSync('userInfo', res.userInfo)
                        }
                    })
                }else{
                    console.log('用户还未授权过')
                }
            }
        })
    },
    methods: {
        bindGetUserInfo(e) {
            if (e.mp.detail.rawData){
                //用户按了允许授权按钮
                console.log('用户按了允许授权按钮')
                console.log(e.mp.detail.userInfo);
                this.getusershow = false;
                this.userInfo = e.mp.detail.userInfo;
                mpvue.setStorageSync('userInfo', e.mp.detail.userInfo)
            } else {
                //用户按了拒绝按钮
                console.log('用户按了拒绝按钮')
            }
        }
    }
  }

</script>

<!--<style scoped>

  /* 钱 名字 */
  .zt-money{ overflow: hidden; font-size: 26rpx; margin-top: 15rpx;}
  .zt-money dt{ float: left}
  .zt-money dd{ float: right}

  .myContainer{ width: 92%; margin:0 4%;}
  /*&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;*/
  .inp-search{
    width: 100%;
    height: 55rpx;
    font-size: 30rpx;
    line-height: 30rpx;
    border: 1px solid #8781a6;
    display: inline-block;
    box-sizing: border-box;
    text-indent: 5px;
    border-radius: 8rpx;
    padding:0 0 0 70rpx;
    margin: 13rpx 0 15rpx;
    background: url("../../../../mpvue/static/images/search.png") no-repeat;
    background-size:33rpx;
    background-position: 20rpx center ;
  }
  .banner img{
    width: 100%;
    height: 350rpx;
    /*background:blue;*/
  }
  .myTitle{
    margin: 25rpx 0;
  }
  .zt-box{
    overflow: hidden;
  }
  .zt-box li{ margin-bottom: 15px;}
  .zt-box li img{ width: 100%; height: auto;}
  .zt-box li:nth-child(2n-1){
    float: left;
    width: calc(50% - 8rpx);
    margin-right: 8rpx;
  }
  .zt-box li:nth-child(2n){
    float: left;
    width: calc(50% - 8rpx);
    margin-left: 8rpx;
  }
  /* nav 导航 */
  .nav{
    position:fixed;
    bottom: 0;
    width: 100%;
    font-size: 30rpx;
    padding:20rpx 0;
    background: #fff;
    border-top: 1rpx solid #e6e6e6;
    overflow: hidden;
  }
  .nav li{
    width: 25%;
    text-align: center;
    float:left;
  }
  .nav img{ width: 40rpx;}

</style>-->
