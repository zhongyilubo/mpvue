<template>
  <div>
    <ul class="install-list">
      <li class="change">消息通知
        <div :class="isopen ? '':'bggray'">
          <!-- <span class="open"></span> v-bind:class="(_this.box1 === 1)? 'open':' close ' " -->
          <span :class="isopen ? 'open':''"  @click="changestatus"></span>


        </div>
      </li>
      <li @click='qingchu'>清除缓存</li>
      <li @click='logout'>退出登录</li>
    </ul>
  </div>
</template>

<script>
  import '@/assets/css/install.css';
  export default {
    data: {
      activeClass: -1, // 0为默认选择第一个，-1为不选择
      isopen: 0,
    },
    mounted(){
      this.changebut()
    },
    methods: {
        logout(){
            wx.redirectTo({
                url: '/pages/lianxi/main'
            })
        },
      qingchu(){
        var _this = this;
        _this.$net.post({
          url:'clearcatch',
          data:{}
        }).then(res =>{
          _this.qingchu.value = res.data.zhuanfa;
        //console.log(res.message)
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        })
      },
      changestatus(){
        var _this = this;
        var yyy = _this.isopen;
        if(yyy == 0){
          yyy = 1
        }else{
          yyy=0
        }
        _this.$net.post({
          url:'message/change',
          data:{
            type:yyy
          }
        }).then(res =>{
          _this.isopen = yyy;
        })
      },
      changebut(){
        var _this = this;
            _this.$net.post({
              url:'message',
              data:{
              }
            }).then(res =>{
              _this.isopen = res.data.type;
            })
          console.log(  )
      }

    }
  }
</script>

