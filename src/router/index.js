import Vue from 'vue'
import Router from 'vue-router'


const index = r => require.ensure([], () => r(require('../page/index')), 'index')
const list = r => require.ensure([], () => r(require('../page/list')), 'list')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const page = r => require.ensure([], () => r(require('../page/page')), 'page')

Vue.use(Router)
let router = new Router({
  mode:'history',
  linkActiveClass:'is-active',
  scrollBehavior(to,form,savePosition){
    if(savePosition){
      return savePosition
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    {
      path: '/',
      component: index,
      meta: {title: 'index'},
    },
    {
      path: '/list',
      component: list,
      meta: {title: 'list'},
    },
    {
      path: '/login',
      component: login,
      meta: {title: 'login'},
    },
    {
      path: '/page',
      component: page,
      meta: {title: 'page',login:true},
    },
  ]
})

//设置title
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    window.document.title = to.meta.title;
    next();
  }else {
    window.document.title = '....';
    next();
  }
})

router.beforeEach((to, from, next) => {
    let token = window.localStorage.getItem('sbtoken');
    if (to.matched.some(record => record.meta.login) && (!token || token === null)) {
      next({
        path: '/login',
        query: {
          redirect: to.path.slice(8)
        }
      })
    } else {
      next()
    }
})

export default router;
