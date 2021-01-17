import {
  applyMiddleware,
  createStore,
  compose
} from 'redux'
import TodoList from './todoList'
import createSagaMiddleware from 'redux-saga'
import todoSage from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
// )

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
)
// mount it on the Store
const store = createStore(
  TodoList,
  enhancer
)
// then run the saga
sagaMiddleware.run(todoSage)

// render the application

export default store