<script>
export default {
    created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

        var _this = this;
          // 登录
        wx.login({
          success: res => {
              // 发送 res.code 到后台换取 openId, sessionKey, unionId
              _this.$net.post({
                  url: 'login',
                  data: {
                      'code': res.code
                  }
              }).then(res => {
                  mpvue.setStorageSync('token', res.data.access_token)
                  mpvue.setStorageSync('openid', res.data.openid)
              })
          }
        })
    },

    globalData: {
        userInfo: null
    }
}
</script>