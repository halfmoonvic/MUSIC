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

### JSONP 相关
参考资料： [说说JSON和JSONP，也许你会豁然开朗，含jQuery用例](http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html)
1. jsonp 之所以能够跨域是因为它发送的并不是Ajax请求，它动态创建`script`标签，`script`并没有同源策略限制的，将`script` 的 `src` 指向服务器端地址，其中在 `script` 标签中写好回调函数，以供前台处理数据（简而言之，就是利用 `script` 标签 来代替 ajax 请求数据）
2. example： `<script src="http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998&callback=flightHandler"></script>` 返回来的数据为   
```   
flightHandler({
    "code": "CA1998",
    "price": 1780,
    "tickets": 5
});
```
之后 你事先在本地事先定义好 `flightHandler` 函数，如此返回来的数据 就直接调用 `flightHandler` 函数了（这也就是 前台与后端事先定义好回调函数的原因，不然怎么执行你本地的函数）

------------

#### js 相关
1. 三元函数 
    `let value = data[k] !== undefined ? data[k] : ''`  
    而不是
    `data[k] !==undefined? value = data[k] : value = ''`  这样还需要 提前声明 value 变量
2. 对象合并
```
const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
})
```
参考链接： [es6 javascript对象方法Object.assign()](http://blog.csdn.net/qq_30100043/article/details/53422657)
3. promise 在 数据中的应用
在创建的 `var aa = new Promise((resolve, reject)=>{})`对象中 进行数据的请求，数据 请求成功后 进行链式的写法 aa.then(resData) 的形式处理数据
4. Array 方法  
    `var arr = new Array(5), // arr = [ , , , , , ]`  
    `var arr = new Array(5, 1), // arr = [5, 1]`

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
    {
        path: '/pathName',
        name: 'name',
        components: {
            header: header,
            footer: footer
        }
    },
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

##### 总结感想
1. 路由的设置是 设置不同的路径对应着不同的组件。即一个 path 对应着 一个 component(components)。在页面中通过`<router-view>`来展示对应的组件。一个页面自然可以有多个组件（components）。
2. 点击`router-link`，内部执行 `router.push()`，同时查看`router-link`上的`path`。找寻路由对应的`path`，查看路由上`path`上对应的`components`，之后在相应的`router-view`上予以展示

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
2. 父子传值的时候如 `<v-header :sellerSon="sellerParent"></v-header>`，其中 父组件获取数据是一个异步的过程，这时候 父组件的 `sellerParent` 还是空对象的时候 就会先将这个空对象给子组件，子组件一些 `sellerSon.something` 事实上为 `undefined`,而如果 需设置 `sellerSon.something[0].else` 时候就需要 加一个 `v-if` 来判断数据是否获取，不然 就是 `property '0' of undefined` 这种，会报错 
3. 非动态传值时（如传递字符串）就不要使用 'v-bind' 语法了
4. 一些组件的值也写在 props 里面，是为了 方便以后其它组件调用的时候直接对其进行修改

### `<keep-alive>`
组件切换的时候 如果 未加 `keep-alive` 标签，则 组件的生命周期 会 重新走一遍
`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

### 杂项
1. 组件切走的时候 内部 执行 destroyed 函数
2. 后台返回数据 包含 `&gt;` 等一些html实体字符，插入到 html上时使用 `v-html` 指令，而不是 `{{}}` 这种模板语法
3. watch 监视 组件中数据的改变，当相应数据发生改变执行相应函数
4. 图片 自带两个方法，load 和 complete
