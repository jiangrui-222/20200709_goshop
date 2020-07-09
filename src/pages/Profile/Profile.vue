<template>
  <div class="profile">
    <header-top title="我的"></header-top>
    <!-- 登录 -->
    <section class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile-image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <!-- 余额 -->
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span>0.00</span>元
          </span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span>0</span>个
          </span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span>0</span>分
          </span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-order-s"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
       <!-- 硅谷外卖会员卡 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-vip"></i>
            </span>
        <div class="my_order_div">
          <span>外卖会员卡</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>
    <!-- 服务中心 -->
    <section class="profile_my_order border-1px">
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-fuwu"></i>
            </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop';

export default {
  data() {
    return {};
  },

  components: {HeaderTop},

  methods: {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.profile {
  width: 100%;
  // 不滚动
  overflow hidden
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #02a774;
    width: 100%;
    height: 45px;

    .header_title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .header_title_text {
        font-size: 20px;
        color: #ffffff;
      }
    }
  }

  .profile-number {
    margin-top: 45.5px;
    width: 100%;

    .profile-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #02a774;
      padding: 20px 10px;

      .profile-image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 10px;

        .iconfont {
          background: #e4e4e4;
          font-size: 62px;
        }
      }

      .user-info {
        transform: translateX(-50px);

        p {
          font-weight: 700;
          font-size: 18px;
          color: #fff;
          display: block;

          &.user-info-top {
            padding-bottom: 8px;
          }

          .user-icon {
            width: 20px;
            height: 20px;
            display: inline-block;
            margin-left: -15px;
            margin-right: 10px;

            .icon-mobile {
              font-size: 30px;
              vertical-align: text-top;
            }
          }

          .icon-mobile-number {
            font-size: 14px;
          }
        }
      }

      .arrow {
        width: 12px;
        height: 12px;

        .icon-jiantou1 {
          color: #fff;
          font-size: 5px;
        }
      }
    }
  }

  .profile_info_data {
    bottom-border-1px(#e4e4e4);
    width: 100%;
    background: #fff;
    overflow: hidden;

    .info_data_list {
      clearFix();

      .info_data_link {
        float: left;
        width: 33%;
        text-align: center;
        border-right: 1px solid #f1f1f1;

        .info_data_top {
          display: block;
          width: 100%;
          font-size: 14px;
          color: #333;
          padding: 15px 5px 10px;

          span {
            display: inline-block;
            font-size: 30px;
            color: #f90;
            font-weight: 700;
            line-height: 30px;
          }
        }

        .info_data_bottom {
          display: inline-block;
          font-size: 14px;
          color: #666;
          font-weight: 400;
          padding-bottom: 10px;
        }
      }

      .info_data_link:nth-of-type(2) {
        .info_data_top {
          span {
            color: #ff5f3e;
          }
        }
      }

      .info_data_link:nth-of-type(3) {
        border: 0;

        .info_data_top {
          span {
            color: #6ac20b;
          }
        }
      }
    }
  }

  .profile_my_order {
    margin-top: 10px;
    background: #fff;
    top-border-1px(#e4e4e4)


    .my_order {
      display: flex;
      align-items: center;
      padding-left: 15px;

      >span {
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;

        >.iconfont {
          margin-left: -10px;
          font-size: 30px;
        }
        .icon-order-s {
            color: #02a774;
          }

        .icon-jifen {
          color: #ff5f3e;
        }
        .icon-vip{
          color #f90
          }
      }
    }
    .my_order_div{
      width 100%
      border-bottom 1px solid #f1f1f1
      padding 18px 10px 18px 0
      font-size 16px
      color #333
      display flex
      justify-content space-between
      span {
        display block
        .my_order_icon{
          width 10px
          height 10px
          .icon-jiantou1{
            color #bbb
            font-size 10px
            }
          }
      }
      }
  }
}
</style>