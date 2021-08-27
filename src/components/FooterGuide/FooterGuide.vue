<template>
  <ul class="footer_guide">
    <li
      :class="{active: $route.path === '/msite'}"
      @click="showPage('/msite')"
    >
      <span class="iconfont icon-MSite"></span>
      <span>主页</span>
    </li>
    <li
      :class="{active: $route.path === '/search'}"
      @click="showPage('/search')"
    >
      <span class="iconfont icon-Search"></span>
      <span>搜索</span>
    </li>
    <li
      :class="{active: $route.path === '/order'}"
      @click="showPage('/order')"
    >
      <span class="iconfont icon-Order"></span>
      <span>订单</span>
    </li>
    <li
      :class="{active: $route.path === '/profile'}"
      @click="showPage('/profile')"
    >
      <span class="iconfont icon-Profile"></span>
      <span>个人中心</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FooterGuide',
  methods: {
    showPage (path) {
      if (this.$route.path !== path) {
        this.$router.replace({path: path})
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../common/less/mixins";
.footer_guide{
  .top-border-1px(@bc);
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-around;
  text-align: center;
  background: #fff;
  font-size: 14px;
  li{
    width: 25%;
    padding: 6px;
    text-decoration-line: none;
    color: @bc;
    display: flex;
    flex-flow: column;
    .iconfont{
      font-size: 30px;
      line-height: 38px;
    }
  }
  .active{
    color: @green;
  }
}
</style>
