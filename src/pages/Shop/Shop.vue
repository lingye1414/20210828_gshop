<template>
  <div>
    <div class="shop_header">
      <div class="background">
        <img src="" alt="">
      </div>
      <div class="content">
        <div class='logo'></div>
        <div class='title'></div>

      </div>
    </div>
    <div class='shop_nav'>
      <router-link >点餐</router-link>
      <router-link >评价</router-link>
      <router-link >商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>
<style lang='less' scoped>

</style>
