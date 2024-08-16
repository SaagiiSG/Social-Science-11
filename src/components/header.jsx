import React from 'react'
import Logo from '../assets/logo.svg'
 const Header = (props) => {
    

  return (
        <div className='flex flex-col justify-center items-center w-auto h-aut gap-4 mt-[86px]'>
        <img src={Logo} alt="" />
        <header className='font-sans text-[#d9d9d9] text-[32px]'>{props.header}</header>
        </div>
  )
}

export default Header