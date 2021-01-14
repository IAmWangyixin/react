import React, { Component } from "react"
import PropTypes from "prop-types"
const { log } = console

class TodoItem extends Component {
  constructor(props) {
    super(props)
    // 提升性能，绑定作用域只绑定一次
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

  componentDidMount() {
    log('componentDidMount')
  }

  // componentWillReceiveProps(nextProps) {
  //     log('child componentWillReceiveProps:', nextProps)
  // }

  shouldComponentUpdate(nextProps) {
    // log('child shouldComponentUpdate:', nextProps)
    return false;
  }

  render() {
    log('child render:')

    const { content } = this.props
    return (
      <div onClick={this.handleClick}>
        { content}
      </div>
    )
  }
}

TodoItem.propTypes = {
  // test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
// TodoItem.defaultProps = {
//     test: 'hello'
// }

export default TodoItem