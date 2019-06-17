<template>
  <div>
    <div v-if="!version" style="text-align: center;">
      <img src="/static/images/tippp.png">
    </div>
    <div v-if="version">
      <scroll-view class="buy-scroll" scroll-x="true" >
          &nbsp;&nbsp;<li data-id="0" @click="getcategory">全部分类</li>
          <li v-for="(item, index) in category" :index="index" :key="key" @click="getcategory" :data-id="item.id">{{item.name}}</li>
      </scroll-view>

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
  </div>
</template>
<style>
  .box {
    width:100vw;
    hight: 200rpx;
    /*white-space 不能丢  */
    white-space: nowrap;
    border: 1px solid red;
    box-sizing: border-box
  }
  .box-item {
    width: 45%;
    hight:100%;
    border:2rpx solid green;
    box-sizing: border-box;
    display: inline-block
  }
</style>
<script>
  import '@/assets/css/style.css';
  export default {
    data: {
      cid:0,
      key:'',
      category: [],
      buyvideo:[],
        isios: 1,
        version: null

    },
    mounted(){
      var _this = this;
        this.version = mpvue.getStorageSync('version') || null

        this.cid = this.getQuery().cid;//接收这个参数 jq mpvue接收的方式不一样
      this.key = this.getQuery().key;//接收这个参数 jq mpvue接收的方式不一样
      this.buylist();
      this.buyli(this.cid,this.key);

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
      },
        getQuery() {
            /* 获取当前路由栈数组 */
            const pages = getCurrentPages()
            const currentPage = pages[pages.length - 1]
            const options = currentPage.options
            return options
        },
        togoods(obj){
            wx.navigateTo({
                url: '/pages/video-details-introduce/main?id='+obj.id
            });
        }
    }
  }
</script>

