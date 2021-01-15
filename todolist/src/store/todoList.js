import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_INTEM,
} from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
}

const TodoList = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = [...newState.list, newState.inputValue]
    newState.inputValue = ''
    return newState
  }

  if(action.type === DELETE_TODO_INTEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}

export default TodoList