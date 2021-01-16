import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_INTEM,
  INIT_LIST_ACTION
} from './actionTypes';
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_INTEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json')
      .then((res) => {
        const data = res.data//获取数据
        // 改变数据，改变数据需要触发对应的action。
        const action = initListAction(data)
        // action返回的函数可以接受一个dispatch方法
        dispatch(action)
      })
  }
}