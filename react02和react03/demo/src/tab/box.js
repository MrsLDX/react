import React,{Fragment,Component} from 'react'
import NavComponent from './nav'
import List from './list'
class Box extends Component{
  constructor(){
    super()//继承父类构造函数
    this.state={
      defaultSel:'周杰伦'
    }
  }
  shouldComponentUpdate(props,state){
    //优化：是否渲染页面
    if(this.state.defaultSel===state.defaultSel){
      return false
    }else{
      return true
    }
  }
  changeNav=(item)=>{//使用箭头函数，因为bind改变了this指向
    this.setState({defaultSel:item})
  }
  render(){
    console.log('box render')
    let {defaultSel}=this.state
    return(
      <Fragment>
        <NavComponent sel={defaultSel} fun={this.changeNav}></NavComponent>
        <List singer={defaultSel}></List>
      </Fragment>
    )
  }
}
export default Box