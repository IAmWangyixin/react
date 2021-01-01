# react-learning-demo
react 学习demo以及笔记

## react井字游戏笔记
1. [状态提升](https://github.com/wangyimei/react-learning-demo/tree/master/demo1#lifting-state-up%E7%8A%B6%E6%80%81%E6%8F%90%E5%8D%87)
2. [不可变性在react中的重要性](https://github.com/wangyimei/react-learning-demo/tree/master/demo1#%E4%B8%8D%E5%8F%AF%E5%8F%98%E6%80%A7%E5%9C%A8react%E4%B8%AD%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7)
3. [函数式组件](https://github.com/wangyimei/react-learning-demo/tree/master/demo1#function-components%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)
4. [key](https://github.com/wangyimei/react-learning-demo/tree/master/demo1#keys)

## React 官网阅读笔记
### 组件
1. 组件包含由类创建的组件(class component)和函数式组件（simple components）。一个由类创建的组件必包含一个`render()`，并且`return`返回元素中只能有一个父元素。tips: 如果`return`只包含一行内容，那就不需要用括号括起来了。[来自Tania Rascia博客。](https://www.taniarascia.com/getting-started-with-react/)

## 渲染
`ReactDOM.render()` 渲染元素。
- 更新已渲染元素
React 元素是**不可变对象**，一旦被创建就无法更改它的属性或者自元素。更新 UI 的唯一方式是创建一个全新的元素并将其传入`ReactDOM.render()`。
- react 只更新它需要更新的部分
React 会将元素和它的子元素与它们之前的状态进行比较，只更新必要的部分来使DOM达到预期的状态。

## 组件 & props
当 React 元素为用户自定义组件时，它会将`JSX`所接收的属性转换成单个对象传递给组件，这个对象被称之为`props`。
- 组件名称必须以大写字母开头。React会将以小写字母开头的组件视为 DOM 原生组件。

建议从组件自身的角度命名props，而不是依赖于调用组件的上下文命名。

`props`的只读性：组件无论是通过函数式声明还是Class声明，都不能修改自身的props

## state & 生命周期
`State`与`props`类似，但是`state`是私有的，并且完全受控于当前组件。
**函数组件不包含`state`，所以如果组件内需要包含`state`需转换成`Class`组件。**
转换过程如下：
1. 创建一个同名的 ES6 Class，并继承于`React.Component`,
2. 将函数体的内容（即`return`）放在`render`方法中,
3. 在`render`方法中使用`this.props`替换`props`.

### 正确的使用state
1. 不要直接修改`state`,而是使用`setState`,构造函数是唯一可以给`this.state`赋值的地方。
```
// wrong
this.state.comment = 'hello';

// correct
this.setState({
    comment: 'hello'
});
```
2. State的更新可能是异步的
为了提升性能，React 可能会把多个`setState`调用合并成一个。`this.state`和`this.props`的值都是异步更新的，所以不能依赖它们的值更新下一个状态的`state`。
```
// wrong
this.setState({
    count: this.state.count + this.props.increment
})

//correct
this.setState((state, props) => ({
    count: state.count + props.increment
}));
```
3. State的更新会被合并
当你调用`setState()`的时候，React 会把提供的对象合并到当前的对象中。

## 条件渲染
### 阻止组件渲染
如果希望隐藏组件，即使它已经被其他组件渲染。此时可以让`return`直接返回`null`，而不进行任何渲染。在组件中让`return`直接返回`null`并不会影响组件的生命周期。

## list & key
### 包含key的组件提取
如`demo5`所示，`key`应该在数组上下文中被指定。
> 一个好的经验法则是：`map()`中的元素需要设置`key`。

### key只是在兄弟节点之间必须唯一
数组元素中的`key`在其兄弟节点之间必须是唯一的，但不需要全局唯一。当我们创建两个不同的数组节点时，可以使用相同的`key`值。

# 路由
路由配置[router](https://github.com/wangyimei/react-learning-demo/tree/master/demo1/src/router)

# Redux 
状态管理学习[counter](https://github.com/wangyimei/react-learning-demo/tree/master/demo1/src/store).demo1中counter例子。
在 Redux 应用中，所有的 state 都被保存在一个单一对象中。

## action
> action是把数据从应用传到store的载体。它是store数据的唯一来源，一般通过`store.dispatch()`将action传到store。

`action`用于描述（定义）一系列应用中的可以触发`state`变化的操作。

## reducer
> `reducer`就是一个纯函数，接收旧的`state`和`action`,返回新的`state`。`reducer`一定要保持纯净。只要传入的参数相同，返回计算得到的下一个`state`就一定相同。没有特殊情况、没有副作用、没有API请求、没有变量修改、单纯执行计算。

`reducer`用于描述（处理）`action`中定义的操作触发后应用如何改变`state`。简单说就是`reducer`用于处理应用的`state`的更新或者变化。

## store
`store`能维持应用的`state`，并在发起`action`的时候调用`reducer`。`store`是把它们联系到一起的对象。Store的职责有：
- 维持应用的`state`
- 提供`getState()`方法获取`state`
- 提供`dispatch()`方法更新`state`
- 通过`subscribe(listener)`注册监听器
- 通过`subscribe(listener)`返回的函数注销监听器

## 数据流
严格的单向数据流是Redux架构的设计核心。
Redux应用中数据的生命周期遵循以下4个步骤：
1. 调用`store.dispatch(action)`,可以在任意地方调用该方法;
2. Redux store调用传入的`reducer`,Store会把两个参数传入`reducer`：当前的`state`树和`action`。
3. 根`reducer`应该把多个子`reducer`输出合并成一个单一的`state`树；
4. Redux Store 保存了根`reducer`返回的完整的`state`树。
