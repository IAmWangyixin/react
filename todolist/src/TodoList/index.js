import { useState } from 'react'
import TodoListUI from './indexUI'
import store from '../store'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
} from '../store/actionCreators'

// const { log } = console
const TodoList = () => {
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