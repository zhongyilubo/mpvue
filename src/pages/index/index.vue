<template>
  <div>

    <a href="/pages/lianxi/main" class="counter">去首页</a>
    <a href="/pages/video/main" class="counter">去最新视频</a>
    <a href="/pages/comment/main" class="counter">去评论</a>
    <a href="/pages/call/main" class="counter">联系我们</a>
    <a href="/pages/classify/main" class="counter">全部分类</a>
    <a href="/pages/install/main" class="counter">设置</a>
    <a href="/pages/mine/main" class="counter">我的</a>
    <a href="/pages/buy/main" class="counter">我的购买</a>
    <a href="/pages/video-details/main" class="counter">视频详情</a>
    <a href="/pages/video-details-introduce/main" class="counter">视频详情带简介评论</a>
    <a href="/pages/integral/main" class="counter">我的积分</a>
    <a href="/pages/message/main" class="counter">消息</a>

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
    }
  },
  components: {
    card
  },
  created () {
      let app = getApp()
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
  }
}
</script>
