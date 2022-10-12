import React from 'react'

const Menu = ({Icon, Title, Name}) => {
  return (
    <li className='Menu text-white flex items-center gap-2 cursor-pointer px-1 py-2 justify-start space-y-2 tracking-widest group backdrop-sm bg-black/50 rounded-md' title={Name}>
    <Icon className='text-2xl'/>
    <h3 className='group-hover:block group-hover:text-red-100 hidden lg:block' id='title' >{Title}</h3>
  </li>
  )
}

export default Menu
