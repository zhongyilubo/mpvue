<template>
  <div @click="clickHandle">
    <a href="/pages/lianxi/main" class="counter">去登录d</a>
    <button open-type="getUserInfo"  @getuserinfo="bindGetUserInfo"> 获取头像昵称 </button>

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
      userInfo: {
        nickName: mpvue.getStorageSync('userInfo')['nickName'],
        avatarUrl: mpvue.getStorageSync('userInfo')['avatarUrl']
      }
    }
  },
  components: {
    card
  },
  created () {
      let app = getApp()
  },
  mounted(){
      wx.getSetting({
          success: function(res){
              if (res.authSetting['scope.userInfo']) {
                  wx.getUserInfo({
                      success: function(res) {
                          console.log(res.userInfo)
                          //用户已经授权过
                          console.log('用户已经授权过')
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
      clickHandle (ev) {
        console.log('clickHandle:', ev)
      },
      bindGetUserInfo(e) {
          if (e.mp.detail.rawData){
              //用户按了允许授权按钮
              console.log('用户按了允许授权按钮')
              console.log(e.mp.detail.userInfo);
          } else {
              //用户按了拒绝按钮
              console.log('用户按了拒绝按钮')
          }
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
