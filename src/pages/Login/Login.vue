<template>
  <section class="loginContainer">
      <div class="loginInner">
          <a class="go_back" href="javascript:" @click="$router.back()">
            <i class="iconfont icon-jiantou2"></i>
          </a>
          <div class="login_header">
              <h2 class="login_logo">外卖</h2>
              <div class="login_header_title">
                  <a  :class="{on:loginWay}" href="javascript:" @click="loginWay =true">短信登录</a>
                  <a  :class="{on:!loginWay}" href="javascript:" @click="loginWay =false">账号登录</a>
              </div>
          </div>
          <div class="login_content">
              <form  @submit.prevent="login">
                  <div v-show="loginWay">
                      <section class="login_message">
                          <input type="tel" maxlength='11' placeholder="请输入手机号" v-model="phone">
                          <button class="get_verification" :class="{right_phone : rightPhone}" @click.prevent="getCode">
                            {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}  
                          </button>
                      </section>
                      <section class="login_verification">
                          <input type="secret" placeholder="验证码" v-model="code">
                      </section>
                      <section class="login_hint">
                         温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                         <a href="javascript:;">《用户服务协议》</a>
                      </section>
                  </div>

                  <div v-show="!loginWay">
                      <section class="login_message">
                          <input type="tel" maxlength='11' placeholder="邮箱/用户名" v-model="name">
                      </section>
                      <section class="login_verification">
                          <input type="text" maxlength=‘8’ placeholder="密码（数字或字母，不少于6位）" v-if="showPwd" v-model="pwd">
                          <input type="password" maxlength="8" placeholder="密码（数字或字母，不少于6位）" v-else v-model="pwd">
                          <div class="switch_button" @click="showPwd =!showPwd" :class="showPwd ? 'on' : 'off'"> 
                              <div class="switch_circle" :class="showPwd ? 'on' : 'off'"></div>
                              <span class="switch_text" >on </span>
                          </div>
                      </section>
                      <section class="login_message">
                          <input type="secret" placeholder="验证码" v-model="captcha">
                          <img class="get_verification" ref="captcha" src="http://192.168.1.2:4000/captcha" alt="captcha" @click="getCaptcha">
                      </section>
                  </div>
                <button class="login_submit">登录</button>

              </form>
            <a href="javascript:;" class="about_us">关于我们</a>
          </div>
      </div>
  </section>
</template>

