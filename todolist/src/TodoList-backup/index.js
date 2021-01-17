import React, {
  useState
} from 'react'
import TodoListUI from './indexUI'
import store from '../store'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  // getTodoList,
  // initListAction
  getInitList
} from '../store/actionCreators'

const {
  log
} = console

const action = getInitList()
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

/* class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleButtonClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  render() {
    log('todoList')
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
} */

export default TodoList