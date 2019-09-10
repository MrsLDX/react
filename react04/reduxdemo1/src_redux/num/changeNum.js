import React,{Component} from 'react'
import ActionCreator from '../store/actionCreator'
class ChangeNum extends Component{
  changeNum(){
    ActionCreator.changeNum()
  }
  changeName(){
    ActionCreator.changeName('李磊')
  }
  render(){
    return(
      <div>
        <hr/>
        <h3>changeNum</h3>
        <button onClick={this.changeNum}>add</button>
        <button onClick={this.changeName}>name</button>
      </div>
    )
  }
}
export default ChangeNum