import React from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { GiPaintBrush } from 'react-icons/gi'
import { PiShoppingCartLight } from 'react-icons/pi'
import { NavLink, useNavigate } from 'react-router-dom'

import flag from '/flag.png'
import { IoChevronDown } from 'react-icons/io5'

import logo from '/logo.png'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='bg-[#F5FFFB] h-[50px] md:h-[70px] 2xl:h-[100px] flex justify-between px-6 md:px-6 lg:px-16 2xl:px-36 items-center'>


      <img src={logo} alt="logo" className=' h-10' onClick={() => navigate('/')} />

      {/* <div className=' flex italic gap-1 text-xl 2xl:text-2xl relative cursor-pointer' onClick={() => navigate('/')}>
        <h2 className=' text-[#059F58]'>Naya</h2>
        <h2 className=' text-[#12204D]'>Canvas</h2>
        <GiPaintBrush className='absolute text-sm 2xl:text-lg font-extrabold text-[#E65B50] -top-1 2xl:-top-2 -rotate-12 right-0' />
      </div> */}

      <ul className='hidden md:flex md:gap-3 text-lg lg:gap-5 xl:gap-10 2xl:text-xl text-[#060606]'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/products'>Products</NavLink></li>
        <li><NavLink to='/story'>Story</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>

      <div className=' hidden md:flex md:gap-4 lg:gap-10'>

        <div className=' flex text-2xl 2xl:text-4xl lg:gap-5'>
          <div className='lg:px-3 md:px-2 flex items-center border-green-500 border rounded-3xl'>
            <CiSearch className=' ' />
          </div>
          <div className='text-[#12204D] flex items-center gap-2 px-3 border-gray-400 lg:border rounded-3xl relative'>
            <div className=' hidden lg:block relative'>
              <CiHeart />
              <div className='absolute -top-0 -right-1 text-xs h-3 w-3 bg-[#059F58] rounded-full flex items-center justify-center font-medium text-white'>
                <p>0</p>
              </div>
            </div>
            <p className='hidden lg:block border-r h-[70%] border-[#060606]'></p>
            <div className=' relative'>
              <PiShoppingCartLight />
              <div className='absolute -top-0 -right-1 text-xs h-3 w-3 bg-[#0F3DD2] rounded-full flex items-center justify-center font-medium text-white'>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>

        <div className=' flex items-center gap-1'>
          <FaRegUser className=' text-2xl 2xl:text-3xl text-[#12204D]' />
          <div className=' flex flex-col items-center leading-3'>
            <h2 className='font-medium text-[#12204D]'>Account</h2>
            <p className=' text-xs 2xl:text-sm text-gray-600'>login/register</p>
          </div>
        </div>

        <div className=' flex items-center gap-1'>
          <img src={flag} alt="flag" className=' h-3 2xl:h-4' />
          <IoChevronDown className=' text-gray-500 2xl:text-xl' />
        </div>
      </div>
    </div>
  )
}

export default Navbar