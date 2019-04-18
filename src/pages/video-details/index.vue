<template>
  <div>
    <div class="myContainer">

      <!-- 最新视频 -->
      <h1 class="myTitle">最新视频</h1>
      <h1 class="myTitle">购买内容</h1>
      <p style="margin-bottom: 30rpx">共搜到<span class="red">3</span>条结果</p>
      <ul class="zt-box">
        <li>
          <span><img src="../../../../mpvue/static/images/class-img1.png" alt="" mode="widthFix"></span>
        </li>
        <li>
          <p>著名中医教你如何正确的拔罐子</p>
          <dl class="zt-money gray">
            <dt></dt>
            <dd>03-31</dd>
          </dl>
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

