import React from 'react'
import Label from './Label'

export default function ListItem(props) {
    const { title,descr,isActive,onDelete,onLabelClick}=props
  return (
         <div className=' border-2 border-black container mx-auto mt-5 border-opacity-20 p-5'>
           <div className='flex justify-between '>
           <h1 className='font-bold font-serif'>{title}</h1>
      <label className='cursor-pointer text-xs text-blue-700' onClick={onDelete}>Delete</label>
           </div>
      
      <h2 className='opacity-50 '>{props.dscptn}</h2>
        <Label isActive={isActive} onAction={onLabelClick}/>
        
    </div>
  )
}
