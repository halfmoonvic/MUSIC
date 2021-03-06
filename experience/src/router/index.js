import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Recommend from 'components/recommend/Recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import SingerDetail from 'components/singer-detail/singer-detail'

Vue.use(Router)

const routes = [
    // {
    //   path: '/',
    //   redirect: '/recommend'
    // },
    {
      path: '/recommend',
      // name: 'recommend',
      component: Recommend
    },{
        path: '/singer',
        component: Singer,
        children: [{
            path: ':id',
            component: SingerDetail
        }]
    },{
        path: '/rank',
        component: Rank
    },{
        path: '/search',
        component: Search
    }
  ];

const router = new Router({
    routes
})

router.push('recommend');

// export default new Router({routes})
export default router;
