import { combineReducers } from 'redux'
import counter from './counter'
import { 
    visibilityFilter,
    todos
 } from './todo'

export default combineReducers({
    counter,
    visibilityFilter,
    todos
});