import State from './state'
export default (preState=State,action)=>{
  let newData=preState
  console.log("原数据",newData)
  let {type,params}=action
  switch (type) {
    case 'CHANGE_NUM':
      newData.num+=1
      break;
    case 'CHANGE_NAME':
      newData.name=params
      break;
    default:
      break;
  }
  console.log('新数据',newData)
  return newData
}