import React,{Component} from 'react';

//知识点讲解
// import Store from './store_old/store'
// import Change from './store_old/change'
// class App extends Component{
//   componentDidMount(){
//     Store.subscribe(()=>{
//       //全局状态值改变触发的监听
//       this.setState({})
//     })
//   }
//   render(){
//     let {name}=Store.getState()
//     return(
//       <div>
//         <h3>redux</h3>
//         {name}
//         <hr/>
//         <Change></Change>
//       </div>
//     )
//   }
// }


//计数器

// import ChangeNum from './num/changeNum'
// import ShowNum from './num/showNum'
// function App(){
//   return(
//     <div>
//       <ShowNum></ShowNum>
//       <ChangeNum></ChangeNum>
//     </div>
//   )
// }

//redux写 todolist实例

import Box from './todolist/Box'
function App(){
  return(
    <div>
      <Box></Box>
    </div>
  )
}
export default App
