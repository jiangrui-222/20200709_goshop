<template>
  <div>
    <div class="goods">
      <!-- 左侧菜单 -->
      <div class="menu-wrapper" ref="menuWrapper">
        <ul >
          <li class="menu-item" :class="{current : index === currentIndex}" 
              v-for="(good, index) in goods" :key="index" @click="clickMenuItem(index)">
            <span class="text">
              <img class="icon" v-if="good.icon" :src="good.icon" />
              {{good.name}}
            </span>
            <span>1</span>
          </li>         
        </ul>
      </div>
      <!-- 右侧食物列表 -->
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul ref="foodUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index" >
            <h1 class="title">{{good.name}}</h1>
            <ul v-for="(food, index) in good.foods" :key="index" @click="showFood(food)">
              <li class="food-item">
                <div class="icon">
                  <img width="57" height="57" v-lazy="food.icon" alt="">
                </div>
                <div class="content">
                  <h3 class="name">{{food.name}} </h3>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}} 份</span>
                    <span >好评率{{food.rating}}% </span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}} </span>
                    <!-- <span class="old" >￥5</span> -->
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
            
          </li>
        </ul>
      </div>
      <!-- 购物车 -->
      <ShopCart />
    </div>
    <Food :food ="food" ref="food"></Food>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex';
import Food from '../../../components/Food/Food';
import CartControl from '../../../components/CartControl/CartControl';
import ShopCart from '../../../components/shopCart/shopCart'


export default {
  data() {
    return {
        scrollY: 0, // 右侧滑动的Y轴坐标 (滑动过程时实时变化)
        tops: [], // 所有右侧分类li的top组成的数组  (列表第一次显示后就不再变化)
        food: {}, // 需要显示的food

    };
  },
  mounted(){
  
    this.$store.dispatch('getShopGoods',()=>{
      this.$nextTick(()=>{
        //放在 ¥nextTick ，为了解决 .style未定义  报错
        // 列表数据更新显示后执行
        this._initScroll()
        this._initTops()
      })
    })
    
  },
  computed:{ 
    // 初始和相关数据发生了变化
    ...mapState({
      goods: state => state.getShopInfo.goods
    }),

    // 计算得到当前分类的下标
    currentIndex(){
      //数据
      const {scrollY, tops} =this
      //根据条件计算产生一个结果
      // findIndex() 当条件为true时findIndex()返回的是索引值
      const index =tops.findIndex((top,index) =>{
        //scrollY>=当前top && scrollY<下一个top
        return scrollY>=top && scrollY< tops[index+1]
      })
      return index
    }
  },

  methods: {
    //初始化滚动
    _initScroll(){
        // 列表显示之后创建
      let menuScroll = new BScroll('.menu-wrapper',{
          click: true
      })
        this.foodsScroll = new BScroll('.foods-wrapper',{
            probeType:2, //惯性滑动不会触发
            click: true
      })

      // 给右侧列表绑定scroll监听
      this.foodsScroll.on('scroll', ({x, y}) => {
        // console.log(x, y)
        this.scrollY = Math.abs(y)
      })

      // 给右侧列表绑定scroll结束的监听 ；解决 -惯性滑动不触发
      this.foodsScroll.on('scrollEnd', ({x, y}) => {
        // console.log('scrollEnd', x, y)
        this.scrollY = Math.abs(y)
      })
    },
    //初始化tops
    _initTops(){
      // 1. 初始化tops
      const tops = []
      let top = 0
      tops.push(top)
      //2、收集所有 li 对应的高度
      // 找到ul下的所有分类 li
      const lis = this.$refs.foodUl.getElementsByClassName('food-list-hook')
      //console.log(lis) //HTMLCollection(9)
      // Array.prototype.slice.call(arguments)可以理解成是让arguments转换成一个数组对象，让arguments具有slice()方法
      Array.prototype.slice.call(lis).forEach( li =>{
        top += li.clientHeight
        tops.push(top)
      })
      //3、更新数据
      this.tops = tops
      // console.log(tops) //(10) [0, 758, 1072, 1546, 1668, 1886, 2124, 2438, 2944, 3646, __ob__: Observer]
    },

    //点击左侧列表
    clickMenuItem(index){
      // console.log(index) //点击的下标
      this.scrollY = this.tops[index]

      // 平滑滑动右侧列表
      this.foodsScroll.scrollTo(0, -this.scrollY, 300)
    },

    //食物展示
    showFood(food){
      this.food = food
      this.$refs.food.toggleShow()
    }
  },
  components: {
    Food,
    CartControl,
    ShopCart
  },

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    display flex
    position absolute
    top 195px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      font-weight: 700
      .menu-item
        height 54px
        line-height 54px
        padding 0 12px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &.current
          color #02a774
          background #fff
        .text
          font-size 13px
          width: 56px
          vertical-align middle
          .icon 
            width 12px
            height 12px
    .foods-wrapper
      flex 1
      .title
        background #f3f5f7
        padding-left 14px
        font-size: 12px
        color: rgb(147, 153, 159)
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
      .food-item
        display flex
        margin 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        .icon
          margin-right 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            font-size 14px
            color rgb(7, 17, 27)
          .desc,.extra
            font-size 12px
            color rgb(147, 153, 159)
            margin-bottom 8px
          .extra
            .count
              margin-right 12px
          .price
            font-weight: 700
            // line-height: 24px
            .now
              font-size 14px  
              color rgb(240, 20, 20)

          .cartcontrol-wrapper
            position absolute
            right 0
            bottom 10px
</style>