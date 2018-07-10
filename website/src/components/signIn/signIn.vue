<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box">
      <b-row align-h = "center">
        <b-col md="4" class="sign-input">
          <h3>登录</h3>
          <div class="input-area">
            <b-form @submit="onSignIn">
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="手机号码" v-model="user.phone">
                </b-form-input>
              </div>
              <div class="form-group">
                <b-form-input class="input-item" required type="password" placeholder="密码" v-model="user.password">
                </b-form-input>
              </div>
              <div class="form-group" style="position:relative;">
                <b-form-input class="input-item" required placeholder="验证码" v-model="user.code">
                </b-form-input>
                <div class="code" @click="refreshCode">
                  <identify :identifyCode="identifyCode" :contentWidth="contentWidth" :contentHeight="contentHeight"></identify>
                </div>
              </div>
              <input type="submit" name="commit" value="登 录" class="signBtn" data-disable-with="登 录">
            </b-form>
          </div>
          <div class="links-area">
            <span class="new-password-link" @click="toEdPassword"><a>忘记密码</a></span>
            <hr>
            <span class="new-registration-link"> 还没有帐号？</span><router-link to="/sign_up">注册</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import identify from '../base/identify'
import store from '@/vuex/store'
export default {
  components:{
    identify
  },
  data () {
    return {
      identifyCodes:"1234567890",
      identifyCode:'',
      identifyCodevalue:"",
      contentWidth:120,
      contentHeight:50,

      user: {
        phone: '',
        password: '',
        code:''
      }
    }
  },
  mounted(){
    this.identifyCode="",
    this.makeCode(this.identifyCodes,4)
  },
  methods: {
    // 验证码
    randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode(){
      this.identifyCode="",
      this.makeCode(this.identifyCodes,4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
        this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode)
    },
    // 忘记密码
    toEdPassword(){
      this.$router.push('/editPassword');
    },
    // 登录
    onSignIn (evt) {
      evt.preventDefault()
      console.log(this.user.code)
      if(this.user.code!=this.identifyCode){
        alert('验证码错误')
      }else{
        this.$axios({
           method: 'post',
           url: '/oauth',
           data: {
              mobile: this.user.phone,
              password: this.user.password
           }
        }).then(res=>{
          console.log(res)
        if(res.data.code === 0){
          this.$router.push('/');
          this.$store.commit('changetoken',res.data.data.token);
          this.$store.commit('changeMerchant',res.data.data.nickname);
        }else{
          alert('请输入正确的手机和密码')
        } 
        })
        .catch(err=>{
         console.log(err)
        })
      }
    }
  }
}
</script>

<style scoped>
.code{
  position: absolute;
  left:284px;
  top:0;
  cursor: pointer;
}
 .links-area{
  margin-top:15px;
 } 
</style>
