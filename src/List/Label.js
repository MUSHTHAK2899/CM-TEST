import React,{Component} from 'react'



export default class Label extends Component {
  render() {
const props=this.props;
const style=props.isActive? {background:'green'} :{background:'orange'}

    return (
        
    
<span onClick={()=>{
props.onAction(props.isActive ? 'active':'nonactive')
}} style={style} className='cursor-pointer bg-green-700 px-2 py-1  relative top-2 rounded-sm text-center font-semibold text-white'>
  {props.isActive ?'Active':'NonActive'}</span>
       
       
     
    
    )
  }
}
