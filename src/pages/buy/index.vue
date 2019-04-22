<template>
  <div>

    <scroll-view class="buy-scroll" scroll-x="true" >
        &nbsp;&nbsp;<li v-for="(item, index) in category" :index="index" :key="key">{{item.name}}</li>
        <!--<li>全部购买</li>
        <li>针灸拔罐</li>
        <li>正骨疗法</li>
        <li>推拿按摩</li>
        <li>名家名医</li>-->
    </scroll-view>

    <div class="myContainer">
      <ul class="zt-box one-line mt-30">
        <li v-for="(item, index) in hot" :index="index" :key="key">
          <span><img :src="item.cover" alt="" mode="widthFix" width="100%" ></span>
          <p>{{item.name}}</p>
          <dl class="zt-money">
            <dt class="red">￥<span>{{item.price}}</span></dt>
            <dd class="gray">{{item.teacher}}</dd>
          </dl>
        </li>
        <!--<li>
          <span><img src="../../../../mpvue/static/images/class-img1.png" alt="" mode="widthFix" width="100%" ></span>
          <p>中医教你如何正确的拔罐子拔罐子拔罐子</p>
          <dl class="zt-money">
            <dt class="red">￥:<span>52.00</span></dt>
            <dd class="gray">李时珍</dd>
          </dl>
        </li>-->

        <!--<li>
          <span><img src="../../../../mpvue/static/images/class-img1.png" alt="" mode="widthFix"></span>
          <p>中医教你如何正确的拔罐子拔罐子拔罐子</p>
          <dl class="zt-money">
            <dt class="red">￥:<span>52.00</span></dt>
            <dd class="gray">李时珍</dd>
          </dl>
        </li>

        <li>
          <span><img src="../../../../mpvue/static/images/class-img1.png" alt="" mode="widthFix" width="100%" ></span>
          <p>中医教你如何正确的拔罐子拔罐子拔罐子</p>
          <dl class="zt-money">
            <dt class="red">￥:<span>52.00</span></dt>
            <dd class="gray">李时珍</dd>
          </dl>
        </li>

        <li>
          <span><img src="../../../../mpvue/static/images/class-img1.png" alt="" mode="widthFix"></span>
          <p>中医教你如何正确的拔罐子拔罐子拔罐子</p>
          <dl class="zt-money">
            <dt class="red">￥:<span>52.00</span></dt>
            <dd class="gray">李时珍</dd>
          </dl>
        </li>-->

      </ul>
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
      category: [],

    },
    mounted(){
      var _this = this;

      _this.$net.post({
        url: 'category',
        data: {}
      }).then(res => {
        _this.category = res.data;
      })



      },
    methods: {
      dddd(){
        this.message = 'asdfsadfsdaf'
      }
    }
  }
</script>

