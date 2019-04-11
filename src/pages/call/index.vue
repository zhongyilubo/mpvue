<template>
  <div class="myContainer2">
    <h1 class="myTitle">姓名</h1>
    <input type="text">
    <h1 class="myTitle">联系方式</h1>
    <input type="text">
    <h1 class="myTitle">您要反应的问题</h1>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <div class="submitBut">提交</div>
    <p>客服电话</p>
    <p>400-0101-234</p>
    <p>400-0101-234</p>
  </div>
</template>

<script>
  import '@/assets/css/call.css';
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