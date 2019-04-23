<template>
  <div>
    <div class="mine-head">
      <div class="myContainer">
          <div class="mine-head-img">
            <img :src="userinfo.avatarUrl" style="height: 100%; width: 100%;"/>
          </div>
          <div class="mine-head-box">
              <h1>{{userinfo.nickName}}</h1>
              <span v-if="!issign" class="red" @click="sign">今日签到</span>
              <span v-if="issign">已签到</span>
          </div>
      </div>
    </div>
    <ul class="install-list">
      <li @click="navigateTo('/pages/buy/main')">
        <img src="../../../static/images/mine-buy.png" alt="" mode="widthFix" style="width: 39rpx; height: 43rpx">
        我的购买
      </li>
      <li @click="navigateTo('/pages/integral/main')">
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
      message: 'Hello Vue!',
      userinfo : [],
      issign : 0,
    },
    mounted(){
        var _this = this;

        _this.userinfo = mpvue.getStorageSync('userInfo') || [];

        _this.$net.post({
            url: 'userinfo'
        }).then(res => {
            _this.issign = res.data.issign;
        })
    },
    methods: {
        sign(){
            var _this = this;

            _this.$net.post({
                url: 'sign'
            }).then(res => {
                _this.issign = res.data.issign;
            })
        },
        rediectTo(url) {
            wx.redirectTo({
                url: url
            })
        },
        navigateTo(url){
            wx.navigateTo({
                url: url
            })
        }
    }
  }
</script>

