import React,{Fragment,Component} from 'react'
class Hehe extends Component{
  constructor(){
    super()//执行父类的构造函数
    this.state={
      name:'韩梅梅',
      age:16
    }
  }
  submit=()=>{
    console.log(this.state)
    //使用此方式可以获取所有表单元素value值，不需要单个获取
  }
  render(){
    return(
      <p>
        <input type='text' value={this.state.name} onChange={(e)=>{
          //将表单元素的value值绑定state，需要通过改变state值来改变value值
          console.log(e.target.value)
          this.setState({name:e.target.value})
        }}/>
        <input type='text' value={this.state.age} onChange={(e)=>{
          console.log(e.target.value)
          this.setState({age:e.target.value})
        }}/>
        <button onClick={this.submit}>提交</button>
      </p>
    )
  }
}
export default Hehe
