import React,{Component}from 'react'
import actionCreator from './store/actionCreator'
class Input extends Component{
  constructor(){
    super()
    this.state={
      input:''
    }
  }
  add=()=>{
    actionCreator.addlist(this.state.input)
  }
  render(){
    return(
      <div>
        <input type='text' value={this.state.input} onChange={(e)=>{
          this.setState({input:e.target.value})
        }}/>
        <button onClick={this.add}>add</button>
      </div>
    )
  }
}
export default Input