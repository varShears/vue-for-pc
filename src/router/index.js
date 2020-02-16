/*
 * @Description: router
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2019-12-18 15:59:18
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-16 09:38:27
 */
import Vue from "vue"
import VueRouter from "vue-router"
const Home = r => require.ensure([], () => r(require("../views/Home")), "Home")
const MallDemo = r =>
  require.ensure([], () => r(require("@/views/demo/mallDemo")), "mallDemo")
const Intelligence = r =>
  require.ensure(
    [],
    () => r(require("@/views/intelligence/index")),
    "itelligence"
  )
const category = r =>
  require.ensure(
    [],
    () => r(require("@/views/content/index")),
    "category1.1"
  )
const login = r =>
  require.ensure(
    [],
    () => r(require("@/views/login")),
    "login"
  )
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: login,
    // 定义元信息
    meta: {
      // 权限验证标记 false 不进行校验拦截
      requireAuth: false
    }
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "category/category1/category1.1",
        component: category
        // children: [
        //   {
        //     path: "category1",
        //     children: [
        //       {
        //         path: "category1.1",
        //         component: category
        //       },
        //     ]
        //   },
        // ]
      }
    ]
  },
  {
    path: "/mallDemo",
    name: "mallDemo",
    component: MallDemo
  },
  {
    path: "/intelligence",
    name: "intelligence",
    component: Intelligence
  },

]

const router = new VueRouter({
  routes
})

// 权限拦截-beforeEach路由钩子函数

router.beforeEach((to, from, next) => {
  // to 目的路由对象 from 来源路由对象
  if (to.matched.some(meta => meta.requireAuth)) {
    /**
    * 登录状态-可使用aixos进行请求，拉取服务器数据，获取用户登录状态
    * 强烈建议在本地使用localStorage或sessionStorage和vuex共同管理用户登录态，避免每次进入时都拉取服务器端接口以验证用户是否登录，额外消耗对服务器的请求，提升用户体验
    * 如果已登录，则更新store中存储的loginName -- 详细查看下面的store配置
    * 未登录，则直接跳转走
    */
    let isLogin = 已登录 ? true : false
    // 执行拦截判定
    if (!isLogin) {
      // 跳转到登录模块
      // 处理方式一：借助next()方法
      next({
        name: 'Login',
        replace: 'true',
        // redirectUrl 用于标记登录后回跳的地址
        redirectUrl: to.fullPath
      })

      // 处理方式二：使用window.loaction.href方式，需要执行next(false)配合使用
      window.location.href = '/login?redirectUrl=' + to.fullPath
      next(false)
    } else {
      // 已登录，直接进入
      next()
    }
  } else {
    // 不执行拦截，直接进入该路由
    next()
  }
})

export default router
