<template>
  <div>
    <div class="shopcart">
        <!-- 底部购物车 -->
        <div class="content" >
            <div class="content-left" @click="toggleShow">
                <div class="logo-wrapper">
                    <div class="logo">
                        <i class="iconfont icon-shopping_cart"></i>
                    </div>
                    <div class="num" v-if="totalCount">{{totalCount}}</div>
                </div>
                <div class="price">¥{{totalPrice}}</div>
                <div class="desc">另需配送费¥{{info.deliveryPrice}}元</div>
            </div>
            
            <div class="content-right">
                <div class="pay" :class="payClass">
                   {{payText}}
                </div>
            </div>
        </div>
        <transition name='move'>
             <!-- 购物车列表 -->
            <div class="shopcart-list" v-show="isShow">
                <div class="list-header">
                    <h1 class="title">购物车</h1>
                    <span class="empty" @click="clearCart">清空</span>
                </div>
                <div class="list-content">
                    <ul>
                        <li class="food" v-for="(food, index) in cartFoods" :key="index">
                            <span class="name">{{food.name}}</span>
                            <div class="price">¥{{food.price}}</div>
                            <div class="cartcontrol-wrapper">
                                <CartControl :food="food" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
       </div>
    <!-- 遮罩 -->
    <div class="list-mask" v-show="isShow" @click="toggleShow"></div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  import BScroll from 'better-scroll'
import {mapState,mapGetters} from 'vuex';
import CartControl from '../CartControl/CartControl'
export default {
  data () {
    return {
        isShow: false
    }
  },
  computed:{
      ...mapGetters([
        //   映射为getter中的totalCount
            'totalCount',
            'totalPrice'
      ]),
      ...mapState({
          info : state => state.getShopInfo.info,
          cartFoods : state => state.getShopCar.cartFoods
      }),

    //样式
    payClass(){
        const {totalPrice} =this
        const {minPrice} = this.info
        
        return totalPrice>=minPrice ? 'enough' : 'not-enough'
    },

    //付款内容
    payText(){
        const {totalPrice} =this
        const {minPrice} = this.info

        if(totalPrice===0){
            return `¥${minPrice}元起送`
        }else if(totalPrice<minPrice){
            return `还差${minPrice-totalPrice}元`
        }
        else{
            return '结算'
        }
    }
    
  },

  components: {
      CartControl
  },

  methods: {

      listShow(){
          console.log(this.totalCount)
          if(this.totalCount===0){
              this.isShow = false
              return false
          }
            return this.isShow

        
      },
      //展示购物车列表
      toggleShow(){
          // 只有当总数量大于0时切换
        if(this.totalCount>0) {
          this.isShow = !this.isShow
            if(this.isShow){
                this.$nextTick(()=>{
                    new BScroll('.list-content',{
                        click:true
                    })
                })
            }
        }else if(this.totalCount===0){
            this.isShow = false
        }
        

      },

      //清空
      clearCart(){
          MessageBox.confirm('确定清空购物车吗?').then(action=>{
              this.$store.dispatch('clearCart')
              this.isShow= false
          },error=>{})
          
      }

  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopcart
    position fixed
    left 0
    bottom 0
    z-index 50
    width 100%
    height 48px
    .content
        display flex
        background #141d27
        font-size 0
        color rgba(255, 255, 255, 0.4)
        .content-left
            flex 1 
            .logo-wrapper
                display inline-block
                position relative
                top -10px
                margin 0 12px
                padding 6px
                width 56px
                height 56px
                box-sizing border-box
                border-radius 50%
                background #141d27
                .logo
                    text-align center
                    width 100%
                    height 100%
                    border-radius 50%
                    background #2b343c
                    .icon-shopping_cart
                        font-size 20px
                        line-height 44px
                        color #80858a 
                .num
                    color #fff 
                    position absolute
                    top 0px
                    right 0px
                    width 24px
                    height 16px
                    line-height 16px
                    text-align center
                    border-radius 16px
                    font-size 9px
                    font-weight 700
                    background rgb(240, 20, 20)
                    box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
            .price
                display inline-block
                vertical-align top
                box-sizing border-box
                margin-top 5px
                padding-right 12px
                line-height 24px
                font-size 16px
                font-weight 700
                color #fff
                &.highlight
                    color #fff
            .desc 
                display inline-block
                vertical-align bottom
                margin-bottom 15px
                margin-left -35px
                font-size 10px

        .content-right
                flex 0 0 105px
                width 105px
                .pay
                    height 48px
                    line-height 48px
                    text-align center
                    font-size 12px
                    color #fff
                    background #00b43c
                    &.not-enough
                        background #2b333b
                    &.enough
                        background #00b43c
                        color #fff
    .shopcart-list
        position absolute
        left 0
        right 0
        top 0px
        background #fff
        z-index -1
        transform translateY(-100%)
        &.move-enter-active, &.move-leave-active
            transition transform .3s
        &.move-enter, &.move-leave-to
            transform translateY(0)
        .list-header
            height 40px
            line-height 40px
            padding 0 18px
            background #f3f5f7
            border-bottom 1px solid rgba(7, 17, 27, 0.1)
            .title
                float left
                font-size 14px
                color rgb(7, 17, 27)
            .empty 
                float right 
                font-size  12px
                color rgb(0, 160, 220)
        .list-content
            padding 0 18px
            overflow hidden
            background #fff
            max-height 217px
            .food
                display  flex
                height 40px
                line-height 40px
                justify-content space-between
                border-bottom 1px solid rgba(7, 17, 27, 0.1)
                .name
                    flex 40%

                    font-size 14px
                    color rgb(7, 17, 27)
                .price 
                    flex 20%
                    font-size 14px
                    font-weight 700
                    color rgb(240, 20, 20)
                .cartcontrol-wrapper
                    bottom 6px
.list-mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 40
    opacity 1
    background rgba(7, 17, 27, 0.6)
</style>