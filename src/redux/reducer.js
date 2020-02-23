// reducer函数块 ： 根据当前state和指定action返回一个新的state
import { combineReducers } from 'redux';

import { 
  SET_HEAD_TITLE, 
  RECEIVE_USER, 
  SHOW_ERROR_MSG, 
  RESET_USER 
} from './action-types' ;
import storageUtils from "../utils/storageUtils";

// 管理headerTitle状态数据的reducer
const initHeadTitle = '';

function headTitle(state = initHeadTitle, action) {
  switch (action.type) {
    case SET_HEAD_TITLE:
      return action.data
    default:
      return state
  }
}

// 管理user状态数据的reducer
const initUser = storageUtils.getUser()

function user(state = initUser, action) { 
  switch (action.type) {
    case RECEIVE_USER: 
       return action.user 
     case SHOW_ERROR_MSG: 
     const errorMsg = action.errorMsg
     // state.errorMsg = errorMsg  // 不要直接修改原本状态数据
     return {...state, errorMsg}
     case RESET_USER: 
       return {} 
     default: return state 
  } 
}

//向外暴露合并之后的总render函数
export default combineReducers({ 
  headTitle, 
  user, 
})

