const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
}

const TodoList = (state = defaultState, action) => {
  if (action.type === 'CHANGE_INPUT_VALUE') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  return state
}

export default TodoList