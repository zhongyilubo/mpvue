<template>
  <div>
    <div v-if="!version" style="text-align: center;">
      <img src="/static/images/tippp.png">
    </div>

    <div class="myContainer" v-if="version">

      <!-- 最新视频 -->
      <video id="myvideo" class="details" :src="video" :poster="cover2" @timeupdate="videorun" @play="startrun" controls></video>

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
        <li  v-for="(item, index) in comments" :index="index" :key="key">
          <div class="video-comment-img">
            <img :src="item.header" style="width: 100%; height: 100%; border-radius: 50%;">
          </div>
          <div class="video-comment-font">
            <div>
              <span>{{item.name}}</span>
              <span v-if="item.pname" class="red">回复</span>
              <span v-if="item.pname">{{item.pname}}</span>
            </div>
            <div class="zt-money gray">{{item.time}}</div>
            <p>{{item.content}}</p>
            <dl>
                <dt><i class="fabulous fabulous-red"></i>{{item.zan}}</dt>
                <dd class="red" @click="tobackword(item.id)">回复</dd>
            </dl>
          </div>
        </li>
        <li v-if="!comments.length">
          <div></div>
          <div class="video-comment-font">
            <div></div>
            <div class="zt-money gray"></div>
            <p>暂无评论</p>
          </div>
        </li>
        <li style="border-top: none;">
          <textarea class="iiiiii" rows="3" :focus='isfocus' @input="iiiiio" @blur="bluraction" :value="concent" :placeholder="backword" style="border: 1px solid #ccc; border-radius: 10rpx;"></textarea>
            <div class="opopopop" @click="totottoto">发表评论</div>
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
      isshareshow : false,
      comments : [],
        backword:'请输入评论',
        concent:"",
        isfocus:false,
        version: null,
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
      cover2: '',
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
        this.version = mpvue.getStorageSync('version') || null

        this.id = this.getQuery().id;//接收这个参数 jq mpvue接收的方式不一样

        _this.$net.post({
            url: 'detail/'+_this.id,
            data: {}
        }).then(res => {
            _this.name = res.data.name;
            _this.comments = res.data.comment;
            _this.type_name = res.data.type_name;
            _this.type = res.data.type;
            _this.teacher = res.data.teacher;
            _this.name = res.data.name;
            _this.number = res.data.number;
            _this.date = res.data.date;
            _this.timer = res.data.timer;
            _this.video = res.data.video;
            _this.cover2 = res.data.cover + '?r='+Math.ceil(Math.random()*100000);
            _this.intro = res.data.intro;
            _this.pay = res.data.pay;
            _this.pay_name = res.data.pay_name;
            _this.pay_view = res.data.pay_view;
            _this.sons = res.data.sons;
            _this.iosword = res.url.ios;
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
        totottoto(){
            var _this = this;

            _this.$net.post({
                url: 'comment',
                data: {
                    content:_this.concent,
                    goodsid:_this.id,
                    backid:_this.backid,
                }
            }).then(res => {
                if(!res.status){
                    return wx.showToast({
                        title: res.info,
                        icon: 'none',
                        duration: 2000
                    })
                }
                wx.redirectTo({
                    url: '/pages/video-details-introduce/main?id='+_this.id
                })
            })
        },
        tobackword(index){
            this.backid = index
            this.backword = '请回复内容';
            this.concent = '';
            this.isfocus = true;
        },
        bluraction(){
            this.isfocus = false;
            if(!this.concent){this.backid = 0;}
            this.backword = '请输入评论';
        },
        iiiiio(e){
            this.concent = e.mp.detail.value
        },
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
              if(this.ispay) {
                  _this.isshareshow = true;
              }
              return wx.showModal({
                  title: '提示',
                  content: !this.ispay ? (this.isios? this.iosword :'尚未购买确定购买吗'):'需分享后观看,点击右上角 ●●● 转发',
                  success(res) {
                      if (res.confirm && !_this.isios) {
                          _this.pay != 1 && wx.navigateTo({
                              url: '/pages/order/main?id='+_this.id
                          })

                      } else if (res.cancel) {
                          console.log('用户点击取消')
                      }
                      _this.isshareshow = false;

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
              if(this.ispay) {
                  _this.isshareshow = true;
              }
              wx.showModal({
                  title: '提示',
                  content: !this.ispay ? (this.isios? this.iosword :'尚未购买确定购买吗'):'需分享后观看,点击右上角 ●●● 转发',
                  success(res) {
                      if (res.confirm && !_this.isios) {
                          _this.pay != 1 && wx.navigateTo({
                              url: '/pages/order/main?id='+_this.id
                          })

                      } else if (res.cancel) {
                          console.log('用户点击取消')
                      }
                      _this.isshareshow = false;

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
            path:'/pages/index/main',
            imageUrl: that.cover,
            success(){
                console.log(11232);
            },
        };
        return shareObj;
    }

  }
</script>

