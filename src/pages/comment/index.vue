<template>
  <div>
    <div class="myContainer" ><!--v-for="(item,index) in zhuanfa" :index="index" :key="key"-->
      <h1 class="myTitle">{{zhuanfa.name}}&nbsp;&nbsp;&nbsp;<span class="red">{{zhuanfa.value}}分</span></h1>
      <h1 class="myTitle">{{fenxiang.name}}&nbsp;&nbsp;&nbsp;<span class="red">{{fenxiang.value}}分</span></h1>
      <h1 class="myTitle">{{pinglun.name}}&nbsp;&nbsp;&nbsp;<span class="red">{{fenxiang.value}}分</span></h1>
      <h1 class="myTitle">{{zhifu.name}}&nbsp;&nbsp;&nbsp;<span class="red">{{zhifu.value}}分</span></h1>
      <h1 class="myTitle">{{qiandao.name}}&nbsp;&nbsp;&nbsp;<span class="red">{{qiandao.value}}分</span></h1>
      <h1 class="myTitle">{{shangxian.name}}&nbsp;&nbsp;&nbsp;<span class="red">{{shangxian.value}}分</span></h1>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/style.css';
  export default {
    data: {
      zhuanfa:{
        name:'转发',
        value:0
      },
      fenxiang:{
        name:'分享',
        value:'0'
      },
      pinglun:{
        name:'评论',
        value:'0'
      },
      zhifu:{
        name:'支付',
        value:'0'
      },
      qiandao:{
        name:'签到',
        value:'0'
      },
      shangxian:{
        name:'上限',
        value:'0'
      }
    },
    mounted(){
      this.jifen()
    },
    methods: {
      jifen(){
        var _this = this;
        _this.$net.post({
          url:'rule',
          data:{}
        }).then(res =>{
          _this.zhuanfa.value = res.data.zhuanfa;
          _this.fenxiang.value = res.data.fenxiang;
          _this.zhifu.value = res.data.zhifu;
          _this.qiandao.value = res.data.qiandao;
          _this.shangxian.value = res.data.shangxian;
        })
      }
    }
  }
</script>
<!--
    methods:{
      cutout(){
        var _this = this;
        _this.$net.post({
          url: 'integral/delete/4',
          data: {}
        }).then(res => {
          _this.send();
        })
      }
 -->
