<template>
  <section class="profile">
    <HeaderTop :title="'我的'"/>
    <section class="profile_info">
      <router-link class="state" to="/login">
        <span class="iconfont icon-photo"></span>
        <div class="state_text">
          <div>登录/注册</div>
          <div>
            <span class="iconfont icon-shouji"></span>
            <span>暂无绑定手机号</span>
          </div>
        </div>
      </router-link>
      <ul class="asset">
        <li>
          <span class="num color1">0.00</span><span>元</span>
          <div>我的余额</div>
        </li>
        <li>
          <span class="num color2">0</span><span>个</span>
          <div>我的优惠</div>
        </li>
        <li>
          <span class="num color3">0</span><span>分</span>
          <div>我的积分</div>
        </li>
      </ul>
    </section>
    <ul class="profile_nav_list">
      <li>
        <span class="iconfont icon-dingdan" style="color: green;"></span>
        <span>我的订单</span>
      </li>
      <li>
        <span class="iconfont icon-jifen" style="color: tomato;"></span>
        <span>积分商城</span>
      </li>
      <li>
        <span class="iconfont icon-VIP" style="color: orange;"></span>
        <span>谷粒橙外卖会员卡</span>
      </li>
    </ul>
    <ul class="profile_nav_list">
      <li>
        <span class="iconfont icon-kefu" style="color: green;"></span>
        <span>服务中心</span>
      </li>
    </ul>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Profile',
  components: {HeaderTop},
  methods: {
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang='less' scoped>
@import '../../common/less/mixins.less';
.profile_info,
.profile_nav_list{
  box-shadow: 0 8px 8px #ddd;
  margin-bottom: 14px;
  .state{
    text-decoration-line: none;
    .top-border-1px(#fff6);
    color: #fff;
    background: @green;
    display: flex;
    align-items: center;
    padding: 10px;
    // margin-top: 1px;
    .icon-photo{
      font-size: 60px;
      margin-right: 10px
    }
    .state_text{
      .arrows(#fff);
      flex-grow: 1;
      height: 60px;
      display: flex;
      flex-flow: column;
      justify-content: space-evenly;
    }
  }
  .asset{
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    text-align: center;
    line-height: 26px;
    &>li{
      width: 33.333%;
      padding: 10px;
      border-right: 1px solid @bc;
      &:last-child{
        border-right-color: transparent;
      }
    }
    .num{
      font-size: 26px;
      font-weight: bold;
    }
    .color1{
      color: orange;
    }
    .color2{
      color: tomato;
    }
    .color3{
      color: yellowgreen;
    }
  }
}
.profile_nav_list{
  li{
    .arrows(@bc);
    width: 100%;
    font-size: 16px;
    height: 50px;
    border-bottom: 1px solid @bc;
    display: flex;
    align-items: center;
    &:last-child{
      border-bottom-color: transparent;
    }
    .iconfont{
      font-size: 28px;
      margin: 0 8px 0 20px;
    }
  }
  
}
.arrows(@color){
  position: relative;
  &::after{
    content: '\e613';
    font-family: "iconfont" !important;
    font-size: 12px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -6px;
    color: @color;
  }
}
</style>
