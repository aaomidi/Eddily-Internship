import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import ViewJob from '../components/ViewJob';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/:id',
            name: 'ViewJob',
            component: ViewJob
        }
    ]
});
