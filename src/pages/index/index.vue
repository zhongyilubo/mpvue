<template>
  <div @click="clickHandle">

    <button open-type="getUserInfo" @getuserinfo="getUserInfo"> 获取头像昵称 </button>

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" v-if="!userInfo.avatarUrl" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

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

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      userInfo: {
        nickName: mpvue.getStorageSync('userInfo')['nickName'],
        avatarUrl: mpvue.getStorageSync('userInfo')['avatarUrl']
      }
    }
  },

  components: {
    card
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
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    getUserInfo: function(e) {
        let app = getApp()

        console.log(e)
          // app.globalData.userInfo = e.detail.userInfo
          // this.setData({
          //     userInfo: e.detail.userInfo,
          //     hasUserInfo: true
          // })
      }
  },

  created () {
      let app = getApp()

      if (app.globalData.userInfo) {
          this.setData({
              userInfo: app.globalData.userInfo,
              hasUserInfo: true
          })
      } else if (this.canIUse){
          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          app.userInfoReadyCallback = res => {
              this.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
              })
          }
      } else {
          // 在没有 open-type=getUserInfo 版本的兼容处理
          wx.getUserInfo({
              success: res => {
                  app.globalData.userInfo = res.userInfo
                  this.setData({
                      userInfo: res.userInfo,
                      hasUserInfo: true
                  })
              }
          })
      }
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
