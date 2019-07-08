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

    <view class='toast-box' v-if="ifName">
      <view class='toastbg'></view>
      <view class='showToast'>
        <view class='toast-title'>
          <text>请填写手机号码，方便提供后续服务</text>
        </view>
        <view class='toast-main'>
          <view class='toast-input'>
            <input placeholder='请输手机号' v-model="setValue" data-name='stuEidtName'>
          </view>
        </view>
        <view class='toast-button'>
          <view class='button1'>
            <button @click='cancel'>取消</button>
          </view>
          <view class='button2'>
            <button @click='confirm'>确定</button>
          </view>
        </view>
      </view>
    </view>

  </div>

</template>

<script>
  import '@/assets/css/style.css';
  export default {
    data: {
        id: 0,
        ifName:false,
        setValue:null,
        isshareshow : false,
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
        has_mobile: false
    },
    mounted(){
      var _this = this;

      this.id = this.getQuery().id;//接收这个参数 jq mpvue接收的方式不一样

        _this.$net.post({
            url: 'userinfo'
        }).then(res => {
            _this.has_mobile = res.data.user.mobile;
        })

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
        cancel(){
            this.ifName = false;
            this.setValue = null;
            this.topay2();
        },
        confirm(){
            var _this = this;

            _this.$net.post({
                url: 'userinfomobile',
                data:{mobile:_this.setValue}
            }).then(res => {
                if(!res.status){
                    return wx.showToast({
                        title: res.info,
                        icon: 'none',
                        duration: 2000
                    })
                }
                this.ifName = false;
                this.setValue = null;
                _this.has_mobile = true;
                _this.topay2();
            })
        },
        getQuery() {
            /* 获取当前路由栈数组 */
            const pages = getCurrentPages()
            const currentPage = pages[pages.length - 1]
            const options = currentPage.options
            return options
        },
        topay(){
            var _this = this;
            if(!_this.has_mobile){
                return this.ifName = true;
            }

            _this.topay2();
        },
        topay2(){
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
                                title: '购买成功',
                                icon: 'none',
                                duration: 2000
                            })
                            setTimeout(function () {
                                wx.navigateTo({
                                    url: '/pages/buy/main'
                                })
                            },2000);
                            console.log(res)
                        },
                        fail: function(res) {
                            console.log('付款失败')
                            console.log(res)
                        }
                    })
                }else{

                    wx.showToast({
                        title: '购买成功',
                        icon: 'none',
                        duration: 2000
                    })
                    setTimeout(function () {
                        wx.navigateTo({
                            url: '/pages/buy/main'
                        })
                    },2000);
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

<style scoped>
  .toast-box {
    width: 100%;
    height: 100%;
    opacity: 1;
    position: fixed;
    top: 0px;
    left: 0px;
  }

  .toastbg {
    opacity: 0.2;
    background-color: black;
    position: absolute;
    width: 100%;
    min-height: 100vh;
  }

  .showToast {
    position: absolute;
    opacity: 1;
    width: 70%;
    margin-left: 15%;
    margin-top: 40%;
  }

  .toast-title {
    padding-left: 5%;
    background-color: #2196f3;
    font-size: 30rpx;
    color: white;
    padding-top: 2vh;
    padding-bottom: 2vh;
    border-top-right-radius: 16rpx;
    border-top-left-radius: 16rpx;
  }

  .toast-main {
    padding-top: 2vh;
    padding-bottom: 2vh;
    background-color: white;
    text-align: center;
  }

  .toast-input {
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid #ddd;
    padding-left: 2vh;
    padding-right: 2vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
  }

  .toast-button {
    display: flex;
  }

  .button1 {
    width: 50%;
  }

  .button2 {
    width: 50%;
  }

  .button1 button {
    width: 100%;
    background-color: white;
    color: red;
    border-radius: 0px;
    border-bottom-left-radius: 16rpx;
  }

  .button2 button{
    width: 100%;
    background-color: white;
    color: black;
    border-radius: 0px;
    border-bottom-right-radius: 16rpx;
  }

  .picker {
    padding-top: 1vh;
    padding-bottom: 1vh;
  }
</style>
