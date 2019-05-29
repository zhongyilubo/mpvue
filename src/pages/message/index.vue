<template>
  <div class="myContainer">
    <ul class="integral mt-25">
      <li>
        <h1 class="myTitle">{{detailcontent.type_name}}</h1>
        <p>{{detailcontent.content}}</p>
        <dl class="zt-money gray">
          <dt class="kuan">{{detailcontent.created_at}}</dt>
          <!--<dd class="red">删除</dd>-->
        </dl>
      </li>
      <li v-if="detail">
        <h1 class="myTitle">商品明细</h1>
        <p>{{goods.name}}</p>
        <dl class="zt-money gray">
          <dt class="kuan"><span>{{goods.teacher}}</span>&nbsp;&nbsp;<span>{{goods.type_name}}</span></dt>
          <dd class="red" v-if="!isios">¥<span>{{goods.price}}</span></dd>
        </dl>
      </li>
      <li v-if="detail && !isios">
        <h1 class="myTitle">支付方式</h1>
        <p>{{detail.pay_type}}</p>
      </li>
      <li v-if="detail">
        <p class="mt-25">订单编号：<span>{{detail.serial}}</span></p>
        <p class="mt-25">下单时间：<span>{{detail.created_at}}</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import '@/assets/css/style.css';
  export default {
    data: {
      id: 0,
      detail:{ },
      detailcontent:{},
      goods:{},
      isios: 1
    },
    mounted() {
      var _this = this;

      this.id = this.getQuery().id;//接收这个参数 jq mpvue接收的方式不一样
      this.getInfo();

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
      getInfo(){
        var _this = this;
        _this.$net.post({
          url: 'message/detail/' + _this.id,
          data: {}
        }).then(res => {
          _this.detailcontent = res.data;
          _this.detail = res.data.order;
          _this.goods = res.data.order.goods;
        })

      },
      getQuery() {
        /* 获取当前路由栈数组 */
        const pages = getCurrentPages()
        const currentPage = pages[pages.length - 1]
        const options = currentPage.options
        return options
      }
    }
  }
</script>

