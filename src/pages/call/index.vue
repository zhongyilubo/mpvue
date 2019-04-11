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

<style scoped>

  /* 通用 */
  h1{ font-size: 42rpx; color: #333;}
  p{ font-size: 30rpx; color: #000;}
  .red{ color:#d11208; }
  .gray{ color:#666;}
  .h130{ height: 130rpx;}

  /* 钱 名字 */
  .zt-money{ overflow: hidden; font-size: 26rpx; margin-top: 15rpx;}
  .zt-money dt{ float: left}
  .zt-money dd{ float: right}

  .myContainer{ width: 92%; margin:0 4%;}
  .myContainer2{ width: 80%; margin:0 10%;}
  /*--------------------------------------------*/
  .inp-search{
    width: 100%;
    height: 55rpx;
    font-size: 30rpx;
    line-height: 30rpx;
    border: 1px solid #8781a6;
    display: inline-block;
    box-sizing: border-box;
    text-indent: 5px;
    border-radius: 8rpx;
    padding:0 0 0 70rpx;
    margin: 13rpx 0 15rpx;
    background: url("../../../../mpvue/static/images/search.png") no-repeat;
    background-size:33rpx;
    background-position: 20rpx center ;
  }
  .banner img{
    width: 100%;
    height: 350rpx;
    /*background:blue;*/
  }
  .myTitle{
    margin: 25rpx 0;
  }
  .zt-box{
    overflow: hidden;
  }
  .zt-box li{ margin-bottom: 15px;}
  .zt-box li img{ width: 100%; height: auto;}
  .zt-box li:nth-child(2n-1){
    float: left;
    width: calc(50% - 8rpx);
    margin-right: 8rpx;
  }
  .zt-box li:nth-child(2n){
    float: left;
    width: calc(50% - 8rpx);
    margin-left: 8rpx;
  }
  /* nav 导航 */
  .nav{
    position:fixed;
    bottom: 0;
    width: 100%;
    font-size: 30rpx;
    padding:20rpx 0;
    background: #fff;
    border-top: 1rpx solid #e6e6e6;
    overflow: hidden;
  }
  .nav li{
    width: 25%;
    text-align: center;
    float:left;
  }
  .nav img{ width: 40rpx;}
  /* 联系我们 */
  .myContainer2 input{
    width:100%;
    height: 76rpx;
    text-indent: 10rpx;
    background: #eee;
    border:1px solid #dedede;
  }
  .myContainer2 h1{
    margin-top: 30rpx;
    margin-bottom: 20rpx;
  }
  .myContainer2 textarea{
    width: 100%;
    background: #eee;
    border:1px solid #dedede;
  }
  .myContainer2 .submitBut{
      width: 100%;
      height: 66rpx;
      font-size: 30rpx;
      text-align: center;
      line-height: 66rpx;
      color:#fff;
      background: #d11208;
      margin-top: 30rpx;
  }
  .myContainer2 p{
    font-size: 30rpx;
    margin-top: 35rpx;
  }






</style>
