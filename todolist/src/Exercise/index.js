import { Component, Fragment } from "react"
import TodoItem from "./TodoItem"
import axios from "axios";
const {log} = console

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleButtonClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, this.state.inputValue],
      inputValue: ''
    }))
    // console.log(this.ul.querySelectorAll('div').length) //总会比真实长度少1
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={item}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }
  componentWillReceiveProps(nextProps) {
    log('parent componentWillReceiveProps:', nextProps)
  }

  shouldComponentUpdate(nextProps) {
    log('parent shouldComponentUpdate:', nextProps)
    return true;
  }

  componentDidMount() {
    axios.get('api/todolist')
    .then(() => {log('success')})
    .catch(() => {log('error')})
  }

  render() {
    log('parent render')

    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button
            type="button"
            onClick={this.handleButtonClick}>
            提交
          </button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
