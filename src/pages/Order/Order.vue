<template>
  <div class="order">
    <header-top title="订单"></header-top>
    
    <section class="order_no_login">
      <img src="./order/person.png" alt="">
      <h3>登录后查看外卖订单</h3>
      <button>立即登陆</button>
    </section>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop';

export default {
  data () {
    return {
    }
  },

  components: {
    HeaderTop
  },

  methods: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.order
  width 100% 
  .header
    background-color #02a774
    position fixed
    top 0
    left 0
    right 0
    height 45px
    z-index 100
    .header_title
      position absolute
      top 50% 
      left 50% 
      transform translate(-50%,-50%)
      .header_title_text
        font-size 20px
        color #ffffff
  .order_no_login
    padding-top 140px
    width 60% 
    margin 0 auto
    text-align center
    >img 
      width 100% 
      height 30%
    >h3 
      padding 10px 0
      font-size 17px
      color #6a6a6a
    >button 
      // display inline-block
      background #02a774
      font-size 14px
      color #fff
      border 0
      outline none
      border-radius 5px
      padding 10px 20px

</style>