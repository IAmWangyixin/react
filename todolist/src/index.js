import React from 'react'
import ReactDOM from 'react-dom'
// import TodoList from './Exercise'
import TodoList from './TodoList'
// import App from "./App";

// import reportWebVitals from './reportWebVitals'

// StrictMode下部分生命周期函数会被重复调用
// ReactDOM.render(
//   <React.StrictMode>
//     <TodoList />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

ReactDOM.render(<TodoList />,
  document.getElementById('root')
)

// reportWebVitals()
