import { 
  CHANGE_INPUT_VALUE,
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
} from './type'

export const getChangeInuptAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_LIST_ITEM
})

export const getDeleteAction = (index) => ({
  type: DELETE_LIST_ITEM,
  index
})