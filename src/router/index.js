import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout'

export const constRouter = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    name: '首页',
    icon: 'index',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('../views/Index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: '关于',
    icon: 'edit',
    component: Layout,
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        component: () => import('../views/About.vue')
      }
    ]
  },
  {
    path: '/file',
    name: '文件管理',
    icon: 'file',
    component: Layout,
    redirect: '/file/list',
    children: [
      {
        path: '/file/list',
        name: '列表',
        icon: 'file-list',
        component: () => import('../views/file/List.vue')
      },
      {
        path: '/file/add',
        name: '添加',
        icon: 'add',
        component: () => import('../views/file/Add.vue')
      }
    ]
  },
  {
    path: '/work',
    name: '工作管理',
    icon: 'file',
    component: Layout,
    redirect: '/work/list',
    children: [
      {
        path: '/work/list',
        name: '工作清单',
        icon: 'file-list',
        component: () => import('../views/file/List.vue')
      },
      {
        path: '/work/add',
        name: '添加工作',
        icon: 'add',
        component: () => import('../views/file/Add.vue')
      }
    ]
  }
];

export default new Router({
  routes: constRouter
})
