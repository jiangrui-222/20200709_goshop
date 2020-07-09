<template>
  <div class="msite">
    <!-- 首页头部 -->
    <header-top title="哈哈哈哈哈哈哈哈哈hahahhaha">
      <router-link class="header_search" slot="left" to='/search'>
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" to='/login'>
        <span class="header_login_text ">登录/注册</span>
      </router-link>
    </header-top>
    
    <!-- 首页导航 -->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/2.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/3.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/4.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/5.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/6.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/7.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/8.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
           
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/2.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/3.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/4.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/5.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/6.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/7.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food"> 
              <div class="food_container">
                <img src="./nav/8.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
           
          </div>
        </div>
        <!-- 导航圆点 -->
        <div class="swiper-pagination"></div>
        
      </div>
    </nav>
    <!-- 附近商家 -->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"> </i>
        <span class="shop_header_title">附件商家</span>
      </div>
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li">
            <a href="">
              <div class="shop_left">
                <img src="./shop/1.jpg" class="shop_img">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">保</li>
                    <li class="supports">保</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on">
                      </span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">3.6</div>
                    <div class="order_section">月售106单</div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">准时达</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li">
            <a href="">
              <div class="shop_left">
                <img src="./shop/1.jpg" class="shop_img">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">保</li>
                    <li class="supports">保</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on">
                      </span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">3.6</div>
                    <div class="order_section">月售106单</div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">准时达</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li">
            <a href="">
              <div class="shop_left">
                <img src="./shop/1.jpg" class="shop_img">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">保</li>
                    <li class="supports">保</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on">
                      </span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">3.6</div>
                    <div class="order_section">月售106单</div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">准时达</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import HeaderTop from '../../components/HeaderTop/HeaderTop';

export default {
  data () {
    return {
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      autoplay: 2000,//可选选项，自动滑动 
      loop: true, //无缝轮播
      //分页器 
      pagination : '.swiper-pagination', 
    })
  },

  components: {
    HeaderTop
  },

  methods: {}
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
      .shop_container
        margin-bottom 50px
        .shop_list
          .shop_li
            bottom-border-1px(#f1f1f1)
            // A>B 表示选择A元素的所有子B元素。
            >a 
              clearFix()
              display block
              box-sizing border-box
              padding 15px 8px
              width 100%
              .shop_left
                float left
                box-sizing border-box
                width 23%
                height 75px
                padding-right 10px
                img 
                  width 100% 
                  height 100% 
              .shop_right
                float right 
                width 77% 
                .shop_detail_header
                  width 100% 
                  clearFix()
                  .shop_title
                    float  left
                    width 200px
                    color #333
                    font-size 16px
                    line-height 16px
                    font-weight 700
                    &::before
                      content '品牌'
                      display inline-block
                      font-size 11px
                      line-height 11px
                      color #333
                      background-color #ffd930
                      padding 2px 2px
                      border-radius 2px
                      margin-right 5px
                  .shop_detail_ul
                    float right
                    margin-top 3px
                    .supports
                      float left 
                      font-size 10px
                      color #999
                      border 1px solid #f1f1f1
                      padding 0 2px
                      border-radius 2px
                .shop_rating_order
                  clearFix()
                  width 100% 
                  margin-top 18px
                  margin-bottom 8px
                  .shop_rating_order_left
                    float left
                    color #ff9a0d
                    .star 
                      float left 
                      font-size 0
                      .star-item
                        display inline-block
                        background-repeat no-repeat
                      &.star-24
                          .star-item
                            width 10px
                            height 10px
                            margin-right 3px
                            background-size 10px 10px
                            &.on 
                              background-image:url('./stars/star24_on@2x.png')
                            &.half 
                              bg-image('./stars/star24_half')
                            &.off 
                              bg-image('./stars/star24_off')
                    .rating_section
                      float left 
                      font-size 10px
                      color #ff6000
                      margin-left 4px
                    .order_section
                      float left
                      font-size 12px
                      color #666
                      transform scale(.8)
                  .shop_rating_order_right
                    float right
                    font-size 12px
                    color #02a774
                    .delivery_style
                      display inline-block
                      border 1px solid #02a774
                      border-radius 2px
                      padding 1px 

                .shop_distance
                  clearFix()
                  width 100% 
                  font-size 12px
                  .shop_delivery_msg
                    float left
                    color #666
                    transform scale(.9)

</style>