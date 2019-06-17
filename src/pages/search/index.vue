<template>
    <div>
        <div v-if="!version" style="text-align: center;">
            <img src="/static/images/tippp.png">
        </div>
        <div class="myContainer" v-if="version">
            <!-- 搜索 -->
            <div>
                <input v-model="searchs" @blur="change" class="inp-search" type="text"><span @click="quxiaoback">{{textview}}</span>
            </div>

        </div>
    </div>
</template>

<script>
  import '@/assets/css/style.css';
  export default {
    data: {
        textview: '取消',
        searchs:'',
        version: null

    },

    mounted(){
        this.version = mpvue.getStorageSync('version') || null
    },
    methods: {
        change(){
            if(this.searchs){
                wx.navigateTo({
                    url: '/pages/goods/main?key='+this.searchs
                })
            }
        },
        quxiaoback(){
            wx.navigateBack({
                delta: 1
            })
        }
    }
  }

</script>
<style>
    input{
        width: 85%;
    }
    span{
        width: 15%;
        display: inline-block;
        float: right;
        height: 70rpx;
        line-height: 70rpx;
        top: 0;
        font-size: 16px;
        color: #D2170E;
        text-align: center;
    }
</style>