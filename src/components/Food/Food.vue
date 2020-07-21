<template>
  <div class="food" v-show="isShow">
    <div class="food-content">
        <div class="image-header">
            <img v-lazy="food.image" alt="">
            <p class="foodpanel-desc">{{food.info}}</p>
            <div class="back" @click="toggleShow">
                <i class="iconfont icon-arrow_left"></i>
            </div>
        </div>
        <div class="content">
            <h1 class="title">{{food.name}}</h1>
            <div class="detail">
                <span class="sell-count">月售{{food.sellCount}}份</span>
                <span class="rating">好评率{{food.rating}}%</span>
            </div>
            <div class="price">
                <span class="now">￥{{food.price}}</span>
                <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
            </div>
            <div class="cartcontrol-wrapper">
            购物车
            </div>
        </div>
    </div>
    <div class="food-cover" @click="toggleShow"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        isShow:false
    }
  },
  props:{
      food: Object
  },

  components: {},

  methods: {
      toggleShow(){
          this.isShow=!this.isShow
      }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 101
    width: 100%
    .food-content
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        background #fff
        width 86%
        height 66%
        z-index 66
        border-radius 5px
        .image-header
            position: relative
            width: 100%
            height: 0
            padding-top: 100%
            img
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
            .foodpanel-desc
                font-size 10px
                color #ddd
                letter-spacing 0
                position absolute
                bottom 0
                left 0
                right 0
                padding 0 0 10px 10px
            .back 
                position absolute
                left 0px
                top 10px
                .icon-arrow_left
                    font-size 20px
                    color #ddd
        .content
            position relative
            padding 18px
            .title
                color rgb(7, 17, 27)
                font-size 14px
                line-height 14px
                font-weight 700
                margin-bottom 5px
            .detail
                height 10px
                line-height 10px
                margin-bottom 15px
                .sell-count
                    font-size 10px
                    margin-right 15px
                    color: rgb(147, 153, 159)
                .rating 
                    font-size 10px  
                    color: rgb(147, 153, 159) 
            .price
                font-weight: 700
                line-height: 24px
                .now
                    margin-right: 8px
                    font-size: 14px
                    color: rgb(240, 20, 20)
            .cartcontrol-wrapper
                position: absolute
                right: 12px
                bottom: 20px 
    .food-cover
        position absolute  
        top 0
        right 0
        bottom -48px
        left 0
        z-index 55
        background-color rgba(0, 0, 0, 0.5) 
</style>