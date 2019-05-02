<template>
  <div class="myContainer2">
    <h1 class="myTitle">姓名</h1>
    <input v-model="user.name" type="text" placeholder="请输入姓名">
    <h1 class="myTitle">联系方式</h1>
    <input v-model="user.call" type="text" placeholder="请输入联系方式">
    <h1 class="myTitle">您要反应的问题</h1>
    <textarea v-model="user.content" placeholder="请输入需要反应的问题" name="" id="" cols="30" rows="10"></textarea>
    <div type="submit" @click="submit" class="submitBut">提交</div>
    <p>客服电话</p>
    <p>{{tel}}</p>
    <!--<p>400-0101-234</p>-->
  </div>
</template>

<script>
  import '@/assets/css/call.css';
  export default {
    data: {
      tel: 0,
      user:{
        name:'',
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
          url:'question',
          data:{
            name:_this.user.name,
            mobile:_this.user.call,
            content:_this.user.content
          }
        }).then(res => {
          //_this.tel = res.data.user
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
        })
      }



    }
  }

</script>
