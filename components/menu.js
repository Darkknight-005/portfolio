import React from 'react'

const Menu = ({Icon, Title, Name, Id}) => {
  return (
    <li className='Menu text-white flex items-center gap-2 cursor-pointer px-1 py-2 justify-start space-y-1 tracking-widest group backdrop-sm bg-black/50 rounded-md ' title={Name} id={Id}>
    {Icon && <Icon className='text-3xl'  />}
    <h3 className='group-hover:block group-hover:text-red-100 hidden' id='title' >{Title}</h3>
  </li>
  )
}

export default Menu
