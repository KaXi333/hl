<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box">
      <b-row align-h = "center">
        <b-col md="4" class="sign-input">
          <h3>注册</h3>
          <div class="input-area">
            <b-form @submit="onSignUp">
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="手机号码" v-model="user.phone">
                </b-form-input>
              </div>
              <div class="form-group form-group1" style="margin-bottom:0;position:relative;">
                    <b-form-input class="input-item" v-model="user.code" required placeholder="验证码">
                    </b-form-input>
                    <p v-show="sendAuthCode" class="phoneCode" @click="getAuthCode">获取验证码</p>
                    <p v-show="!sendAuthCode" class="phoneCode">{{auth_time}}<span> 秒</span></p>
              </div>
              <div class="form-group">
                <b-form-input class="input-item" required type="password" placeholder="密码" v-model="user.password">
                </b-form-input>
              </div>
              <div class="form-group">
                <b-form-input class="input-item" required type="password" placeholder="确认密码" v-model="user.passwordConfirm">
                </b-form-input>
              </div>
              <input  type="submit" name="commit" value="注 册" class="signBtn" data-disable-with="注 册">
            </b-form>
          </div>
          <div class="links-area">
            <span class="help-term-content"> 注册即表示同意 <a target="_blank" href="/terms_of_service">使用条款</a> </span>
            <hr>
            <span class="new-registration-link">已经有帐号？</span><router-link to="/sign_in">登录</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import api from '../../api/index'
// import {ShowDeviseFn} from '../../common/util/util'  

export default {
  data () {
    return {
      user: {
        phone: '',
        password: '',
        passwordConfirm: '',
        code:''
      },
      sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
      auth_time: 0, /*倒计时 计数器*/
    }
  },
  methods: {
     getAuthCode:function () {
      var phoneReg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(!phoneReg.test(this.user.phone)){
          alert("手机格式不正确");
        }else{
          this.sendAuthCode = false;
          this.auth_time = 60;
          var auth_timetimer =  setInterval(()=>{
              this.auth_time--;
              if(this.auth_time<=0){
                  this.sendAuthCode = true;
                  clearInterval(auth_timetimer);
              }
          }, 1000);
          this.$axios({
             method: 'post',
             url: '/sendMobileCode',
             data: {
                 mobile: this.user.phone,
             }
          }).then(res=>{
             console.log(res)
          })
          .catch(err=>{
             console.log(err)
          })
        } 
      },
      onSignUp(evt){
         evt.preventDefault()
         var phoneReg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
         var passReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
         if(!phoneReg.test(this.user.phone)){
            alert("手机格式不正确");
         }else if(!passReg.test(this.user.password)){
            alert("密码由6-16位数字字母组合");
         }else if(this.user.password!=this.user.passwordConfirm){
            alert("两次输入密码不一致");
         }else{
            this.$axios({
                 method: 'post',
                 url: '/register',
                 data: {
                     mobile: this.user.phone,
                     password: this.user.password,
                     password_confirmation:this.user.passwordConfirm,
                     code:this.user.code
                 }
             }).then(res=>{
               console.log(res)
                if(res.data.code === 0){
                  this.$router.push('/sign_in');
                }else{
                  alert('手机验证码错误')
                } 
               // localStorage.setItem('ms_username',this.ruleForm.username);
               // localStorage.setItem("token",res.data.data.token);
             })
             .catch(err=>{
               console.log(err)
             })
         }
      }
    // onSignUp (evt) {
    //   evt.preventDefault()
    //   api.signUp(this.user).then((res) => {
    //     if (res.data.code === 200) {
    //       window.location = '/'
    //     } else {
    //       alert('请输入正确的邮箱和密码')
    //     }
    //   })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    // }
  }
}
</script>

<style scoped>
.phoneCode{
  height:50px;
  font-size:14px;
  line-height:50px;
  margin-bottom:30px;
  background-color:#d33a31; 
  color:#fff;
  border-radius:4px;
  position: absolute;
  width: 100px;
  text-align: center;
  left:304px;
  top:0;
  cursor: pointer;
}
</style>
