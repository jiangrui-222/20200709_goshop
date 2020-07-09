<template>
  <div class="search">
    <header-top title="搜索"></header-top>

    <form class="search_form" action="">
      <input class="search_input" type="search" placeholder="请输入商家或美食名称">
      <input class="search_submit" type="submit"></input>
    </form>
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
.search
  width 100% 
  .header
    background-color #02a774
    position fixed
    left 0
    top 0
    width 100%
    height 45px
    z-index 100
    .header_title
      position absolute
      top 50% 
      left 50% 
      transform translate(-50%, -50%)
      .header_title_text
        font-size 20px
        color #fff
  .search_form
    margin-top 45px
    background-color #ffffff
    padding 12px 8px
    input 
      height 35px
      border-radius 2px
      padding 0 4px
      font-weight bold
      outline none
      &.search_input
        border 4px solid #f2f2f2
        float left
        width 79% 
        font-size 14px
        color #333
        background-color #f2f2f2
      &.search_submit
        float right 
        width 18%
        background-color #02a774
        font-size 16px
        color #fff
</style>