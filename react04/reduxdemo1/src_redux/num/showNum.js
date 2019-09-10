import React,{Component} from 'react'
import Store from '../store/store'
class ShowNum extends Component{ 
  componentDidMount(){
    //全局状态发生改变才会执行
    Store.subscribe(()=>{
      this.setState({})
    })
  }
  render(){
    console.log(Store)
    let {num,name}=Store.getState()
    return(
      <div>
        <h3>showNum</h3>
        {num}
        <br/>
        {name}
      </div>
    )
  }
}
export default ShowNum