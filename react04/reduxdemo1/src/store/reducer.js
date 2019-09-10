import State from './state'
export default (preState=State,action)=>{
  let newData=JSON.parse(JSON.stringify(preState))
  let {type,params}=action
  switch (type) {
    case 'CHANGE_NUM':
      newData.num+=1
      break;
    default:
      break;
  }
  return newData
}