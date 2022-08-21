import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../components/test.vue'
import Test2 from '../components/test2.vue'
import UserList from '../view/userList.vue'
import login from '../view/login.vue'
Vue.use(VueRouter)
let router = new VueRouter({
    routes: [
        { path: '/test', component: Test }, { path: '/test2', component: Test2 }
        , {
            path: '/userlist/:id', name: 'userlist', component: UserList,
            /* beforeEnter(to, from, next) {
                let token = localStorage.getItem('TOKEN');
                // next(token ? '/userlist' : '/login')
                if (token) { next() }
                else { next('/login') }
            } */
        },
        {
            path: '/login', component: login, beforeEnter(to, from, next) {
                to.meta.enterFrom = from.path;
                next();
            }
        }
    ]
})
export { router }
