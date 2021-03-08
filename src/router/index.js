import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/login/Register.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
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
    component: Register,
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
