<template>
  <div class="container1" id="container" @click="full">
    <img src="../common/images/12030.png" class="video_button">
    <div class="player">
      <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="false"
                     :options="playerContent[nowIndex]"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)">
      </video-player>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player';
export default {
   props: {
    playerContent: {
      type: Array,
      default: [],
    },
  },
  data:function() {
    return {    
      nowIndex:0,
    }
  },
  components: {
    videoPlayer
  },
  created() {
   //监听状态
    this.$root.$on('isShowVideoFn', function(isShowVideo) {
      if(isShowVideo){
        this.player.play()
      }else{
        if(!this.player.isFullscreen()){
          this.player.pause()
        }
      }
    }.bind(this))
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    onPlayerPlay(player) {
      if(this.player.isFullscreen()){
        this.player.play()
      }
    },
    onPlayerPause(player){
      if(this.player.isFullscreen()){
        this.player.pause()
      }
    },
    full(){
      if(!this.player.isFullscreen()){  
         this.player.requestFullscreen();  
         this.player.isFullscreen(true);
         this.player.play()  
       }
    },
    // 在组件销毁时解除事件绑定
    beforeDestroy() {
      this.$root.$off('isShowVideoFn')
    },
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  .container {
    min-height: 100%;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  .container1 {
    min-height: 100%;
  }
  .video-js .vjs-big-play-button{
     /*
      播放按钮换成圆形
     */
    height: 2em;
    width: 2em;
    line-height: 2em;
    border-radius: 1em;
  }
  #container{
      width:100%;
      height:600px;
      position: relative;
  }
  .video_button{
    position: absolute;
    width: 99px;
    height:97px;
    border-radius: 50%;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    margin:auto;
    z-index: 1000;
  }
</style>