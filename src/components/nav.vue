<template>
    <div>
        <div class="h130"></div>
        <ul class="nav">
            <li><a @click="rediectTo('/pages/lianxi/main')">
                <img src="../../static/images/nav-index.png" mode="widthFix" alt=""><br/>首页
            </a></li>
            <li><a @click="navigateTo('/pages/classify/main')">
                <img src="../../static/images/nav-classify.png" mode="widthFix" alt=""><br/>分类
            </a></li>
            <li><a>
                <img src="../../static/images/nav-news.png" mode="widthFix" alt=""><br/>消息
            </a></li>
            <li><a @click="navigateTo('/pages/mine/main')">
                <img src="../../static/images/nav-myself.png" mode="widthFix" alt=""><br/>我的
            </a></li>
        </ul>
    </div>
</template>
<script>
    export default {
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
