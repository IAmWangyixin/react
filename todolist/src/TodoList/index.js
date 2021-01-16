import React, { useState } from 'react'
import TodoListUI from './indexUI'
import store from '../store'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList,
} from '../store/actionCreators'
const { log } = console

const action = getTodoList()
store.dispatch(action)

const TodoList = () => {
  log('todoList')
  const [state, setState] = useState(store.getState())
  const handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  const handleButtonClick = () => {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  const handleItemDelete = (index) => {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  const handleStoreChange = () => {
    setState(store.getState())
  }
  store.subscribe(handleStoreChange)
  return (
    <TodoListUI
      inputValue={state.inputValue}
      list={state.list}
      handleInputChange={handleInputChange}
      handleButtonClick={handleButtonClick}
      handleItemDelete={handleItemDelete}
    />
  )
}

export default TodoList