<template>
  <div>
    <ul class="install-list">
      <li class="change"><!--消息通知-->{{box1}}
        <div>
          <!-- <span class="open"></span> v-bind:class="(_this.box1 === 1)? 'open':' close ' " -->
          <span :class="activeClass == index ? 'open':''" v-for="(item,index) in itemList" :key="index" @click="getItem(index)"></span>


        </div>
      </li>
      <li @click='qingchu'>清除缓存</li>
      <li>退出登录</li>
    </ul>
  </div>
</template>

<script>
  import '@/assets/css/install.css';
  export default {
    data: {
        activeClass: -1, // 0为默认选择第一个，-1为不选择
        box1: '123456',
    },
    mounted(){
      this.changebut()
    },
    methods: {
      qingchu(){
        var _this = this;
        _this.$net.post({
          url:'clearcatch',
          data:{}
        }).then(res =>{
          _this.qingchu.value = res.data.zhuanfa;
        //console.log(res.message)
        })
      },
      changebut(){
        var _this = this;
            _this.$net.post({
              url:'message',
              data:{
              }
            }).then(res =>{
              _this.box1 = res.data.type;
            })
          console.log(  )
        /*if(_this.message === 0){
              $('.change>span').className('red')
        }else if(_this.message === 1){

        }*/
      }

    }
  }
</script>

