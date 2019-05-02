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
        <swiper class="swiper" indicator-dots="true" autoplay="true" style="height:100%;" interval="5000" duration="1000">
          <block v-for="(item, index) in banner" :index="index" :key="key">
            <swiper-item>
              <image :src="item" class="slide-image" mode="aspectFill"/>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <!-- 热门推荐 -->
      <h1 class="myTitle">热门推荐</h1>

      <ul class="zt-box one-line">

        <li v-for="(item, index) in hot" :index="index" :key="key">
          <span><img :src="item.cover" alt="" mode="widthFix" width="100%" ></span>
          <p>{{item.name}}</p>
          <dl class="zt-money">
            <dt class="red">￥<span>{{item.price}}</span></dt>
            <dd class="gray">{{item.teacher}}</dd>
          </dl>
        </li>

      </ul>

      <!-- 最新视频 -->
      <h1 class="myTitle">最新视频</h1>
      <ul class="zt-box two-line" v-for="(item, index) in news" :index="index" :key="key">
        <li>
          <span><img :src="item.cover" alt="" mode="widthFix"></span>
        </li>
        <li>
          <p>{{item.name}}</p>
          <dl class="zt-money gray">
            <dt>{{item.teacher}}</dt>
            <dd><span>{{item.number}}</span>次</dd>
          </dl>
          <dl class="zt-money red">
            <dt>￥<span>{{item.price}}</span></dt>
            <dd>{{item.type_name}}</dd>
          </dl>
        </li>
      </ul>
    </div>
    <bottomnav></bottomnav>
  </div>
</template>

<script>
  import '@/assets/css/style.css';
  import bottomnav from '@/components/nav.vue';
  export default {
    data: {
      banner: [],
      hot: [],
      news: [],
      message: 'Hello Vue!',
      getusershow:true,
      userInfo: {}
    },
    components: {
        bottomnav
    },
    mounted(){
        var _this = this;

        _this.$net.post({
            url: 'index',
            data: {}
        }).then(res => {
            _this.banner = res.data.banner.image;
            _this.hot = res.data.hot;
            _this.news = res.data.new;
        })

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