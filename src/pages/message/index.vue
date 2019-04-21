<template>
  <div class="myContainer">
    <ul class="integral mt-25">
      <li>
        <h1 class="myTitle">支付消息</h1>
        <p>尊敬的用户，您于2019年12月21日，成功支付了52. 00元，并获得了，52积分，请在我的积分中查看</p>
        <dl class="zt-money gray">
          <dt class="kuan">201903-31 23:59:59</dt>
          <!--<dd class="red">删除</dd>-->
        </dl>
      </li>
      <li>
        <h1 class="myTitle">商品明细</h1>
        <p>著名中医教你如何正确的拔罐子...</p>
        <dl class="zt-money gray">
          <dt class="kuan"><span>李时珍</span>&nbsp;&nbsp;<span>系列课</span></dt>
          <dd class="red">¥:<span>52.00</span></dd>
        </dl>
      </li>
      <li>
        <h1 class="myTitle">支付方式</h1>
        <p>微信支付</p>
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
      message: 'Hello Vue!'
    },
    methods: {
      dddd(){
        this.message = 'asdfsadfsdaf'
      }
    }
  }
</script>

