<template>
  <div class="gray-back">
    <ul class="myContainer2 classify">
      <!--<li class="red-back">器械类</li>-->
      <li v-for="(item, index) in category" :index="index" :key="key">{{item.name}}</li>
    </ul>
  </div>

</template>

<script>
  import '@/assets/css/classify.css';
  export default {
    data: {
      category: []
    },
    mounted(){
        var _this = this;

        _this.$net.post({
            url: 'category',
            data: {}
        }).then(res => {
            _this.category = res.data;
        })
    },
    methods: {
      dddd(){
        this.message = 'asdfsadfsdaf'
      }
    }
  }
</script>

