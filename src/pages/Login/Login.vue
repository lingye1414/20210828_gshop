<template>
  <div>
    <span class="iconfont icon-arrowsLeft" @click="$router.go(-1)"></span>
    <section class="login">
      <div class="logo">
        <h1>谷粒橙</h1>
        <h3>外卖</h3>
      </div>
      <div class="tagTitle">
        <span :class="{actice: loginBySMS}" @click="loginBySMS=true">短信登录</span>
        <span :class="{actice: !loginBySMS}" @click="loginBySMS=false">密码登录</span>
      </div>
      <div class="login_by_SMS" v-show="loginBySMS">
        <form action="#">
          <div class="vCode">
            <input type="text" placeholder="手机号">
            <button>发送验证码</button>
          </div>
          <input type="text" placeholder="验证码">
          <input type="submit" value="登录">
        </form>
        <a href="javascript:;">关于我们</a>
      </div>
      <div class="login_by_password" v-show="!loginBySMS">
        <form action="#">
          <input type="text" placeholder="手机/邮箱/用户名">
          <input type="text" placeholder="密码">
          <div class='vCode'>
            <input type="text" placeholder="验证码">
            <img src="./images/captcha.svg" alt="">
          </div>
          <input type="submit" value="登录">
        </form>
        <a href="javascript:;">关于我们</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginBySMS: false
    }
  }
}
</script>
<style lang='less' scoped>
@import '../../common/less/mixins.less';
// 返回箭头
.icon-arrowsLeft{
  display: block;
  line-height: 30px;
  width: 30px;
  text-align: center;
}
// logo
.login{
  width: 100%;
  .logo{
    text-align: center;
    padding: 40px 0;
    h1,h3{
      display: inline;
      color: @yellow;
      font-weight: bold;
    }
    h1{font-size: 40px;}
    h3{font-size: 26px;}
  }
}
// 短信/密码登录 切换标签
.tagTitle{
  font-size: 14px;
  text-align: center;
  span{
    display: inline-block;
    margin: 10px;
  }
  .actice{
    color: @green;
    font-weight: bold;
    position: relative;
    &::after{
      content: '';
      position: absolute;
      bottom: -8px;
      right: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: @green;
    }
  }
}
// 表单
.login_by_SMS,
.login_by_password{
  text-align: center;
  input{
    box-sizing: border-box;
    width: 80%;
    margin: 8px;
    padding: 14px;
    border: 1px solid @bc;
    border-radius: 5px;
    &:last-child{
      color: #fff;
      border-color: transparent;
      background-color: @green;
      padding: 10px;
      margin: 20px 0 30px;
    }
  }
  a{
    font-size: 12px;
    display: block;
    text-decoration-line: none;
    color: #999;
  }
  .vCode{
    position: relative;
    button,
    img{
      position: absolute;
      right: 11%;
      top: 50%;
      margin-top: -18px;
      height: 36px;
      color: @bc;
      border-color: transparent;
      background-color: transparent;
    }
  }
}
</style>
