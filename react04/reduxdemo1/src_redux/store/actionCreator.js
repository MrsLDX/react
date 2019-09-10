import Store from './store'
export default {
  changeNum(){
    //创建action
    let action={
      type:'CHANGE_NUM'
    }
    Store.dispatch(action)
  },
  changeName(params){
    let action={
      type:'CHANGE_NAME',
      params:params
    }
    Store.dispatch(action)
  }
}