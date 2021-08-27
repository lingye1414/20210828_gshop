<template>
  <section class="msite">
    <HeaderTop :title="'北京市朝阳区XXXX桥XXXX路XX号XXXX二层'">
      <span class="iconfont icon-Search" slot="left"></span>
      <span slot="right">登录|注册</span>
    </HeaderTop>
    <!-- 轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in Math.ceil(category.length / 8)" :key="i">
          <div class="category" v-for="(item, index) in category.slice((8 * (i - 1)),(8 * i))" :key="index">
            <img :src="item.avatar" alt="">
            <h4>{{item.name}}</h4>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 商家列表 -->
    <div class="msite_shop">
      <h4>
        <span class="iconfont icon-menu"></span>
        <span> 附近商家</span>
      </h4>
      <ShopList/>
    </div>
  </section>
</template>

<script>
import Swiper, {Pagination, Navigation} from 'swiper'
Swiper.use([Pagination, Navigation])
import 'swiper/swiper-bundle.min.css'

import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'

export default {
  name: 'MSite',
  components: {HeaderTop, ShopList},
  data() {
    return {
      category: [
        {avatar: './images/shop_1.jpg', name: '1川湘菜'},
        {avatar: './images/shop_1.jpg', name: '2麻辣烫'},
        {avatar: './images/shop_1.jpg', name: '3包子粥'},
        {avatar: './images/shop_1.jpg', name: '4鲜花蛋糕'},
        {avatar: './images/shop_1.jpg', name: 'a川湘菜'},
        {avatar: './images/shop_1.jpg', name: 'b麻辣烫'},
        {avatar: './images/shop_1.jpg', name: 'c包子粥'},
        {avatar: './images/shop_1.jpg', name: 'd鲜花蛋糕'},
        {avatar: './images/shop_1.jpg', name: '6川湘菜'},
        {avatar: './images/shop_1.jpg', name: '7麻辣烫'},
        {avatar: './images/shop_1.jpg', name: '8包子粥'},
        {avatar: './images/shop_1.jpg', name: '9鲜花蛋糕'},
        {avatar: './images/shop_1.jpg', name: 'h川湘菜'},
        {avatar: './images/shop_1.jpg', name: 'i麻辣烫'},
        {avatar: './images/shop_1.jpg', name: 'j包子粥'},
        {avatar: './images/shop_1.jpg', name: 'k鲜花蛋糕'},
      ]
    }
  },
  mounted () {
    // 轮播
    new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      // loop: true, // 循环模式选项
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })

    // 解决vue-cli4中图片显示问题 https://segmentfault.com/a/1190000023824139
    this.category = this.category.map(item=>{
      item.avatar = require('' + item.avatar);
      return item;
    })

  }
}
</script>
<style lang='less' scoped>
@import '../../common/less/mixins.less';
.msite{
  background: #eee;
}
.swiper-container,
.msite_shop{
  background: #fff;
  box-shadow: 0 10px 10px #ddd;
}
.swiper-container {
  margin-bottom: 20px;
  width: 100%;
  height: 220px;
  --swiper-pagination-color: @green;/* 分页器的颜色 */
  .swiper-slide{
    padding-top: 10px;
    height: 180px;
    display: flex;
    flex-flow: row wrap;
    .category{
      width: 25%;
      text-align: center;
      margin: 10px 0;
      img{
        width: 60%;
      }
    }
  }
}  
.msite_shop{
  h4{
    padding: 10px 10px 0;
    color: #666;
    line-height: 26px;
  }
}

</style>
