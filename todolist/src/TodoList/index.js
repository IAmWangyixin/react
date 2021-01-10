import React, {useState} from "react";
import "antd/dist/antd.css"
import { Input, Button, List } from "antd";
import store from "../store";
const {log} = console

const TodoList = () => {
    const [state] = useState(store.getState())
    log(store.getState())
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <Input value={state.inputValue} placeholder='todo info' style={{width: '300px', marginRight: '10px'}} />
            <Button type="primary">提交</Button>
            <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={state.list}
                renderItem={item => (
                    <List.Item>{item}</List.Item>
                )}
                />
        </div>
    )
}

export default TodoList