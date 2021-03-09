import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */'../views/home/Home.vue'),
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/login/Login.vue'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    },
  }, {
    path: '/login/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */'../views/login/Register.vue'),
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "register" */'../views/shop/Shop.vue'),
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  // console.log(to, from)
  // console.log(to.path.indexOf('login'))
  if (isLogin || to.path.indexOf('login') > -1) {
    next();
  } else {
    next({ name: 'Login' })
  }
})

export default router
