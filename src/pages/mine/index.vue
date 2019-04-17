<template>
  <div>
    <div class="mine-head">
      <div class="myContainer">
          <div class="mine-head-img"></div>
          <div class="mine-head-box">
              <h1>花生毛豆</h1>
              <span class="red">今日签到</span>
          </div>
      </div>
    </div>
    <ul class="install-list">
      <li>
        <img src="../../../static/images/mine-buy.png" alt="" mode="widthFix" style="width: 39rpx; height: 43rpx">
        我的购买
      </li>
      <li>
        <img src="../../../static/images/mine-bp.png" alt="" mode="widthFix" style="width: 39rpx; height: 43rpx">
        我的积分
      </li>
      <li>
        <img src="../../../static/images/mine-mall.png" alt="" mode="widthFix" style="width: 39rpx; height: 43rpx">
        我的商城
      </li>
      <li>
        <img src="../../../static/images/mine-call.png" alt="" mode="widthFix" style="width: 39rpx; height: 43rpx">
        联系客服
      </li>
      <li>
        <img src="../../../static/images/mine-install.png" alt="" mode="widthFix" style="width: 39rpx; height: 43rpx">
        我的设置
      </li>
    </ul>
  </div>
</template>

<script>
  import '@/assets/css/install.css';
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

