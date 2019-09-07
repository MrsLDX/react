import React,{Component,Fragment} from 'react'
import {HashRouter,Link,Route,NavLink,Switch,Redirect} from 'react-router-dom'
import './index.css'
function Home(){
  return(
    <div>这里是home</div>
  )
}
function Singer(props){
  console.log('singer',props)
  return(
    <div>这里是歌手</div>
  )
}
function Info(){
  return(
    <div>这里是个人信息</div>
  )
}
function Login(){
  return(
    <div>这里是登录</div>
  )
}
function NotFind(){
  return(
    <div>找不到网页</div>
  )
}
class Box extends Component{
  render(){
    console.log('router',this)
    return(
      <HashRouter>
        {/* 导航 */}
        <NavLink to='/home' activeClassName='red'>首页</NavLink>
        <NavLink to='/singer' activeClassName='red'>歌手</NavLink>
        <NavLink to='/rank' activeClassName='red'>排行</NavLink>
        <NavLink to='/my' activeClassName='red'>我的</NavLink>
        <Switch>
          <Redirect exact from='/' to='/home'></Redirect>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/singer' component={Singer}></Route>
          <Route path='/my' render={(props)=>{
            return(
              <div>
                <h3>这里是我的</h3>
                <Link to='/my/info'>个人信息</Link>
                <Link to='/my/login'>登录</Link>
                <Switch>
                  <Redirect exact from='/my' to='/my/login'></Redirect>
                  <Route path='/my/login' component={Login}></Route>
                  <Route path='/my/info' component={Info}></Route>
                </Switch>
              </div>
            )
          }}></Route>
          {/* <Route path='/rank' render={(props)=>{
            return(
              <div>这里是排行</div>
            )
          }}></Route> */}
          <Route exact path='/rank' children={(props)=>{
            return(
              <div>排行</div>
            )
          }}></Route>
          <Route component={NotFind}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default Box