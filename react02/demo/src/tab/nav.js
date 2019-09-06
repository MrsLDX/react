import React,{Component,Fragment} from 'react'
class NavComponent extends Component{
  constructor(){
    super()
    this.state={
      navs:['周杰伦','薛之谦','蔡徐坤'],
      defaultSel:'周杰伦'
    }
  }
  renderNav(data){
    if(!data.length) return '暂无数据'
    return(
      <ul>
        {data.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    )
  }
  render(){
    let {navs,defaultSel}=this.state
    return(
      <Fragment>
        {this.renderNav(navs)}
      </Fragment>
    )
  }
}
export default NavComponent