import State from './state'
export default (prestate=State,action)=>{
  //根据action修改全局状态值
  //prestate改变之前的全局状态值
  //action 就是dispatch的action
  let newDate=prestate
  let {type,params} =action
  switch (type) {
    case 'CHANGE_NAME':
      newDate.name=params
      break;
  
    default:
      break;
  }
  console.log(newDate)
  return newDate
}