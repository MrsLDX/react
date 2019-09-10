import React,{Component} from 'react'
import {connect} from 'react-redux'
class ShowNum extends Component{ 
  render(){
    console.log('showNum',this)
    return(
      <div>
        <h3>showNum</h3>
        {this.props.num}
      </div>
    )
  }
}
// let mapStateToProps=(state)=>{
//   return state
// }
export default connect(state=>state)(ShowNum)