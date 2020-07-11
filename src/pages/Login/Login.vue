<template>
  <section class="loginContainer">
      <div class="loginInner">
          <a class="go_back" href="javascript:" @click="$router.back()">
            <i class="iconfont icon-jiantou2"></i>
          </a>
          <div class="login_header">
              <h2 class="login_logo">外卖</h2>
              <div class="login_header_title">
                  <a  class="on" href="javascript:">短信登录222</a>
                  <a  href="javascript:">密码登录</a>
              </div>
          </div>
          <div class="login_content">
              <form action="">
                  <div>
                      <section class="login_message">
                          <input type="tel" maxlength='11' placeholder="请输入手机号">
                          <button class="get_verification">获取验证吗</button>
                      </section>
                      <section class="login_verification">
                          <input type="secret" placeholder="验证码">
                      </section>
                      <section class="login_hint">
                         温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                         <a href="javascript:;">《用户服务协议》</a>
                      </section>
                  </div>
                  <div>

                  </div>
                <button class="login_submit">登录</button>

              </form>
            <a href="javascript:;" class="about_us">关于我们</a>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  methods: {}
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
                            font-size 14px
                    .login_verification
                        position relative
                        margin-top 16px
                        height 48px
                        font-size 14px
                        background #fff 
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