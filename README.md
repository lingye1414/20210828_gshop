## src文件夹结构:
  ├── api 与后台交互模块文件夹
  │   ├── ajax函数
  │   └── 接口请求函数
  ├── common 通用资源文件夹,如fonts/img/stylus 同assets文件夹
  ├── components 非路由组件文件夹
  │   └── FooterGuide 底部组件文件夹
  ├── pages 路由组件文件夹
  │   ├── Msite 首页组件
  │   ├── Search 搜索组件
  │   ├── Order 订单组件
  │   └── Profile 个人组件
  ├── filters 自定义过滤器模块文件夹
  ├── mock 模拟数据接口文件夹
  ├── router 路由器文件夹
  └── store Vuex相关模块文件夹

## Vue 组件化
  1. 分析应用的整体vue组件结构
  2. 创建各个vue组件,编写基本代码
  3. 引入 reset 样式,保存到```static.css/reset.css```
      ```
      /* v2.0 | 20110126
        http://meyerweb.com/eric/tools/css/reset/ 
        License: none (public domain)
      */
      *{
        margin: 0;
        padding: 0;
        ....
      }
      ```
  4. 移动端
      1. viewport
          ```
          <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
          ```
      2. 解决点击响应延时0.2s问题
          ```
          <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
          <script>
            if ('addEventListener' in document) {
              document.addEventListener('DOMContentLoaded',function () {
                FastClick.attach(document.body);
              }, false);
            }
            if (!window.Promise) {
              document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
            }
          </script>
          ```

## Swiper 6 导入方法(解决分页器无法显示的问题)
  - 根据以往的导入方式，在6中只能导入swiper的核心功能，分页器等组件需要单独导入。
  - 正确写法：
      ```
      import Swiper, { Pagination, Navigation } from 'swiper';
      Swiper.use([Pagination, Navigation]);
      import 'swiper/swiper-min.css';
      ```

## windows环境下启动mongodb服务
  1. 打开命令窗口，切换到mongodb安装目录下的“bin”目录中。
      ```
      cd D:\Program Files\MongoDB\Server\5.0\bin
      ```
  2. 启动服务。输入命令：
      ```
      mongod --dbpath D:\Program Files\MongoDB\data
      \\ 注：--dbpath是指定数据库存放目录，要注意dbpath前有两个“-”。
      ```
  3. 命令窗口中打印一些启动信息，则表示启动成功。
  4. 在浏览器中输入http://localhost:27017/ 即可看到显示信息为：
      ```
      It looks like you are trying to access MongoDB over HTTP on the native driver port.
      ```
  到此为止，mongodb服务已启动成功，关闭命令窗口即可关闭mongodb服务。

## 启动服务器应用
  1. 打开服务器应用目录.
      ```
      cd F:\HTML5\code\11vue2_test\gshop-server
      ```
  2. 启动服务器
      ```
      npm start
      ```

## API接口文档
    ```
    F:\HTML5\code\11vue2_test\gshop-server\API.md
    ```

## Git常用命令
  命令名称|作用
  :---|:---
  git config --global user.name 用户名|设置用户签名
  git config --global user.email 邮箱|设置用户邮箱
  git init|初始化本地库
  git status|查看本地库状态
  git add 文件名|添加到暂存区
  git commit -m "日志信息" 文件名|提交到本地库
  git reflog|查看历史记录
  git reset -- hard 版本号|版本穿梭