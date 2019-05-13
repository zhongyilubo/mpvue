<template>
  <div>
    <div class="myContainer">

      <!-- 最新视频 -->
      <h1 class="myTitle">购买内容</h1>
      <ul class="zt-box zt-box-img">
        <li>
          <span><img src="../../../../mpvue/static/images/class-img1.png" alt="" ></span>
        </li>
        <li>
          <p>著名中医教你如何正确的拔罐子</p>
          <dl class="zt-money gray">
            <dt></dt>
            <dd>03-31</dd>
          </dl>
          <dl class="zt-money gray">
            <dt>李时珍</dt>
            <dd><span>256</span>次</dd>
          </dl>
          <dl class="zt-money red">
            <dt>￥:<span>52.00</span></dt>
            <dd>系列课</dd>
          </dl>
        </li>
      </ul>

    </div>

    <div class="h130"></div>
    <dl class="weixin">
      <dt>共计：￥<span>50.00</span></dt>
      <dd>去支付</dd>
    </dl>

  </div>

</template>

<script>
  import '@/assets/css/style.css';
  export default {
    data: {
        id: 0
    },
    mounted(){
      var _this = this;

      this.id = this.getQuery().id;//接收这个参数 jq mpvue接收的方式不一样

      _this.$net.post({
          url: 'payinfo/'+_this.id,
          data: {}
      }).then(res => {

      })
    },
    methods: {
        getQuery() {
            /* 获取当前路由栈数组 */
            const pages = getCurrentPages()
            const currentPage = pages[pages.length - 1]
            const options = currentPage.options
            return options
        },
    }
  }
</script>

