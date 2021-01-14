import { createStore } from 'redux'
import TodoList from './todoList'

const store = createStore(
  TodoList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
