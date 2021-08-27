<template>
  <section class="search">
    <HeaderTop :title="'搜索'"/>
    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称">
      <input type="submit" name="submit" class="search_submit">
    </form>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Search',
  components: {HeaderTop}
}
</script>
<style lang='less' scoped>
@import "../../common/less/mixins";
.search{
  .search_form{
    margin: 10px;
    display: flex;
    input{
      border: transparent;
      padding: 8px 10px;
      &:nth-child(1){
        flex-grow: 1;
        margin-right: 10px;
        background: @bc;
      }
      &:nth-child(2){
        color: #fff;
        background: @green;
      }
    }
  }
}
</style>
