<template>
  <div>

    <scroll-view class="buy-scroll" scroll-x="true" >
        &nbsp;&nbsp;<li data-id="0" @click="getcategory">全部购买</li>
        <li v-for="(item, index) in category" :index="index" :key="key" @click="getcategory" :data-id="item.id">{{item.name}}</li>
    </scroll-view>

    <div class="myContainer">
      <ul class="zt-box one-line mt-30">
        <li v-for="(item, index) in buyvideo" :index="index" :key="key">
          <span><img :src="item.cover" alt="" mode="widthFix" width="100%" ></span>
          <p>{{item.name}}</p>
          <dl class="zt-money">
            <dt class="red">￥<span>{{item.price}}</span></dt>
            <dd class="gray">{{item.teacher}}</dd>
          </dl>
        </li>
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
      buyvideo:[]
    },
    mounted(){
      this.buylist();
      this.buyli();
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
      buyli(cid = 0){
        var _this = this;
        _this.$net.post({
          url: 'buy',
          data: {cid:cid}
        }).then(res => {
          _this.buyvideo = res.data;
        })
      },
      getcategory(e){
          this.buyli(e.currentTarget.dataset.id)
      }
    }
  }
</script>

