import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
class NavComponent extends Component{
  constructor(){
    super()
    this.state={
      rootlist:[{path:'/goods',name:'商品管理'},
                {path:'/banner',name:'广告管理'},
                {path:'/vip',name:'vip管理'}
              ]
    }
  }
  jump=(path)=>{
    this.props.history.push(path)
  }
  render(){
    return(
      <div>
        <ul>
          {this.state.rootlist.map((item,index)=>{
            return <li key={index}
                      onClick={this.jump.bind(this,item.path)}
                    >{item.name}</li>
          })}
        </ul>
      </div>
    )
  }  
}
export default withRouter(NavComponent)