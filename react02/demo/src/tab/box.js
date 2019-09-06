import React,{Fragment,Component} from 'react'
import NavComponent from './nav'
class Box extends Component{
  constructor(){
    super()//继承父类构造函数
  }
  render(){
    return(
      <Fragment>
        <NavComponent></NavComponent>
      </Fragment>
    )
  }
}
export default Box