import React,{Fragment,Component}from 'react'
// Fragment 可以当成jsx的根元素使用，并且不会渲染到页面
console.log(React)
class Hehe extends Component{
  constructor(){
    super()//执行父类的构造函数
    this.state={
      name:'韩梅梅'
    }
  }
  render(){
    console.log('render',this)
    return(
      <p>这里是box组件</p>
    )
  }
}
export default Hehe