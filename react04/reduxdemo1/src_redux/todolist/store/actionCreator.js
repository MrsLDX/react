import actionType from './action-type'
import Store from './store'
export default {
  addlist(params){
    let action={
      type:actionType.ADD_LIST,
      params:params
    }
    Store.dispatch(action)
  },
  dellist(params){
    let action={
      type:actionType.DEL_LIST,
      params:params
    }
    Store.dispatch(action)
  }
}