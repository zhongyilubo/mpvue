<template>
  <div class="myContainer">

    <div class="integral-top">
      <h1 class="myTitle">我的积分数</h1>
      <div class="integral-font red">查看积分规则</div>
      <div class="number red">582</div>
    </div>

    <ul class="integral mt-25">
      <li>
        <h1 class="myTitle">获取积分</h1>
        <p>尊敬的用户，您于2019年12月21日，成功支付了52. 00元，并获得了，52积分，请在我的积分中查看</p>
        <dl class="zt-money gray">
          <dt class="kuan">201903-31 23:59:59</dt>
          <dd class="red">删除</dd>
        </dl>
      </li>
      <li>
        <h1 class="myTitle">消费积分</h1>
        <p>尊敬的用户，您于2019年12月21日，成功支付了52. 00元，并获得了，52积分，请在我的积分中查看</p>
        <dl class="zt-money gray">
          <dt class="kuan">201903-31 23:59:59</dt>
          <dd class="red">删除</dd>
        </dl>
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

