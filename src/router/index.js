import Vue from 'vue'
import Router from 'vue-router'
// import Cookies from 'js-cookie'

Vue.use(Router);
function loadView (view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `../components/${view}.vue`)
}

Vue.use(Router);

const router = new Router({
    // ordinary user pages
    routes: [
        {
            path: '/',
            component: loadView('TabbarFrame'),
            children: [
                {
                    path: 'questions',
                    name: 'questions',
                    component: loadView('questions/index')
                },
                {
                    path: 'positions',
                    name: 'positions',
                    component: loadView('HelloWorld')
                },
                {
                    path: '',
                    name: 'dashboard',
                    component: loadView('dashboard/index')
                },
                {
                    path: 'paper_list/:type',
                    name: 'paper_list',
                    component: loadView('dashboard/papers')
                },
                {
                    path: 'ans_paper/:id',
                    name: 'ans_paper',
                    component: loadView('dashboard/answer_paper')
                },
                {
                    path: 'view_paper/:id',
                    name: 'view_paper',
                    component: loadView('dashboard/review_paper')
                },
                {
                    path: 'questions/list',
                    name: 'question_list',
                    component: loadView('questions/question_list')
                },
                {
                    path: 'questions/view/:id',
                    name: 'view_question',
                    component: loadView('questions/question_answer')
                }
            ]
        }
    ]
});


export default router
