import React from 'react'

const Social = ({Icon, Title, name}) => {
    const ti = ['github', 'gmail', 'discord']
  return (
    <li className='menu text-green-400 flex flex-row-reverse items-center gap-3 my-3 cursor-pointer hover:text-purple-400 transition-all duration-400 ease-in-out'>
    {Icon && <Icon className='text-3xl' title={name} />}
 </li>  )
}

export default Social
