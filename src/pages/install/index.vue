<template>
  <div>
    <ul class="install-list">
      <li class="change">消息通知<div><span class="open"></span></div></li>
      <li>清除缓存</li>
      <li>退出登录</li>
    </ul>
  </div>
</template>

<script>
  import '@/assets/css/install.css';
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

