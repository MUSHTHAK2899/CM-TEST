import React from 'react'

export default function Header(props) {
  const{
    oneMenuSelect,
  }= props;
  return (
    <div>
    <div className='bg-blue-500 text-white w-full h-12 flex items-center font-bold '>
 <span className='mr-10 p-10 font-mono text-xl cursor-pointer'>Mushthak</span>
  <span onClick={()=>{ oneMenuSelect('home')}} className='px-5  cursor-pointer' >Home</span>
  <span onClick={()=>{ oneMenuSelect('usage')}} className='px-5 cursor-pointer'>Usage</span>
  <span onClick={()=>{ oneMenuSelect('settings')}} className='px-5 cursor-pointer'>Settings</span>
  <span onClick={()=>{ oneMenuSelect('logout')}} className=' mx-auto mr-10 cursor-pointer'>LogOut</span>
</div>
    </div>
  )
}
