import React, { Component } from 'react'

export default class Tools extends Component {
  render() {
    const{
        children,
        onAction,
        LabelValue
    }=this.props;
    const onlyChild =React.Children.only(children);
    const count=React.Children.count(onlyChild.props.children);
    
    return ( 
     <div>
         <div className='w-20 ml-10 mt-3  border border-gray-500 ' >
             <select value={LabelValue} onChange={onAction} name="status" id="">
                 <option value="all">All</option>
                 <option value="active">Active</option>
                 <option value="nonactive">NonActive</option>
             </select>
         </div>
         { children}
     
        <div>
        Total {count} items   
        </div>


     </div>
    )
  }
}
