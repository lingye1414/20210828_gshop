<template>
  <div class="header_search">
    <slot name="left"></slot>
    <span class="title ellipsis">{{title}}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    title: String
  }
}
</script>
<style lang='less' scoped>
@import '../../common/less/mixins.less';
.header_search{
  background: @green;
  padding: 14px 10px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  .title{
    display: block;
    max-width: 70%;
    text-align: center;
    margin: auto;
  }
}
</style>
