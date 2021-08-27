<template>
  <ul class="shop_list">
    <li v-for="item in tempList" :key="item.id" @click="showShop(item.id)">
      <div class="avatar">
        <img :src="item.avatar" alt="店铺logo">
      </div>
      <div class="shop_info1">
        <div>
          <span class="famous nowrap" v-if="item.isFamous">品牌</span>
          <span class="title ellipsis">{{item.name}}</span>
        </div>
        <div>
          <span class="star">★★★★★</span>&nbsp;
          <span class="starNum">{{item.star}}</span>&nbsp;
          <span class="yueshou">月售{{item.yueshou}}单</span>
        </div>
        <div>
          <span class="peisong nowrap">￥{{item.qisong}}起送&nbsp;/&nbsp;配送费约￥{{item.yunfei}}</span>
        </div>
      </div>
      <div class="shop_info2">
        <div class="bzp">
          <span :class="{on: item.bao}">保</span>
          <span :class="{on: item.zhun}">准</span>
          <span :class="{on: item.piao}">票</span>
        </div>
        <div class="delivery nowrap">{{item.delivery}}</div>
        <div></div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ShopList',
  data() {
    return {
      tempList: [
        {id: '001', name: '嘉和一品（温都水城）', isFamous: true, avatar: './images/shop_1.jpg', star: 4.7, yueshou: 106, qisong: 20, yunfei: 5, bao: true, zhun: true, piao: false, delivery: '达达专送'},
        {id: '002', name: '苏州嘻哈包子铺', isFamous: true, avatar: './images/shop_2.jpg', star: 4.2, yueshou: 86, qisong: 24, yunfei: 1, bao: true, zhun: true, piao: false, delivery: '商家配送'},
        {id: '003', name: '大树旗舰店2112', isFamous: false, avatar: './images/shop_3.jpg', star: 4.9, yueshou: 206, qisong: 20, yunfei: 5, bao: true, zhun: false, piao: true, delivery: '达达专送'},
        {id: '004', name: '苏州嘻哈包子铺', isFamous: true, avatar: './images/shop_4.jpg', star: 3.6, yueshou: 156, qisong: 10, yunfei: 15, bao: false, zhun: true, piao: false, delivery: '商家配送'},
        {id: '005', name: '嘉和一品（温都水城）', isFamous: false, avatar: './images/shop_5.jpg', star: 2.7, yueshou: 16, qisong: 99, yunfei: 7, bao: true, zhun: false, piao: true, delivery: '达达专送'},
        {id: '006', name: '大树旗舰店2112', isFamous: true, avatar: './images/shop_6.jpg', star: 4.3, yueshou: 36, qisong: 20, yunfei: 3, bao: true, zhun: true, piao: false, delivery: '达达专送'}
      ]
    }
  },
  methods: {
    showShop (id) {
      this.$router.push({path: '/shop',query: {id}})
    }
  },
  mounted () {
    // 解决vue-cli4中图片显示问题 https://segmentfault.com/a/1190000023824139
    this.tempList = this.tempList.map(item=>{
      item.avatar = require('' + item.avatar);
      return item;
    })
  }
}
</script>
<style lang='less' scoped>
@import '../../common/less/mixins.less';
.shop_list{
  li{
    .bottom-border-1px(@bc);
    padding: 3%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
    .avatar{
      width: 20%;
      img{
        width: 100%;
      }
    }
    .shop_info1{
      width: 58%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      div{
        display: flex;
        align-items: flex-end;
      }
      .famous{
        padding: 2px;
        border-radius: 4px;
        background: @yellow;
        font-size: 10px;
        margin-right: 4px;
        color: #333;
        
      }
      .title{
        font-weight: bold;
        font-size: 18px;
        color: #333;
      }
      .starNum{
        color: @yellow;
      }
    }
    .shop_info2{
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      align-items: flex-end;
      .bzp>span{
        padding: 1px 3px;
        border: #eee 1px solid;
        border-radius: 3px;
      }
      .delivery{
        padding: 1px 3px;
        border: @green 1px solid;
        border-radius: 3px;
        color: @green;
      }
    }
  }
}
.nowrap{
  white-space: nowrap;
}
</style>
