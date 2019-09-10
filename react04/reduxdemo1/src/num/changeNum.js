import React,{Component} from 'react'
import ActionCreator from '../store/actionCreator'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
class ChangeNum extends Component{
  render(){
    return(
      <div>
        <hr/>
        <h3>changeNum</h3>
        <button onClick={this.props.changeNum}>add</button>
      </div>
      <div></div>
    )
  }
}
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(ChangeNum)