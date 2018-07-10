<template>
  <div class="navbar__wrapper navbar__wrapper-transform" :class="{isShowColorActive:isShowColor}">
   <div class="ui text container navbar__content">
    <div class="navbar__item__left">
     <div class="navbar__item" @click="goHomeBtn">
      <a><img src="../common/images/logo@2x.png" alt="Etheremon Logo" /></a>
     </div>
     <div class="widget__dropdown m--mobile-only widget__dropdown__left">
      <div class="widget__dropdown__content">
       <div class="navbar__item">
        介绍 
        <i aria-hidden="true" class="angle down icon"></i>
       </div>
      </div>
     </div>
     <div v-for="(item,index) in steps" :key="item" @click="goSteps(index)" class="navbar__item m--computer-only">
      <a href="javascript:"><span class="">{{item}}</span></a>
     </div>
    <!--  <div class="navbar__item m--computer-only">
      <a href="#/#advisors"><span class="">顾问</span></a>
     </div>
     <div class="navbar__item m--computer-only">
      <a href="#/referral"><span class="m--noti">转介</span></a>
     </div> -->
     <!-- <div class="widget__dropdown m--computer-only widget__dropdown__left">
      <div class="widget__dropdown__content">
       <div class="navbar__item">
        <span @click="dropMenuFn" class="">指南<i aria-hidden="true" class="angle down icon"></i> 
        </span>
       </div>
      </div>
      <div class="widget__dropdown__list" :class="{'open': isShowGuide}">
       <div class="widget__dropdown__item ">
        <a class="navbar__text" href="#/#getting-started"><span class="">准备开始</span></a>
       </div>
       <div class="widget__dropdown__item ">
        <a href="https://medium.com/@myetheremon/%E4%BB%A5%E5%A4%AA%E5%AE%9D%E8%B4%9D-%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E7%9A%84%E4%BB%A5%E5%A4%AA%E5%85%BD%E4%B8%96%E7%95%8C-6b255949bdeb" class="navbar__text" target="_blank"><span class="">教程博客</span></a>
       </div>
       <div class="widget__dropdown__item ">
        <a href="https://www.youtube.com/watch?v=MGHJUvJgpkM&amp;list=PLwWJkswot6gMaQ018T0NGiUJb7PEkQ-4m&amp;index=0" class="navbar__text" target="_blank"><span class="">教程视频</span></a>
       </div>
      </div>
     </div> -->
     <div class="widget__dropdown m--computer-only widget__dropdown__left">
      <div class="widget__dropdown__content">
       <div class="navbar__item">
        <span @click="dropMenuFn2" class="">游戏玩法 <i aria-hidden="true" class="angle down icon"></i></span>
       </div>
      </div>
      <div class="widget__dropdown__list " :class="{'open': isShowGuide2}">
       <div v-for="(item,index) in detailPages" :key="item.id" class="widget__dropdown__item " @click="goDetailPageFn">
        <a class="navbar__text"><span class="">{{item}}</span></a>
       </div>
       <!-- <div class="widget__dropdown__item ">
        <a class="navbar__text"><span class="">获得小猪</span></a>
       </div>
       <div class="widget__dropdown__item ">
        <a class="navbar__text"><span class="">基因遗传</span></a>
       </div>
       <div class="widget__dropdown__item ">
        <a class="navbar__text"><span class="">交配事项</span></a>
       </div>
       <div class="widget__dropdown__item ">
        <a class="navbar__text"><span class="">农场主等级</span></a>
       </div>
       <div class="widget__dropdown__item ">
        <a class="navbar__text"><span class="">场景介绍</span></a>
       </div>
       <div class="widget__dropdown__item ">
        <a class="navbar__text"><span class="">养殖种类</span></a>
       </div> -->
      </div>
     </div>
    </div>
    <div class="navbar__item__right">
     <div v-show="isShowuserFn" class="navbar__item m--pointer" @click="toLogin">
      <a>登录</a>
     </div>
     <div v-show="isShowuserFn" class="navbar__item m--pointer" @click="toRegister">
      <a>注册</a>
     </div>
     <div v-show="!isShowuserFn" class="navbar__item m--pointer">
      <a>{{isShowuserFn}}</a>
     </div>
     <div v-show="!isShowuserFn" class="navbar__item m--pointer" @click="loginOutFn">
      <a>退出</a>
     </div>
     <!-- <div class="navbar__item">
      <div class="widget__dropdown  widget__dropdown__right">
       <div class="widget__dropdown__content">
        <i class="cn flag"></i> zh
       </div>
       <div class="widget__dropdown__list ">
        <div class="widget__dropdown__item ">
         <span class="navbar__text"><i class="gb flag"></i> en</span>
        </div>
        <div class="widget__dropdown__item ">
         <span class="navbar__text"><i class="kr flag"></i> ko</span>
        </div>
        <div class="widget__dropdown__item ">
         <span class="navbar__text"><i class="jp flag"></i> ja</span>
        </div>
        <div class="widget__dropdown__item ">
         <span class="navbar__text"><i class="cn flag"></i> zh</span>
        </div>
        <div class="widget__dropdown__item ">
         <span class="navbar__text"><i class="vn flag"></i> vi</span>
        </div>
        <div class="widget__dropdown__item ">
         <span class="navbar__text"><i class="th flag"></i> th</span>
        </div>
        <div class="widget__dropdown__item ">
         <span class="navbar__text"><i class="fr flag"></i> fr</span>
        </div>
       </div>
      </div> -->
     </div>
    </div>
   </div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {ShowDeviseFn} from '../common/util/util'
