<template>
  <div style="background: #eee; height: 100%; position: absolute; top: 0; bottom: 0; left: 0; right: 0;">
    <ul style="width: 96%; margin: 10rpx 10rpx auto; border-bottom: 1px solid #eee;">
      <!--<li class="red-back">器械类</li>-->
      <li style="box-sizing: border-box; padding: 8rpx; overflow: hidden;" v-for="(item, index) in category" :index="index" :key="key" @click="togoods(item.id)"><img :src="item.image" style="width: 100%;"></li>
    </ul>
    <bottomnav :type="type"></bottomnav>
  </div>

</template>
<style scoped>
  ul{
    overflow: hidden;
  }
  li{
    border: 1px solid #eee;
    width: 33.3333%;
    height: 240rpx;
    float: left;
    box-sizing:border-box;
    overflow: hidden;
  }
</style>
<script>
  import '@/assets/css/classify.css';
  import bottomnav from '@/components/nav.vue';

  export default {
      data: {
        category: [],
          type: 'zhuanlan',
      },
      components: {
          bottomnav
      },
    mounted(){
        var _this = this;

        _this.$net.post({
            url: 'cate',
            data: {}
        }).then(res => {
            _this.category = res.data;
        })
    },
    methods: {
        togoods(id){
            wx.navigateTo({
                url: '/pages/tgoods/main?cid='+id
            })
        }
    }
  }
</script>

