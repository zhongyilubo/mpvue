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
      <li>
        <h1 class="myTitle">商品明细</h1>
        <p>{{goods.name}}</p>
        <dl class="zt-money gray">
          <dt class="kuan"><span>{{goods.teacher}}</span>&nbsp;&nbsp;<span>{{goods.type_name}}</span></dt>
          <dd class="red">¥:<span>{{goods.price}}</span></dd>
        </dl>
      </li>
      <li>
        <h1 class="myTitle">支付方式</h1>
        <p>{{detail.pay_type}}</p>
      </li>
      <li>
        <p class="mt-25">订单编号：<span>HF58988574</span></p>
        <p class="mt-25">下单时间：<span>2019-03-31 23:59:49</span></p>
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
      goods:{}

    },
    mounted() {
      this.id = this.getQuery().id;//接收这个参数 jq mpvue接收的方式不一样
      this.getInfo();
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

