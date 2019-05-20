<template>
  <div>
    <div class="myContainer">

      <!-- 最新视频 -->
      <h1 class="myTitle">购买内容</h1>
      <ul class="zt-box zt-box-img">
        <li>
          <span><img :src="cover" alt="" ></span>
        </li>
        <li>
          <p class="mmmmm">{{name}}</p>
          <dl class="zt-money gray">
            <dt></dt>
            <dd>{{date}}</dd>
          </dl>
          <dl class="zt-money gray">
            <dt>{{teacher}}</dt>
            <dd><span>{{number}}</span>次</dd>
          </dl>
          <dl class="zt-money red">
            <dt><span>{{pay_view}}</span></dt>
            <dd>{{type_name}}</dd>
          </dl>
        </li>
      </ul>

    </div>

    <div class="h130"></div>
    <dl class="weixin">
      <dt>共计：<span>{{pay_view}}</span></dt>
      <dd @click="topay">去支付</dd>
    </dl>

  </div>

</template>

<script>
  import '@/assets/css/style.css';
  export default {
    data: {
        id: 0,
        name: '',
        type_name: '',
        type: '',
        video: '',
        number: '',
        teacher: '',
        date: '',
        timer: '',
        intro: '',
        pay: 2,
        pay_name: '',
        pay_view: '',
        sons: '',
        cover: '',
        title:'中推在线',
        ispay:0,
        isshare:0,
    },
    mounted(){
      var _this = this;

      this.id = this.getQuery().id;//接收这个参数 jq mpvue接收的方式不一样

      _this.$net.post({
          url: 'detail/'+_this.id,
          data: {}
      }).then(res => {
          _this.name = res.data.name;
          _this.type_name = res.data.type_name;
          _this.type = res.data.type;
          _this.teacher = res.data.teacher;
          _this.name = res.data.name;
          _this.number = res.data.number;
          _this.date = res.data.date;
          _this.timer = res.data.timer;
          _this.video = res.data.video;
          _this.cover = res.data.cover;
          _this.intro = res.data.intro;
          _this.pay = res.data.pay;
          _this.pay_name = res.data.pay_name;
          _this.pay_view = res.data.pay_view;
      })
    },
    methods: {
        getQuery() {
            /* 获取当前路由栈数组 */
            const pages = getCurrentPages()
            const currentPage = pages[pages.length - 1]
            const options = currentPage.options
            return options
        },
        topay(){
            var _this = this;

            _this.$net.post({
                url: 'pay/'+_this.id,
                data: {}
            }).then(res => {
                if(res.status == 0){
                    return wx.showToast({
                        title: res.info,
                        icon: 'none',
                        duration: 2000
                    })
                }

                if(_this.pay == 2){
                    wx.requestPayment({
                        timeStamp: res.timeStamp.toString(),
                        nonceStr: res.nonceStr,
                        package: res.package,
                        signType: res.signType,
                        paySign: res.paySign,
                        success: function(res) {
                            wx.showToast({
                                title: '支付成功',
                                icon: 'none',
                                duration: 2000
                            })
                            setTimeout(function () {
                                wx.navigateTo({
                                    url: '/pages/buy/main'
                                })
                            },1000);
                            console.log(res)
                        },
                        fail: function(res) {
                            console.log('付款失败')
                            console.log(res)
                        }
                    })
                }else{

                    wx.showToast({
                        title: '支付成功',
                        icon: 'none',
                        duration: 2000
                    })
                    setTimeout(function () {
                        wx.navigateTo({
                            url: '/pages/buy/main'
                        })
                    },1000);
                }

            })
        }
    }
  }
</script>
<style>
  .mmmmm{
    min-height: 87rpx;
  }
</style>
