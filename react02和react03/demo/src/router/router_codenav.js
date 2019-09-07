import  React,{Component,Fragment} from 'react'
import {HashRouter,Link,Route,NavLink,Switch,Redirect} from 'react-router-dom'
import './index.css'

function Home (){
  return(
    <div>
      这里是home
    </div>
  )
}
function NotFind(){
  return(
    <div>
      你的页面打了样
    </div>
  )
}
function Info(){
  return(
    <div>
       个人信息
    </div>
  )
}
function Login(props){
  console.log('login组件',props)
  return(
    <div>
      登录
    </div>
  )
}
class My extends Component{
  jump=(path)=>{
    this.props.history.push(`/my${path}`)
  }
  render(){
    console.log('my',this)
    return(
      <div>
        我的
        <ul>
          <li onClick={this.jump.bind(this,'/login')}>登录</li>
          <li onClick={this.jump.bind(this,'/info')}>信息</li>
        </ul>
        <Route path='/my/login' component={Login}></Route>
        <Route path='/my/info' component={Info}></Route>
      </div>
    )
  }
}
class Box extends Component{
  render(){
    console.log('router',this)
    return(
      <HashRouter>
        <NavLink to='/home' activeClassName='red'>首页</NavLink>
        <NavLink to='/my' activeClassName='red'>我的</NavLink>
        <Switch>
          <Redirect exact from='/' to='/home'></Redirect>
          <Route exact path='/home' component={Home}></Route>
          <Route path='/my' component={My}></Route>
          <Route Component={NotFind}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default Box