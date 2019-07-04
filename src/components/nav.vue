<template>
    <div>
        <div class="h130"></div>
        <ul class="nav">
            <li><a @click="rediectTo('/pages/index/main')">
                <img v-if="type != 'shouye'" src="../../static/images/nav-index.png" mode="widthFix" alt="">
                <img v-if="type == 'shouye'" src="../../static/images/nav-index2.png" mode="widthFix" alt=""><br/>首页
            </a></li>
            <li><a @click="rediectTo('/pages/classify/main')">
                <img v-if="type != 'zhuanlan'" src="../../static/images/nav-classify.png" mode="widthFix" alt="">
                <img v-if="type == 'zhuanlan'" src="../../static/images/nav-classify2.png" mode="widthFix" alt=""><br/>专栏
            </a></li>
            <li><a @click="rediectTo('/pages/message-list/main')">
                <img v-if="type != 'xiaoxi'" src="../../static/images/nav-news.png" mode="widthFix" alt="">
                <img v-if="type == 'xiaoxi'" src="../../static/images/nav-news2.png" mode="widthFix" alt=""><br/>消息
            </a></li>
            <li><a @click="rediectTo('/pages/mine/main')">
                <img v-if="type != 'wode'" src="../../static/images/nav-myself.png" mode="widthFix" alt="">
                <img v-if="type == 'wode'" src="../../static/images/nav-myself2.png" mode="widthFix" alt=""><br/>我的
            </a></li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:['type'],
        methods: {
            rediectTo(url) {
                wx.redirectTo({
                    url: url
                })
            },
            navigateTo(url){
                wx.navigateTo({
                    url: url
                })
            }
        }
    }
</script>
