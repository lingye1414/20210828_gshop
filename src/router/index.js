import VueRouter from 'vue-router'

/* import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile' */
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopScore from '../pages/Shop/ShopScore/ShopScore'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

// 懒加载
const MSite = () => import ('../pages/MSite/MSite')
const Search = () => import ('../pages/Search/Search')
const Order = () => import ('../pages/Order/Order')
const Profile = () => import ('../pages/Profile/Profile')

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: MSite,
      meta: {showGuide: true}
    },
    {
      path: '/search',
      component: Search,
      meta: {showGuide: true}
    },
    {
      path: '/order',
      component: Order,
      meta: {showGuide: true}
    },
    {
      path: '/profile',
      component: Profile,
      meta: {showGuide: true}
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/Shop',
      component: Shop,
      childrens: [
        {
          path: 'goods',
          component: ShopGoods
        },
        {
          path: 'score',
          component: ShopScore
        },
        {
          path: 'info',
          component: ShopInfo
        }
      ]
    }
  ]
})

export default router