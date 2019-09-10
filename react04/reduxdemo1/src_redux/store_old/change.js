import React,{Component} from 'react'
import ActionCreator from './actionCreator'
import Store from './store'
class Change extends Component{
  change(){
    ActionCreator.changeName('李磊')
  }
  render(){
    return(
      <div>
        <h5>修改全局状态值</h5>
        <button onClick={this.change}>改名字</button>
      </div>
    )
  }
}
export default Change