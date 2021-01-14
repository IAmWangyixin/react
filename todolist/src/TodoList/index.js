import { Fragment, useState } from 'react'
import { Input, Button, List } from 'antd'
import store from '../store'
import 'antd/dist/antd.css';

const { log } = console
const TodoList = () => {
  log(store.getState())
  const [state, setState] = useState(store.getState())
  const handleInputChange = (e) => {
    const action = {
      type: 'CHANGE_INPUT_VALUE',
      value: e.target.value
    }
    store.dispatch(action)
  }
  const handleButtonClick = () => {
    log('a')
  }
  const handleStoreChange = () => {
    setState(store.getState())
  }
  store.subscribe(handleStoreChange)
  return (
    <Fragment>
      <Input
        placeholder='todo list'
        value={state.inputValue}
        onChange={handleInputChange}
        style={{ width: '500px', margin: '10px' }}
      />
      <Button
        type='primary'
        onClick={handleButtonClick}>提交</Button>
      <List
        style={{ width: '500px', marginLeft: '10px' }}
        bordered
        dataSource={state.list}
        renderItem={item => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
    </Fragment>
  )
}

export default TodoList