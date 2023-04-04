import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';


import App from './App.vue';
import TeamsList from './components/pages/TeamsList.vue';
import UsersList from './components/pages/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import TeamsFooter from './components/pages/TeamFooter.vue'
import NotFound from './components/pages/NotFound.vue'
import UsersFooter from './components/pages/UsersFooter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        {path: '/teams', components: {default: TeamsList, footer: TeamsFooter },name: 'teams',meta: {needsAuth: true}, children: [
            {path: ':teamId', component: TeamMembers, name: 'team-members', props: true},
        ]},
        {path: '/users', components: {default: UsersList, footer: UsersFooter}, beforeEnter(to, from ,next) {
            next();
        }},
        {path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from ,savedPosition){
        if(savedPosition){
            return savedPosition
        }
        return {left: 0, top: 0};
    }
})

router.beforeEach(function(to,from,next){
    next()
})

router.afterEach(function(to,from){
    console.log(to,from)
})

const app = createApp(App)


app.use(router);


app.mount('#app');
