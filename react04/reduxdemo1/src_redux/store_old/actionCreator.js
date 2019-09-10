import Store from  './store'
export default {
  changeName(params){
    //创建action type是必须的
    let action={
      type:'CHANGE_NAME',
      params:params
    }
    //通过dispatch将action提交给reducer
    Store.dispatch(action)
  },
  changeAge(params){
    //创建action type是必须的
    let action={
      type:'CHANGE_AGE',
      params:params
    }
    //通过dispatch将action提交给reducer
    Store.dispatch(action)
  },
}