import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import food from '@/components/food/food';
import boy from '@/components/boy/boy';
import girl from '@/components/girl/girl';
import footerTab from '@/components/tab_footer/tab_footer';

Vue.use(Router);

const routes = [{
        path: '/food',
        name: 'food',
        components: {
            body: food
        }
    }, {
        path: '/boy',
        name: 'boy',
        components: {
            body: boy,
            footer: footerTab
        }
    }, {
        path: '/girl',
        name: 'girl',
        components: {
            body: girl,
            footer: footerTab
        }
    }];

const router = new Router({
    routes,
    linkActiveClass: 'active'
});

router.push('food');

export default router;
