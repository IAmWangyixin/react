import React, {Fragment} from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css';

const TodoListUI = (props) => (
  <Fragment>
    <Input
      placeholder='todo list'
      value={props.inputValue}
      onChange={props.handleInputChange}
      style={{ width: '500px', margin: '10px' }}
    />
    <Button
      type='primary'
      onClick={props.handleButtonClick}
      >
      提交
    </Button>
    <List
      style={{ width: '500px', marginLeft: '10px' }}
      bordered
      dataSource={props.list}
      renderItem={(item, index) => (
        <List.Item onClick={() => props.handleItemDelete(index)}>
          {item}
        </List.Item>
      )}
    />
  </Fragment>
)
export default TodoListUI