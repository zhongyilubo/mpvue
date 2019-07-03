<template>

  <div>
    <div v-if="version==0">
      <button class="authlogin" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" v-if="getusershow"> 获取头像昵称 </button>
      <div class="myContainer">


        <ul class="zt-box zt-box-img two-line" v-for="(item, index) in join" :index="index" :key="key" @click="tojoin(item)"><!--  two-line -->
          <li>
            <span><img :src="item.cover" alt=""></span>
          </li>
          <li>
            <p>{{item.name}}</p>
            <dl class="zt-money gray">
              <dd><span>{{item.date}}</span></dd>
            </dl>
            <dl class="zt-money gray">
              <dt>{{item.teacher}}</dt>
              <dd><span>{{item.number}}</span>人</dd>
            </dl>
            <dl class="zt-money red">
              <dd>{{item.type_name}}</dd>
            </dl>
          </li>
        </ul>


      </div>
      <bottomnav></bottomnav>

    </div>

    <div v-if="version==1">
      <button class="authlogin" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" v-if="getusershow"> 获取头像昵称 </button>
      <div class="myContainer">
        <!-- 搜索 -->
        <div @click="tosearch">
          <div class="inp-search" type="text"></div>
        </div>
        <!-- banner -->
        <div class="banner">
          <swiper class="swiper" indicator-dots="true" autoplay="true" style="height:100%;" interval="5000" duration="1000">
            <block v-for="(item, index) in banner" :index="index" :key="key">
              <swiper-item>
                <image @click="tosonn" :data-index="urlid[index]" style="width:100%;" :src="item" class="slide-image" mode="aspectFill"/>
              </swiper-item>
            </block>
          </swiper>
        </div>
        <!-- 热门推荐 -->
        <h1 class="myTitle">热门推荐</h1>

        <ul class="zt-box one-line">

          <li v-for="(item, index) in hot" :index="index" :key="key" @click="togoods(item)">
            <span><img :src="item.cover" alt="" mode="widthFix" width="100%" ></span>
            <p>{{item.name}}</p>
            <dl class="zt-money">
              <dt class="red"><span v-if="!isios">{{item.pay_view}}</span></dt>
              <dd class="gray">{{item.teacher}}</dd>
            </dl>
          </li>

        </ul>

        <!--这里放分类-->

        <scroll-view class="buy-scroll" scroll-x="true" >
          &nbsp;&nbsp;<li data-id="0" @click="getcategory">全部分类<div class="line_red" v-if="liselect == 0"></div></li>
          <li v-for="(item, index) in category" :index="index" :key="key" @click="getcategory" :data-id="item.id" :data-index="index">{{item.name}}<div v-if="liselect == (index + 1)" class="line_red"></div></li>
        </scroll-view>
        <div class="line_grey"></div>
        <div class="myContainer" style="padding-top: 20px;">

          <ul class="zt-box zt-box-img two-line" v-for="(item, index) in buyvideo" :index="index" :key="key" @click="togoods(item)"><!--  two-line -->
            <li>
              <span><img :src="item.cover" alt=""></span>
            </li>
            <li>
              <p>{{item.name}}</p>
              <dl class="zt-money gray">
                <dd><span>{{item.date}}</span></dd>
              </dl>
              <dl class="zt-money gray">
                <dt>{{item.teacher}}</dt>
                <dd><span>{{item.number}}</span>次</dd>
              </dl>
              <dl class="zt-money red">
                <dt><span v-if="!isios">{{item.pay_view}}</span></dt>
                <dd>{{item.type_name}}</dd>
              </dl>
            </li>
          </ul>
          <div v-if="!buyvideo.length">
            <p style="text-align: center; line-height: 220rpx;">暂无内容</p>
          </div>
        </div>


      </div>
      <bottomnav></bottomnav>

    </div>
  </div>
</template>

<script>
  import '@/assets/css/style.css';
  import '@/assets/css/extra.css';
  import bottomnav from '@/components/nav.vue';
  export default {
    data: {
      banner: [],
      urlid: [],
      hot: [],
      news: [],
      message: 'Hello Vue!',
      getusershow:true,
      userInfo: {},
      isios: 1,
      join: null,
      version: null,
        category: [],
        buyvideo:[],
        cid:0,
      liselect:0,
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
            _this.urlid = res.data.banner.urlid;
            _this.hot = res.data.hot;
            _this.news = res.data.new;
            _this.version = res.data.version;
            _this.join = res.data.join;
            mpvue.setStorageSync('version', res.data.version)
        })

        _this.buylist();
        _this.buyli(this.cid);

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
      onPullDownRefresh () {
          var _this = this;

          _this.$net.post({
              url: 'index',
              data: {}
          }).then(res => {
              _this.banner = res.data.banner.image;
              _this.urlid = res.data.banner.urlid;
              _this.hot = res.data.hot;
              _this.news = res.data.new;
              _this.version = res.data.version;
              _this.join = res.data.join;
              mpvue.setStorageSync('version', res.data.version)

              wx.stopPullDownRefresh()
              wx.hideNavigationBarLoading()
          })
      },
    methods: {
      buylist(){
          var _this = this;
          _this.$net.post({
              url: 'category',
              data: {}
          }).then(res => {
              _this.category = res.data;
          })
      },
        buyli(cid = 0,key = ''){
            var _this = this;
            _this.$net.post({
                url: 'goods',
                data: {cid:cid,key:key}
            }).then(res => {
                _this.buyvideo = res.data;
            })
        },
        getcategory(e){
            this.buyli(e.currentTarget.dataset.id)
            if(e.currentTarget.dataset.index >= 0){
                this.liselect = e.currentTarget.dataset.index*1 + 1
            }else{
                this.liselect = 0;
            }
        },
        bindGetUserInfo(e) {
            var _this = this;

            if (e.mp.detail.rawData){
                //用户按了允许授权按钮
                console.log('用户按了允许授权按钮')
                console.log(e.mp.detail.userInfo);
                this.getusershow = false;
                this.userInfo = e.mp.detail.userInfo;
                mpvue.setStorageSync('userInfo', e.mp.detail.userInfo)

                _this.$net.post({
                    url: 'saveuserinfo',
                    data: e.mp.detail.userInfo
                })

            } else {
                //用户按了拒绝按钮
                console.log('用户按了拒绝按钮')
            }
        },
        tosearch(){
            wx.navigateTo({
                url: '/pages/search/main'
            });
        },
        togoods(obj){
            wx.navigateTo({
                url: '/pages/video-details-introduce/main?id='+obj.id
            });
        },
        tosonn(e){
            var id = e.currentTarget.dataset.index;
            if(id){
                wx.navigateTo({
                    url: '/pages/video-details-introduce/main?id='+id
                });
            }
        },
        tojoin(obj){
            wx.navigateTo({
                url: '/pages/join/main?id='+obj.id
            });
        }
    }
  }

</script>