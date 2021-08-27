export const requireImg = {
  methods: {
    requireImg (array, key) {
      // 解决vue-cli4中图片显示问题 https://segmentfault.com/a/1190000023824139
      return array.map(item=>{
        // 直接用 item[key] 引入会报`Cannot find module '../assets/logo.png'`
        // 所以加个空串
        console.log(item[key])
        item[key] = require('./images'+item[key].replace('./images',''))
        console.log(item[key])
        return item;
      })
    }
  }
}