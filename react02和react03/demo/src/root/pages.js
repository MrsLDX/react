import React, {Component}from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
function Goods(){
  return(
    <div>这里是商品页</div>
  )
}
function Banner(){
  return(
    <div>这里是广告页</div>
  )
}
function Vip(){
  return(
    <div>这里是Vip页</div>
  )
}
class Pages extends Component{
  constructor(){
    super()
    this.state={
      rootlist:[{path:'/goods',name:'商品管理',component:Goods},
                {path:'/banner',name:'广告管理',component:Banner},
                // {path:'/vip',name:'vip管理',component:Vip}
              ]
    }
  }
  render(){
    return(
      <div>
        <Switch>
          <Redirect exact to='/goods' from='/'></Redirect>
          {this.state.rootlist.map((item,index)=>{
            return <Route path={item.path} component={item.component} key={index}></Route>
          })}
        </Switch>
      </div>
    )
  }
}
export default Pages