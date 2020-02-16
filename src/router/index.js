import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('views/home/home')
const Type = ()=> import('views/type/type')
const Shopcar = ()=> import('views/shopcar/shopcar')
const My = ()=> import('views/my/my')

Vue.use(VueRouter)

const routes = [
    {path: '', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/type', component: Type},
    {path: '/shopcar', component: Shopcar},
    {path: '/my', component: My}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
