import React from 'react'
import ReactDOM from 'react-dom'
// import TodoList from './Exercise'
import TodoList from './TodoList'
// import App from "./App";
import { Provider } from 'react-redux'
import store from './store'

// import reportWebVitals from './reportWebVitals'

// StrictMode下部分生命周期函数会被重复调用
// ReactDOM.render(
//   <React.StrictMode>
//     <TodoList />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// ReactDOM.render(<TodoList />,
//   document.getElementById('root')
// )

// Provider连接了store，provider内部所有的组件都能访问store了。
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)
ReactDOM.render(App, document.getElementById('root'))

// reportWebVitals()
