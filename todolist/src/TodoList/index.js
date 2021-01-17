import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  getChangeInuptAction,
  getAddItemAction,
  getDeleteAction
} from '../store/action/creator';

const {log} = console
const TodoList = (props) => {
  const {
    inputValue,
    list,
    changeInputValue,
    handleButtonClick,
    handleDelete
  } = props
  return (
    <Fragment>
      <div>
        <input 
          value={inputValue}
          onChange={changeInputValue}
          />
        <button onClick={handleButtonClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index} onClick={() => handleDelete(index)}>{item}</li>
          })
        }
      </ul>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue, // store中的inputValue映射到组件props上的inputValue.
    list: state.list
  }
}

// store.dispatch props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = getChangeInuptAction(e.target.value)
      log(action)
      dispatch(action)
    },
    handleButtonClick() {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleDelete(index) {
      const action = getDeleteAction(index)
      dispatch(action)
    }
  }
}

// 把TodoList组件与store相连接,
// 连接规则mapStateToProps。把store中的数据映射到组件的props中。
// dispatch:store.dispatch。把store.dispatch挂载到props上。
// connect(mapStateToProps, mapDispatchToProps)(TodoList)返回一个容器组件。
// 此时TodoList组件是一个UI组件，connect把映射关系和业务逻辑集成到了UI组件中，此时connect返回的就是一个容器组件了。
// 什么是容器组件呢：里面是一些业务逻辑数据啊派发啊，对UI组件进行了包装，它去调用UI组件，在调用前他把数据和方法都准备好了。
// 此时导出的就是一个容器组件。
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)