export default {
  data () {
    return {
      isShowGuide2:false,
      isShowColor:false,
      isShowSign:true,
      steps:[
        '介绍',
        '蓝图',
        '兑换商城',
        '伙伴'
      ],
      detailPages:[
        '创建小号',
        '获得小猪',
        '基因遗传',
        '交配事项',
        '农场主等级',
        '交配事项',
        '场景介绍',
        '养殖种类'
      ]
    }
  },
  created() {
   //监听状态
    this.$root.$on('isShowColorFn', function(isShowColor) {
      this.isShowColor=isShowColor
    }.bind(this))
  },
  computed:{
    //判断用户是否登录状态
    isShowuserFn(){
      if(store.state.token){
        this.isShowSign=false
      }else{
        this.isShowSign=true
      }
      return this.isShowSign
    }
  },
  methods:{
    dropMenuFn2(){
      this.isShowGuide2=!this.isShowGuide2
    },
    // 添加锚点滚动
    goSteps(index){
      this.$root.$emit('scrollFn',index);
    },
    // 回到顶部
    goHomeBtn(){
      this.$router.push('/')
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    // 在组件销毁时解除事件绑定
    beforeDestroy() {
      this.$root.$off('isShowColorFn')
    },
    // 登录
    toLogin(){
      location. reload();
      this.$router.push('/sign_in');
      this.isShowColor=false
    },
    // 注册
    toRegister(){
      location. reload();
      this.$router.push('/sign_up');
      this.isShowColor=false
    },
    // 退出
    loginOutFn(){
      this.$store.commit('removetoken');//清楚token
      this.$store.commit('removeMerchant');//清除isMerchant
      this.$router.push('/sign_in');
    },
    // 跳转到详情
    goDetailPageFn(){

    }
    // toHmoe(){
    //   this.$router.push('/');
    // },
    // topersonCenbtn(){
    //   if(store.state.isMerchant==2){
    //     this.$router.push('/personal');
    //   }else if(store.state.isMerchant==1){
    //     this.$router.push('/personalSeller');
    //   }
    // },
    // searchBtn(){
    //   this.$router.push({
    //     path:'search',
    //     name:'search',
    //     params:{
    //       searchKeyword:this.searchKeyword
    //     }
    //   });
    //   this.$root.$emit('searchBtn',this.searchKeyword);
    // },
    // //退出登录
    // loginOutFn(){
    //   this.$store.commit('removetoken');//清楚token
    //   this.$store.commit('removeMerchant');//清除isMerchant
    //   this.$router.push('/sign_in');
    // }
  }
}
</script>

<style scoped>
  .isShowColorActive{
    background-color:transparent!important;
    
  }
  .isShowColorActive .navbar__content .navbar__item,.isShowColorActive .navbar__content .navbar__item a{
    color:#fff!important;
  }
  .isShowColorActive .navbar__item:hover,.isShowColorActive .navbar__item:hover a {
  color:#5488ed!important
}
</style>
