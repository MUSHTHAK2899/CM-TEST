import React from 'react'
import ListItem from './ListItem'

export default function SimpleList(props) {
    const{
        data,
        onAction,
        onLabelClick
    }=props;
  return (
    <div>
          {
           data.map((obj)=>( 
                <ListItem key={obj.title} title={obj.title} dscptn={obj.dscptn} isActive={obj.isActive} 
                onDelete={()=>{
                  onAction(obj)}}  
                  onLabelClick={onLabelClick}/>
            ))
        }
    </div>
  )
}
