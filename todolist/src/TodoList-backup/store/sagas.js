import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators';
import axios from 'axios'

function* getInitList(dispatch) {
  try {
    const res = yield axios.get('/list.json')
    const action = initListAction(res.data)
    put(action)
  } catch (e) {
    console.log('get list error')
    const action = initListAction([])
    put(action)
  }
}

function* todoSage() {
  // 接受到GET_INIT_LIST action时，执行getInitList方法
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSage;