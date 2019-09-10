import State from './state'
import actionType from './action-type';
export default (prestate=State,action)=>{
  //不能修改原数据
  let newDate=JSON.parse(JSON.stringify(prestate))
  //根据action修改数据
  let {type,params}=action
  console.log(action)
  switch (type) {
    case actionType.ADD_LIST:
      newDate.list.push(params)
      break;
    case actionType.DEL_LIST:
      newDate.list.splice(params,1)
      break;
    default:
      break;
  }
  return newDate
}