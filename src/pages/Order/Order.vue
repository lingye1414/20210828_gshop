<template>
  <section class="order">
    <HeaderTop :title="'订单列表'"/>
    <section v-if="!isLogin" class="order_no_login">
      <img src="./images/person.png" alt="">
      <h3>登录后查看外卖订单</h3>
      <button @click="toLogin">立即登录</button>
    </section>
    <section v-else-if="orderList.length === 0" class="no_order">
      <img src="./images/person2.png" alt="">
      <h3>还没有订单,快去订一份吧</h3>
    </section>
    <section v-else class="order_list">
      <div v-for="item in orderList" :key="item.id" class="order_list_item">
        <div>
          <h4>{{item.name}}</h4>
          <span>{{item.state}}</span>
        </div>
        <div class="products">
          <div v-for="(i, index) in item.products.slice(0,3)" :key="index">
            <img :src="i.avatar" :alt="i.name">
          </div>
          <div class="price">
            <span>￥{{item.price}}</span>
            <span>共{{item.products.length}}件</span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Order',
  components: {HeaderTop},
  data() {
    return {
      isLogin: false,
      orderList: [
        {
          id: '001', name: '顺天大酒楼', price: 25, state: '正在配送',
          products: [
            {name: '面包', avatar: './images/shop_1.jpg'},
            {name: '面包', avatar: './images/shop_1.jpg'},
            {name: '面包', avatar: './images/shop_1.jpg'},
            {name: '面包', avatar: './images/shop_1.jpg'},
            {name: '面包', avatar: './images/shop_1.jpg'}
          ]
        },
        {
          id: '002', name: '嘉和一品粥', price: 35, state: '已完成',
          products: [
            {name: '面包', avatar: './images/shop_2.jpg'}
          ]
        },
        {
          id: '003', name: '顺天大酒楼', price: 25, state: '正在配送',
          products: [
            {name: '面包', avatar: './images/shop_1.jpg'},
            {name: '面包', avatar: './images/shop_1.jpg'},
            {name: '面包', avatar: './images/shop_1.jpg'},
            {name: '面包', avatar: './images/shop_1.jpg'},
            {name: '面包', avatar: './images/shop_1.jpg'}
          ]
        },
        {
          id: '004', name: '嘉和一品粥', price: 35, state: '已完成',
          products: [
            {name: '面包', avatar: './images/shop_2.jpg'}
          ]
        }
      ]
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    }
  },
  mounted () {
    this.orderList = []
    // 解决vue-cli4中图片显示问题 https://segmentfault.com/a/1190000023824139
    this.orderList = this.orderList.map(item=>{
      item.products = item.products.map(i => {
        i.avatar = require('' + i.avatar)
        return i
      })
      return item;
    })
  }
}
</script>
<style lang='less' scoped>
@import '../../common/less/mixins.less';
.order_no_login,
.no_order{
  display: flex;
  flex-flow: column;
  align-items: center;
  h3{
    margin: 20px;
    color: #666;
  }
  button{
    background: @green;
    border: transparent;
    padding: 8px 10px;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
  }
}
.order_list{
  .order_list_item{
    background: #fff;
    margin-bottom: 10px;
    padding: 20px 10px;
    box-shadow: 0 5px 10px #eee;
    display: flex;
    flex-flow: column;
    &>div{
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: flex-end;
      h4{
        font-weight: bold;
      }
      span{
        color: #999;
        font-size: 14px;
      }
    }
    .products{
      background: @bc;
      margin: 10px 0;
      padding: 10px;
      display: block;
      position: relative;
      overflow: hidden;
      img{
        float: left;
        margin-right: 10px;
        height: 80px;
      }
      .price{
        position: absolute;
        right: 0;
        height: 80px;
        width: 20%;
        background: @bc;
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        align-items: center;
        span{
          &:nth-child(1){
            color: #333;
            font-size: 18px;
          }
          &:nth-child(2){
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
