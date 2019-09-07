import React,{Fragment,Component} from 'react'
import './list.css'
class List extends Component{
  constructor(){
    super()
    this.state={
      list:[]
    }
  }
  initData(singer){
    console.log('网络请求')
    setTimeout(()=>{
      let obj={
        "周杰伦":['稻香','听妈妈的话','算什么男人'],
        "薛之谦":['薛之谦','薛之谦','薛之谦'],
        "蔡徐坤":['唱','跳','篮球']
      }
      let list=obj[singer]
      this.setState({list})
    },500)
  }
  componentDidMount(){
    let singer=this.props.singer
    this.initData(singer)
  }
  componentWillReceiveProps(props){
    this.initData(props.singer)
  }
  shouldComponentUpdate(props,state){
    //判断两个数组中的数据是否相等时，可以将两个数组转换成字符串，再进行比较，否则无法两个数组永远不相等
    if(JSON.stringify(this.state.list)===JSON.stringify(state.list)){
      return false
    }else{
      return true
    }
  }
  render(){
    return(
      <div className='list'>
        <ul>
          {this.state.list.map((item,index)=>{
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}
export default List