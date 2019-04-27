<template>
  <div>
    <div class="myContainer" ><!--v-for="(item,index) in zhuanfa" :index="index" :key="key"-->
      <h1 class="myTitle">{{zhuanfa.name}}&nbsp;&nbsp;&nbsp;<span class="red">{{zhuanfa.value}}分</span></h1>
      <h1 class="myTitle">{{fenxiang.name}}&nbsp;&nbsp;&nbsp;<span class="red">{{fenxiang.value}}分</span></h1>
      <h1 class="myTitle">点赞评论&nbsp;&nbsp;&nbsp;<span class="red">5分</span></h1>
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
        name:'fenxiang',
        value:'4'
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
