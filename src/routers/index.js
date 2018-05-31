import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index/index'
import theme from 'components/theme/theme'
import recommend from 'components/recommend/recommend'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/theme',
      name: 'theme',
      component: theme
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
  ]
})