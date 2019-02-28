<template>
  <div @click="dddd">
    {{ message }}
  </div>


</template>

<script>
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

<style scoped>
  .box{ width: 100%;}
  .input{ margin: 0 auto; width: 200px; height: 30px; border: 1px saddlebrown solid }
</style>
