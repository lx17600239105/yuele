import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index' // 首页
import learn from '@/page/learn' // 首页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
        path: '/learn',
        name: '学习中心',
        component: learn
    }
  ]
})
