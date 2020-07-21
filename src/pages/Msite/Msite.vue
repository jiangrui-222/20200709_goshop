<template>
  <div class="msite">
    <!-- 首页头部 -->
    <header-top :title="address.name">
      <router-link class="header_search" slot="left" to='/search'>
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" to='/login'>
        <span class="header_login_text ">登录/注册</span>
      </router-link>
    </header-top>
    
    <!-- 首页轮播 -->
    <!-- <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr " :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index"> 
              <div class="food_container">
                <img src="./nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
           
          </div>
          
        </div>
        <!-- 导航圆点 -->
        <div class="swiper-pagination"></div>
        
      </div>
    </nav> -->
    <!-- 附近商家 -->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"> </i>
        <span class="shop_header_title">附件商家</span>
      </div>
      <shop-list/>
    </div>
  </div>
</template>


<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import shopList from '../../components/shopList/shopList';
import {reqAddress,reqFoodCategorys} from '../../api/index';

export default {
  data () {
    return {
      // latitude: 40.10038, // 纬度  
      // longitude: 116.36867, // 经度
      latitude: 31.301322, // 纬度  芭菲经纬度： 120.772321,31.301322
      longitude: 120.772321, // 经度
      address:'' ,//地址
      categorysArr :[],
      categorys:[]
    }
  },
  computed:{
  },
  mounted(){
    new Swiper ('.swiper-container', {
      autoplay: 2000,//可选选项，自动滑动 
      loop: true, //无缝轮播
      //分页器 
      pagination : '.swiper-pagination', 
    })
    this.getAddress()
    this.getCategorys()
  },

  components: {
    HeaderTop,
    shopList
  },

  methods: {
    // 1、根据经纬度获取位置详情
    getAddress(){
      const geohash = this.latitude+ ',' + this.longitude
      //  console.log('geohash',geohash)
      reqAddress(geohash).then(res =>{
        console.log('aaa',res)
        this.address = res.data
      }).catch(error =>{
        console.log(error)
      })
    },
    // 2、获取食品分类列表
    getCategorys(){
      reqFoodCategorys().then(res =>{
        console.log(res.data)
      }).catch(error =>{
        console.log(error)
      })
    }
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.msite //首页
  width 100% 
  .miste-content-wrapper
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
    .msite_nav
      margin-top 45px
      height 200px
      background #fff
      bottom-border-1px(#e4e4e4)
      .swiper-container
        width 100%
        height 200px 
        .swiper-wrapper
          width 100%
          height 100% 
          .swiper-slide
            display flex
            flex-wrap wrap
            justify-content center
            align-items flex-start
            .link_to_food
              width 25% 
              .food_container
                width 100%
                display block
                text-align center
                padding-bottom 10px
                font-size  0
                img 
                  display inline-block
                  width 50px
                  height 50px
              span 
                display block
                width 100% 
                font-size 13px
                text-align center
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a770
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #ffffff
      .shop_header
        padding 10px 10px 0 10px
        .iconfont
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>     