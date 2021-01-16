import { applyMiddleware, createStore, compose } from 'redux'
import TodoList from './todoList'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
)

const store = createStore(TodoList, enhancer)

export default store
