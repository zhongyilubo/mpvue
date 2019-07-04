<template>
  <div>
  <div class="myContainer">
    <ul class="integral mt-25">
      <li  v-for="(item,index) in messages_list" :index="index" :key="key">
        <h1 class="myTitle">{{item.type_name}}</h1>
        <p>{{item.content}}</p>
        <dl class="zt-money gray">
          <dt class="kuan">{{item.created_at}}</dt>
          <dd @click="tiaozhuanqu" :data-id="item.id" class="red">查看详情</dd>
        </dl>
      </li>
      <!--<li>
        <h1 class="myTitle">系统消息</h1>
        <p>尊敬的用户，您于2019年12月21日，成功支付了52. 00元，并获得了，52积分，请在我的积分中查看</p>
        <dl class="zt-money gray">
          <dt class="kuan">201903-31 23:59:59</dt>
          <dd class="red">查看详情</dd>
        </dl>
      </li>-->
    </ul>
    <div v-if="!messages_list.length">
      <p style="text-align: center; line-height: 220rpx;">暂无消息</p>
    </div>
    </div>
    <bottomnav :type="type"></bottomnav>
  </div>
</template>

<script>
  import '@/assets/css/style.css';
  import bottomnav from '@/components/nav.vue';

  export default {
    data: {
      messages_list:[],
        type: 'xiaoxi',
    },
    components: {
        bottomnav
    },
    mounted(){
      this.list();
    },
    methods: {
      list(){
        var _this = this;
        _this.$net.post({
          url: 'message/lists',
          data: {}
        }).then(res => {
          _this.messages_list = res.data
        })
      },
      tiaozhuanqu(e){

        var id = e.currentTarget.dataset.id;

        wx.navigateTo({
          url: '/pages/message/main?id='+ id
        })
      }

    }
  }
</script>