<script>
import {reqSendCode,reqPwdLogin,reqSmsLogin} from '../../api';
import {MessageBox} from 'mint-ui';
export default {
  data () {
    return {
        loginWay: true ,//true是短信登录，false是账号登录
        showPwd: false, // 是否显示密码
        name:'',//用户名
        pwd:'', //密码
        captcha:'',//图形验证码
        phone:'', //手机号
        code:'', //手机验证码
        computeTime: 0, // 计时的时间
        

    }
  },
    // 验证码的类名 right_phone  依据 phone  
  computed:{
      rightPhone(){
          return /^1\d{10}$/.test(this.phone)
      }
  },


  components: {},

  methods: {
      //获取短信验证码
     async getCode(){
            // 手机号 存在时有倒计时
            if(this.rightPhone){
                //如果计时为0 时，开始
                if(!this.computeTime){
                    this.computeTime = 60
                    const setInterId = setInterval(()=>{
                        this.computeTime--
                        if(this.computeTime==0){
                            clearInterval(setInterId)
                        }
                    },1000)
                }
            }
            
            //发送 手机短信验证码 请求
             const result =await reqSendCode(this.phone)
            console.log('手机短信验证码',result)
            //停止计时


      },
      //登录
      async login(){
            if(this.loginWay){
               // 短信登录
                const {rightPhone, phone,code} =this
                if(!rightPhone){
                    //手机号不正确
                    MessageBox.alert('手机号不正确').then(action => {
                        console.log(1123)
                    }).catch(()=>{});
                    return
                }else if(!/^\d{6}$/.test(code)){
                    //验证码不正确
                    MessageBox.alert('验证码不正确').then(action => {

                    }).catch(()=>{})
                    return
                }
                console.log(phone,code)

                //发送 短信登录 请求
                let result = await reqSmsLogin(phone, code)
                console.log('短信登录',result)

            }else{
                //账号登录
                const {name,pwd,captcha} =this
                if(!name){
                    //用户名验证
                    MessageBox.alert('用户名不能为空').then(action => {
                    }).catch(()=>{});
                }else if(!/^[a-zA-Z0-9]{6,}$/.test(pwd)){
                    //密码验证
                    MessageBox.alert('必须为数字或字母，至少6位！').then(action => {
                    }).catch(()=>{});
                }else if(!this.captcha){
                    //验证码验证
                    MessageBox.alert('验证码不能为空').then(action => {
                        
                    }).catch(()=>{});
                }
                //发送 账号登录 请求
                // console.log(this.captcha)
                let result = await reqPwdLogin({name, pwd, captcha})
                console.log('账号登录',result)
            }
            
                //
                if(result.code===0){
                    // 去个人中心界面
                    this.$router.replace('/profile')
                }else{
                    // 显示新的图片验证码
                    this.getCaptcha()
                }
        },

        //点击请求 图片验证
        getCaptcha(){
            // 每次指定的src要不一样
            this.$refs.captcha.src = 'http://192.168.1.2:4000/captcha?time='+ Date.now()
            console.log('111',this.captcha)

        }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.loginContainer
    width 100% 
    height 100% 
    background #fff 
    .loginInner
        // background #ccc
        width 80% 
        padding-top 60px
        margin 0 auto
        .go_back
            position absolute
            top 10px
            left 10px
            width 30px
            height 30px
            >.iconfont
                font-size 20px
                color #999
        .login_header
            width 100% 
            .login_logo
                font-size 28px
                font-weight bold
                color #02a774
                text-align center
            .login_header_title
                padding-top 40px
                text-align center
                >a
                    color #333 
                    font-size 14px
                    padding-bottom 4px
                    &:first-child
                        margin-right 10px
                    &.on 
                        color #02a774
                        font-weight 700
                        border-bottom 2px solid #02a774
        .login_content
            >form
                >div
                    // display none
                    &.on
                        display block
                    input 
                        width 100% 
                        height 100% 
                        padding-left 10px
                        box-sizing border-box
                        border 1px solid #ddd
                        border-radius 4px 
                        outline 0
                        font 400 14px Arial   
                    .login_message
                        position relative
                        margin-top 16px
                        height 48px
                        font-size 14px
                        background #fff 
                        .get_verification
                            position absolute
                            top 50% 
                            right 10px
                            transform translateY(-50%)
                            border 0
                            background transparent
                            color #ccc
                            font-size 14px
                            &.right_phone
                                color black
                    .login_verification
                        position relative
                        margin-top 16px
                        height 48px
                        font-size 14px
                        background #fff 
                        .switch_button
                            font-size 12px
                            border 1px solid #ddd
                            border-radius 8px
                            transition background-color .3s,border-color .3s
                            padding 0 6px
                            width 30px
                            height 16px
                            line-height 16px
                            color #fff
                            position absolute
                            top 50%
                            right 10px
                            transform translateY(-50%)
                            &.on 
                                background   #02a774
                            >.switch_circle
                                position absolute
                                border 1px solid #ddd 
                                width 16px
                                height 16px
                                border-radius 8px
                                top -1px
                                left -1px
                                background #fff 
                                &.on 
                                    transform translateX(30px)

                    .login_hint
                        font-size 13px
                        color #999
                        margin-top 16px
                        line-height 20px
                        >a
                            color #02a774
                .login_submit
                    width 100% 
                    height 48px
                    background #4cd96f
                    color #ffffff
                    font-size 16px
                    text-align center
                    border 0
                    border-radius 4px
                    margin-top 16px
            .about_us
                display block
                margin-top 16px
                font-size 14px
                color #999
                text-align center



</style>