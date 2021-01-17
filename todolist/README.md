## 待做
- 在网站上生成一个icon，替换favicon.icon

react设计理念: all in js.框架较推崇的一种理念（vue\angular也是）

- manifest 定义网页当成app使用，就可把它存储在桌面，有一个快捷方式可以进入这个网址。在这个文件里定义一些快捷方式的图标、网址等内容。

- registerServiceWorker (PWA progressive web application)借助网页写手机app的功能。
// 效果:使用该功能写出的页面，上传到https协议的服务器上，第一次浏览网页是需要联网，这时如果断网了，再访问页面依旧可以访问这个网页，因为registerServiceWork把网页存储在浏览器之内。

setState接受一个函数传入prevState


propTypes: 组件接受外部传递的props并指定和校验传入组件的属性的类型。如果指定了某属性的类型，但父组件没有传递该属性，此时不会报错，如果要求某属性必须要传，则需指定isRequired.
defaultProps: 指定组件某个属性的默认值。

react英文文档。

**4.3**
1. 数据驱动，当组件的status和props发生改变时，render函数就会重新执行。
2. 当父组件的render函数被执行时，它的子组件的render都将被重新执行。

**4.4 虚拟dom**
// 自己实现一个，思路：
1. state 数据
2. JSX 模板
3. 数据+模板 结合，生成真实DOM显示
4. state 发生改变
5. 数据+模板 结合，生成真实的DOM，替换原始DOM.
缺陷：
第一次生成了一个完整的DOM片段
第二次生成了一个完整的DOM片段
第二次的DOM替换第一次的DOM，非常耗性能

尝试改进
1. state 数据
2. JSX 模板
3. 数据+模板 结合，生成真实DOM显示
4. state 发生改变
5. 数据+模板 结合，生成真实的DOM，不直接替换原始DOM
6. 新的DOM（DocumentFragment） 和原始DOM做比对，找差异（损耗性能）
7. 找出input框发生了变化
8. 用新DOM中的input元素，替换老DOM中的input元素。(提升性能)

缺陷：
提升了一部分性能又损耗了一部分性能，性能提升并不明显

继续改进：
1. state 数据
2. JSX 模板
3. 数据+模板 结合，生成虚拟DOM（就是一个JS对象，用它来描述真实DOM）（损耗性能，但极小，用JS生成一个JS的对象，很快，但用JS生成一个DOM元素，代价极高，需要调用babaplication?）
4. 用虚拟DOM 的结构生成真实的DOM，来显示
// <div id='abc'><span>hello</span></div>
// ['div', {id: 'abc'}, ['span', {}, 'hello world']]
5. state 发生变化
6. 数据+模板生成新的虚拟DOM(极大的提升了性能)
7. 比较原始虚拟DOM 和新的虚拟DOM 的区别，找到区别是span 中内容（极大的提升性能）
8. 直接操作DOM， 改变span 中的内容

虚拟DOM 本质上是JS对象，为什么说虚拟DOM提升了性能，因为做JS的比较相对于做DOM的比较来说会比较容易一些。

优点：
1. 性能提升了。(由DOM比对变成了JS的比对)
2. 它使得跨端应用得以实现。React Native(原生应用)（直接用虚拟DOM生成原始应用的组件）。

JSX -> createElement -> 虚拟DOM(js对象) -> 真实DOM

**4.6**
1. setState 设计为异步，将多次setState合并成一次setState，只做一次虚拟DOM比对,为了提升底层的性能.
2. 虚拟DOM 采用同层比对的算法，这样会大大提升算法的比对速度。在比对时diff算法比对两个虚拟DOM差异时，会逐层去比对，如果有一层不满足匹配要求时，下面的就不比对了，直接用新的替换掉老的就可以。
3. 在列表循环时要引入key值，提高虚拟DOM的diff算法的比对性能。key值要保持稳定，所以能不用index做key值就不用。
a:0 b:1 c:2  --删除a--- b:0, c:1

注意：如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state


**4.7**
e.target或ref获取元素对应的dom

**4.8**
生命周期函数指在某一时刻组件会自动调用执行的函数。
| initialization | mounting | UpdateComponent | | unmounting |
| ----- | ------ | --- |---| ---- |
| setup prps and state | componentWillMount | props | states | componentWillUnmount | 
| | render|componentWillReceiveProps | shouldComponentUpdate |
| | componentDidMount | shouldComponentUpdate | componentWillUpdate |
| | | componentWillUpdate | render|
| | | render | componentDidUpdate|
| | | componentDidUpdate

initialization: 初始化props和state（constructor）

componentWillReceiveProps：1. 组件从父组件接受参数；2.如果这个组件第一次存在于父组件中，不会执行。如果这个组件之前已经于父组件中，才会执行。 

shouldComponentUpdate: 组件更新之前自动执行，需要返回一个bool值，若返回false后面的函数不执行。

一个组件所有的生命周期函数都可以不存在，但render必须存在。因为所有的组件都继承自Component组件，这个组件内置了除render以外的其他生命周期函数。render必须由组件自己定义。

render: 1. props或state更新时；2. 当父组件render执行时，子组件的render也会被执行。

从React版本16.3开始，以下组件生命周期方法正在逐步淘汰。

componentWillMount
componentWillReceiveProps
componentWillUpdate

**4.9**
性能提升：
1. fn.bind(this)放在constructor里。
2. 用shouldComponentUpdate,只在必要时进行渲染。其余时候通过返回false,避免无效渲染。


异步请求：
放在componentDidMount生命周期中。
> 不能放在render中，会造成请求多次。请求应放到只执行一次的生命周期函数中比较合适。


# Redux
出现的原因：
没有redux时，react的组件传值，在大型应用中基本不可维护。
react只是轻量级视图层框架。

redux：数据层的框架。

把组件中的数据放到一个公用的空间Store管理数据，当一个组件改变了数据，其他组件可以自动感知到数据的变化。其他组件去取的时候就会取到最新的数据。

**redux-thunk**
redux异步处理中间件

**redux-saga**
redux异步处理中间件

