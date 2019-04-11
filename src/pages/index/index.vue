<template>
  <div>
    <a href="/pages/lianxi/main" class="counter">去首页</a>
    <a href="/pages/video/main" class="counter">去最新视频</a>
    <a href="/pages/comment/main" class="counter">去评论</a>
    <a href="/pages/call/main" class="counter">联系我们</a>

    <button class="authlogin" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" v-if="getusershow"> 获取头像昵称 </button>

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" v-if="!userInfo.avatarUrl" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div @click="getme">获取信息</div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

  </div>
</template>

<script>
import card from '@/components/card'
import '@/assets/css/test.css';

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      getusershow:true,
      userInfo: {}
    }
  },
  components: {
    card
  },
  created () {
      let app = getApp()
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
      bindViewTap () {
        const url = '../logs/main'
        if (mpvuePlatform === 'wx') {
          mpvue.switchTab({ url })
        } else {
          mpvue.navigateTo({ url })
        }
      },
      getme(){
          this.$net.post({
              url: 'me',
              data: {}
          }).then(res => {
              console.log('back');
          })
      },
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