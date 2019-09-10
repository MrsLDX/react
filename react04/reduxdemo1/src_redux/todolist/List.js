import React,{Component} from 'react'
import Store from './store/store'
import actionCreator from './store/actionCreator'
class List extends Component{
  componentDidMount(){
    Store.subscribe(()=>{
      this.setState({})
    })
  }
  del=(index)=>{
    actionCreator.dellist(index)
  }
  render(){
    let {list}=Store.getState()
    return(
      <div>
        <ul>
          {list.map((item,index)=>{
            return <li key={index}>{item}
                      <button onClick={this.del.bind(this,index)}>删除</button>

                  </li>
          })}
        </ul>
      </div>
    )
  }
}
export default List