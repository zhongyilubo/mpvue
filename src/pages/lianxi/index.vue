<template>
  <div>
    <div class="myContainer">
      <!-- 搜索 -->
      <div>
        <input class="inp-search" type="text">
      </div>
      <!-- banner -->
      <div class="banner">
        <img src="../../../../mpvue/static/images/banner1.jpg" alt="" mode="widthFix">
      </div>
      <!-- 热门推荐 -->
      <h1 class="myTitle">热门推荐</h1>

      <ul class="zt-box">
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
      <ul class="zt-box">
        <li>
          <span><img src="../../../../mpvue/static/images/class-img1.png" alt="" mode="widthFix"></span>
        </li>
        <li>
          <p>著名中医教你如何正确的拔罐子</p>
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
      message: 'Hello Vue!'
    },
    methods: {
      dddd(){
        this.message = 'asdfsadfsdaf'
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
