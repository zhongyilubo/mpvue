<template>
  <div class="myContainer">

    <div class="integral-top">
      <h1 class="myTitle">我的积分数</h1>
      <a href="/pages/comment/main" class="integral-font red" >查看积分规则</a>
      <div class="number red">{{integral}}</div>
    </div>

    <ul class="integral mt-25">
      <li v-for="(item,index) in listintegral" :index="index" :key="key">
        <h1 class="myTitle">{{item.type_name}}</h1>
        <p>{{item.content}}</p>
        <dl class="zt-money gray">
          <dt class="kuan">{{item.created_at}}</dt>
          <dd class="red" @click="cutout" :data-id="item.id">删除</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
  import '@/assets/css/style.css';

  export default {
    data: {
      integral:0,
      listintegral:[]
    },
    mounted(){
      this.send()
    },
    methods:{
      cutout(e){
          var id = e.currentTarget.dataset.id;
        //只是地址
        var _this = this;
        _this.$net.post({
          url: 'integral/delete/'+id,
          data: {}
        }).then(res => {
          _this.send();
        })
      },
      send(){
        var _this = this;
        _this.$net.post({
          url: 'integral',
          data: {}
        }).then(res => {
          _this.integral = res.data.user.integral;
          _this.listintegral = res.data.lists;
        })
      }
    }
  }





  //integral
</script>

