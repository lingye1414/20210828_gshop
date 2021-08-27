<template>
  <div>
    <router-view :class="{showGuide: $route.meta.showGuide}"></router-view>
    <FooterGuide v-show="$route.meta.showGuide"/>
  </div>
</template>

<script>
// 底部导航栏
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  name: 'App',
  components: {FooterGuide}
}
</script>
<style lang="less">
@import './common/less/mixins.less';
// 显示底部导航时,增加60像素下边框
.showGuide{
  border-bottom: 60px solid transparent;
}
</style>
