<template>
  <div>
    <div class="myContainer">

      <!-- 最新视频 -->
      <video id="myvideo" class="details" :src="video" @timeupdate="videorun" @play="startrun" controls></video>
      <div class="mb-25">
          <h1 class="myTitle">{{name}}</h1>
          <div class="zt-money gray">{{teacher}}<span class="red display-inline ml-10">{{type_name}}</span></div>
          <dl class="zt-money gray">
            <dt class="kuan"><span>{{number}}</span>次播放<span>{{date}}</span> <span>{{timer}}</span></dt>
            <dd class="red">{{pay_view}}</dd>
            <dd></dd>
          </dl>
      </div>


      <h1 class="myTitle b-b">评论</h1>
      <ul class="video-comment">
        <li v-if="false">
          <div class="video-comment-img"></div>
          <div class="video-comment-font">
            <div>
              <span>毛豆花生</span>
              <span class="red">回复</span>
              <span>花生毛豆</span>
            </div>
            <div class="zt-money gray">201912-31  23:29:59</div>
            <p>视频不错，学到了很多东西，感谢老师，老师辛苦了。</p>
            <dl>
              <dt><i class="fabulous fabulous-red"></i>94</dt>
              <dd class="red">回复</dd>
            </dl>
          </div>
        </li>
        <li>
          <div></div>
          <div class="video-comment-font">
            <div></div>
            <div class="zt-money gray"></div>
            <p>暂无评论</p>
          </div>
        </li>
      </ul>

    </div>
    <bottomnav></bottomnav>
  </div>
</template>

<script>
  import '@/assets/css/style.css';
  import bottomnav from '@/components/nav.vue';
  export default {
      data: {
          id: 0,
          name: '',
          type_name: '',
          type: '',
          video: '',
          number: '',
          teacher: '',
          date: '',
          timer: '',
          intro: '',
          pay: 2,
          pay_name: '',
          pay_view: '',
          sons: '',
          cover: '',
          title:'中推在线',
          ispay:0,
          isshare:0,
      },
    components: {
        bottomnav
    },
    mounted(){
        var _this = this;

        this.id = this.getQuery().id;//接收这个参数 jq mpvue接收的方式不一样

        _this.$net.post({
            url: 'sku/detail/'+_this.id,
            data: {}
        }).then(res => {
            _this.name = res.data.name;
            _this.type_name = res.data.type_name;
            _this.type = res.data.type;
            _this.teacher = res.data.teacher;
            _this.name = res.data.name;
            _this.number = res.data.number;
            _this.date = res.data.date;
            _this.timer = res.data.timer;
            _this.video = res.data.video;
            _this.intro = res.data.intro;
            _this.pay = res.data.pay;
            _this.pay_name = res.data.pay_name;
            _this.pay_view = res.data.pay_view;
            _this.sons = res.data.sons;
        })

        this.videoCtx = wx.createVideoContext('myvideo', this)

    },
    methods: {
      getQuery() {
          /* 获取当前路由栈数组 */
          const pages = getCurrentPages()
          const currentPage = pages[pages.length - 1]
          const options = currentPage.options
          return options
      },
    }
  }
</script>

