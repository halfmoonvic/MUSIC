#### CSS 相关
##### table属性 垂直居中元素
```
.parent {
    display: table;
}
.son {
    display: table-cell;
    vertical-align: middle;
}
```
注意事项：.son 的大小是完全继承 .parent 大小的，你设置了也没有用。真正处于垂直居中状态的内容 是 .son 里面的内容

-----------

### vue相关
#### 1. 初始化安装过程
0. 安装依赖—— npm install -g vue-cli
1. vue init webpack '...'
2. cd '...'
3. npm install
4. npm run dev

#### 2. 路由配置过程

* 定义组件（路由） 即
`import 路由name from '目录dir'`
* 定义路由
```
routes: [
    {
        path: '/',
        redirect: '/pathName'
        // 通过此种方式 可替代 router.push(name) 的方法
    },
    {path: '/pathName', name: 'name', component: name},
    {},
    {}]
```
* 创建 router 实例，然后传 `routes` 配置(此步可直接与上一步合并啊！！！)
```
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
```
* 导出实例 export default router
**注意事项**  

1. vue-router 在 安装成功后 需要 通过 Vue.use() 明确地安装路由功能 即 `Vue.use(VueRouter);`  
2. 同 vue-router 一样，vue-resource 也需要通过 Vue.use 明确安装使用


#### 3. prop传值
```
props: {
    selectFoods: {
        type: Array,
        default() {
            return [
                {
                    price: 10,
                    count: 2
                },
                {
                    price: 10,
                    count: 1
                }
            ]
        }
    }
}
```
注意：  

1. 应用时，是 selectFoods[0].price 而不是 selectFoods.price
