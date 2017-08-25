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

5. match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
6. 触摸事件
    * touchstart 当手指放在屏幕上触发。
    * touchmove 当手指在屏幕上滑动时，连续地触发。
    * touchend 当手指从屏幕上离开时触发。
    * touchcancel 当系统停止跟踪时触发，系统什么时候取消，文档没有明确的说明。
    * 【总】以上四个，是w3c提供的触摸事件，只针对触摸设备，最常用的是前三个。
由于触摸会导致屏幕动来动去，所以可以会在这些事件的事件处理函数内使用event.preventDefault()，来阻止屏幕的默认滚动。
    * [在移动端，手指点击一个元素，会经过：touchstart --> touchmove -> touchend --》click。](http://blog.csdn.net/lululove19870526/article/details/44345759)
    * [touch对象](http://caibaojian.com/mobile-touch-event.html)
7. 向下取整 a = 3.1 | 0 // a=3。 或0 与 Math.floor() 是一样的
8. js 中 一切皆对象。通过 new 一个 构造函数 出来的东西 就是 一个 很彻底很常见的对象
9. import 的对象 如果 是 默认导出的（`export default ...`），那么在import的时候注意不要 加 `{}` 这个了
10. 对象结构方法中，在函数中的应用
    ```
    function removeBreakpoint({ url, line, column }) {
      // ...
      let a = url
      let b = line 
      let c = column
    }
    removeBreakpoint({
        url: 'http://',
        line: 3,
        column: 4
        })
    // 真实过程则是 函数声明时的 {url, line, column} 等于函数 调用时的对象。  
       则为 {url, line, colum} = obj(你传入的对象)  
       然后在函数体内可直接使用这些 变量
    ```
11. audio 可以派发的事件都有 canplay error timeupdate


-----------

### vue相关
#### 1. 初始化安装过程
0. 安装依赖—— npm install -g vue-cli
1. vue init webpack '...'
2. cd '...'
3. npm install
4. npm run dev

### 一些实现
1. 子组件更改父组件某个传过来的值。 方法1 是在 watch 中添加父组件传过来的值，然后将传过来的值 赋值给 子组件的 中的一个值。方法2，子组件通过 派发事件的方式，将新值传给父组件，然后父组件在传回来从而实现真正意义上的更改

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
3. `vue.push()`
``` 
this.$router.push({
    path: `/singer/${singer.id}`
})
```
4. `':id'` 动态路径参数  动态路径参数 以冒号开头  
    一个『路径参数』使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。

```
router-link
<router-link to="/user/foo/post/aa"></router-link>

路由定义
router = [{
    path: '/user/:id/post/:mid'
    }]
$router.params = {
    id: foo,
    mid: aa
}
```

5. // 当 /user/:id/profile 匹配成功， // UserProfile 会被渲染在 User 的 <router-view> 中
组件在特定的 `<router-view></router-view>` 上渲染，看起来像是 依据 层级的
6. 通过 
```
this.$router.push({
    path: '/foo',
    query: {
        id: 'aa',
        name: 'cs'
    }
    })
```
来从一个组件（姑且称为a组件中）中跳转至 路由 为 `/foo` 对应的组件（姑且称b组件）。并且b组件可以通过 this.$route.query 方式获取query对应（注意不是 this.$router 而是 this.$route）  
`this.$router` 好像指的一直都是 根实例的 router

6. 命名路由
    `<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>`  
    `router.push({ name: 'user', params: { userId: 123 }})`
    name 定义的是对应整个 `pant` 路径的路由  
    对于 `<router-view name="a"></router-view>` 其 name 定义的是 相应的组件

7. 继续 第5点笔记  
    如果 router-view 没有设置名字，那么默认为 default。

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
5. 在vue里面，组件中的 props或data中的数据 都会添加 getter 和 setter，也就是vue会观测 props、data、和 computed 里面值的变化。然后 和 dom做 数据绑定。而在created中创建的不会监听
6. v-bind: 可以所写为 :, v-on 的所写 是 @ !!!


### vuex
1. vuex 在兄弟组件中，通过 mutation 提交来 更改 state 中某一个数据。其他的组件，比如兄弟组件，通过 getter 来获取 已经被 更改过的的 state 中的那个数据
2. getters 选项的意义便是 在其它组件中 实时获取 store 中的 state。所以通知 store 中 有n个 state，getters 相应的就会有n+x个变量。x是指通过其中的n计算出来的其它变量


### 其它
方法中 以下划线为开头的 `_pad()` 多是一些 工具函数，普通的没有下划线的多是与该组件密切相关的
