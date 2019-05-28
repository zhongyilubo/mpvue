<template>
  <div>
    <div class="myContainer">

      <!-- 最新视频 -->
      <video id="myvideo" class="details" :src="video" @timeupdate="videorun" @play="startrun" controls></video>

      <div class="mb-25">
          <h1 class="myTitle">{{name}}</h1>
          <div class="zt-money gray">{{teacher}}<span class="red display-inline ml-10">{{type_name}}</span></div>
          <dl class="zt-money gray">
            <dt class="kuan"><span>{{number}}</span>次播放<span>{{date}}</span> <span>{{timer}}</span></dt>
            <dd class="pay" v-if="!isios" @click="topay">{{pay_name}}</dd>
            <dd class="red" v-if="!isios">{{pay_view}}</dd>
          </dl>
      </div>
      <h1 class="myTitle mb-25 b-b">简介</h1>
      <p>
        {{intro}}
      </p>

      <ul v-if="type == 2" class="zt-box two-line" style="margin-top: 20rpx" v-for="(item, index) in sons" :index="index" :key="key" @click="tosons(item)">
        <li>
          <span><img :src="item.url" alt="" mode="widthFix"></span>
        </li>
        <li style="height: 100%;">
          <p>{{item.name}}</p>
          <dl class="zt-money gray" style="position: relative; bottom: 0;">
            <dt v-if="!isios">{{item.pay_view}}</dt>
            <dd><span>{{item.number}}</span>次</dd>
          </dl>
        </li>
      </ul>

      <h1 class="myTitle b-b">评论</h1>
      <ul class="video-comment">
        <li v-if="false">
          <div class="video-comment-img"></div>
          <div class="video-comment-font">
            <div>
              <span>毛豆花生</span>
              <span class="red">回复</span>
              <span>花生毛豆</span>
            </div>
            <div class="zt-money gray">201912-31  23:29:59</div>
            <p>视频不错，学到了很多东西，感谢老师，老师辛苦了。</p>
            <dl>
                <dt><i class="fabulous fabulous-red"></i>94</dt>
                <dd class="red">回复</dd>
            </dl>
          </div>
        </li>
        <li>
          <div></div>
          <div class="video-comment-font">
            <div></div>
            <div class="zt-money gray"></div>
            <p>暂无评论</p>
          </div>
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
      isios: 1,
        iosword:'暂无权限'
    },
    components: {
        bottomnav
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
            _this.intro = res.data.intro;
            _this.pay = res.data.pay;
            _this.pay_name = res.data.pay_name;
            _this.pay_view = res.data.pay_view;
            _this.sons = res.data.sons;
        })

        this.videoCtx = wx.createVideoContext('myvideo', this)

        _this.$net.post({
            url: 'goods/buyed/'+_this.id,
            data: {}
        }).then(res => {
            _this.cover = res.data.cover.image[0];
            _this.ispay = res.data.ispay;
            _this.isshare = res.data.isshare;
        })

        wx.getSystemInfo({
            success: function (res) {
                if(res.platform == 'ios'){
                    _this.isios = 1;
                }else{
                    _this.isios = 0;
                }
            }
        });

    },
    methods: {
      topay(){
          if(this.pay != 1){
              this.startrun();
          }

          if(this.pay != 1 && this.ispay == 1){
              return wx.showToast({
                  title: '已购买',
                  icon: 'none',
                  duration: 2000
              })
          }
      },
      getQuery() {
          /* 获取当前路由栈数组 */
          const pages = getCurrentPages()
          const currentPage = pages[pages.length - 1]
          const options = currentPage.options
          return options
      },
      tosons(item){

          var _this = this;
          //判断分享或支付
          if(!_this.ispay || (!_this.isshare && _this.pay == 1)){
              this.videoCtx.pause();
              return wx.showModal({
                  title: '提示',
                  content: !this.ispay ? (this.isios? this.iosword :'尚未购买确定购买吗'):'需分享后观看',
                  success(res) {
                      if (res.confirm && !_this.isios) {
                          _this.pay != 1 && wx.navigateTo({
                              url: '/pages/order/main?id='+_this.id
                          })

                      } else if (res.cancel) {
                          console.log('用户点击取消')
                      }
                  }
              })
          }
          wx.navigateTo({
              url: '/pages/video-details/main?id='+item.id
          })
      },
      videorun(event){
          this.startrun();
      },
      startrun(){
          var _this = this;
          //判断分享或支付
          if(!_this.ispay || (!_this.isshare && _this.pay == 1)){
              this.videoCtx.pause();
              wx.showModal({
                  title: '提示',
                  content: !this.ispay ? (this.isios? this.iosword :'尚未购买确定购买吗'):'需分享后观看',
                  success(res) {
                      if (res.confirm && !_this.isios) {
                          _this.pay != 1 && wx.navigateTo({
                              url: '/pages/order/main?id='+_this.id
                          })

                      } else if (res.cancel) {
                          console.log('用户点击取消')
                      }
                  }
              })
          }
      }
    },
    onShareAppMessage(options){
        var that = this;
        that.$net.post({
            url: 'share/'+that.id,
            data: {}
        }).then(res => {
            that.isshare = 1;
        })
        var shareObj = {
            title: that.title,
            path:'/pages/lianxi/main',
            imageUrl: that.cover,
            success(){
                console.log(11232);
            },
        };
        return shareObj;
    }

  }
</script>

