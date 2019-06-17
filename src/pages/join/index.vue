<template>
  <div class="myContainer2 callme">
    <h1 class="myTitle">姓名</h1>
    <input v-model="user.name" type="text" placeholder="请输入姓名">
    <h1 class="myTitle">所在部门</h1>
    <input v-model="user.area" type="text" placeholder="请输入部门">
    <h1 class="myTitle">联系方式</h1>
    <input v-model="user.call" type="text" placeholder="QQ/WX/MOBILE">
    <h1 class="myTitle">备注信息</h1>
    <textarea v-model="user.content" placeholder="请输入需要备注的问题" name="" id="" cols="30" rows="10"></textarea>
    <div type="submit" @click="submit" class="submitBut">提交</div>
  </div>
</template>

<script>
  import '@/assets/css/call.css';
  export default {
    data: {
      tel: 0,
      user:{
        name:'',
        area:'',
        call:'',
        content:''
      }
    },
    mounted(){
      this.callme();
    },
    methods:{
      callme(){
        var _this = this;
        _this.$net.post({
          url: 'tel',
          data: {}
        }).then(res => {
          _this.tel = res.data.kefudianhua;
        })
      },
      submit(){
        var _this = this;
        _this.$net.post({
          url:'question2',
          data:{
            name:_this.user.name,
            mobile:_this.user.call,
            area:_this.user.area,
            content:_this.user.content
          }
        }).then(res => {
          if(!res.status){
            wx.showToast({
              title: res.info,
              icon: 'none',
              duration: 2000
            })
          }else{
            wx.showToast({
              title: res.info,
              icon: 'none',
              duration: 6000
            })
            _this.user = {
              name:'',
              call:'',
              content:''
            }
          }

        })
      }



    }
  }

</script>
