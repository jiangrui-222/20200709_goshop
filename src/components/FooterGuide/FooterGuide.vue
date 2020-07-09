<template>
  <div class="footer_guide"> 
    
      <router-link to='/msite' tag="span"  >
        <i class="iconfont icon-waimai"></i>
        <p>外卖</p>
      </router-link>  
      <router-link to="/search" tag="span"  >
        <i class="iconfont icon-search"></i>
        <p>搜索</p>
      </router-link>  
      <router-link to="/order" tag="span"  >
        <i class="iconfont icon-dingdan"></i>
        <p>订单</p>
      </router-link> 
      <router-link to="/profile" tag="span"  >
        <i class="iconfont icon-geren"></i>
        <p>我的</p>
      </router-link>   
  
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    bottom  0px
    left  0
    right  0
    z-index 100
    width 100%
    height 50px
    background-color #fff
    display flex
    color #999999
    span
      display flex
      flex 1
      flex-direction column 
      align-items center
      margin 5px
      &.router-link-active 
        color #02a774; 
      p
        margin-top 2px
        font-size 12px
      .iconfont
        font-size 22px
        margin-top 2px


</style>