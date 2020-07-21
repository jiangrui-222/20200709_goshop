<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  
  props:{
      food : Object
  },
  created(){
      window
  },

  methods: {
      updateFoodCount(isAdd){
        //   console.log(this.food)
        // if(isAdd){
        //     if(!this.food.count){
        //         Vue.set(this.food,'count',1)
        //     }else{
        //         this.food.count++
        //     }
        // }else{
        //     this.food.count--
        // }
        this.$store.dispatch('updateFoodCount',{isAdd,food:this.food})
      }
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size 0
    .icon-remove_circle_outline
        display inline-block
        padding 6px
        line-height 24px
        font-size 24px
        color #02a774
        &.move-enter-active,&.move-leave-active
          transition all .3s
        &.move-enter,&.move-leave-to
          opacity 0
          transform translateX(15px) rotate(180deg)
    .cart-count
        display inline-block
        width 12px
        font-size 10px
        line-height 24px
        text-align center
        vertical-align top
        padding-top 6px
        color rgb(147, 153, 159)
        
    .icon-add_circle
        display inline-block 
        line-height 24px
        font-size 24px
        color #02a774  
        padding: 6px

</style>