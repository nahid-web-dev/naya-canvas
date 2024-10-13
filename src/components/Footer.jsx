import React from 'react'
import { GiPaintBrush } from 'react-icons/gi'

// 

import logo from '/logo.png'
import apple from '/apple-pay.png'
import master from '/mastercard.png'
import visa from '/visa.png'
import stripe from '/stripe.png'
import square from '/square.png'
import paypal from '/paypal.png'
import gPay from '/google-pay.png'
import { Link } from 'react-router-dom'
import { CiMail, CiSearch } from 'react-icons/ci'
import { MdOutlinePhone } from 'react-icons/md'
import { FaAngleDown, FaCarSide, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { FiFacebook } from 'react-icons/fi'
import { CgFacebook } from 'react-icons/cg'
import { FaXTwitter } from 'react-icons/fa6'


const Footer = () => {
  return (
    <div className=' px-5 md:px-0'>

      <div className='flex justify-start md:justify-evenly md:flex-row flex-wrap'>

        <div className=' w-1/3 md:w-1/6 min-w-40 flex flex-col gap-1 flex-wrap' >

          <img src={logo} alt="logo" className=' w-32 ' />

          {/* <div className=' flex italic gap-1 w-28 text-xl 2xl:text-2xl relative cursor-pointer' onClick={() => navigate('/')}>
          <h2 className=' text-[#059F58]'>Naya</h2>
          <h2 className=' text-[#12204D]'>Canvas</h2>
          <GiPaintBrush className='absolute text-sm 2xl:text-lg font-extrabold text-[#E65B50] -top-1 2xl:-top-2 -rotate-12 right-0' />
          </div> */}

          <h2 className=' text-gray-600 font-medium text-xs'>Secure Payment Option</h2>

          <ul className=' flex flex-wrap gap-4 justify-start md:gap-0 md:justify-between gap-y-2'>
            <li><img src={master} alt="image" /></li>
            <li><img src={apple} alt="image" /></li>
            <li><img src={visa} alt="image" /></li>
            <li><img src={stripe} alt="image" /></li>
            <li><img src={square} alt="image" /></li>
            <li><img src={paypal} alt="image" /></li>
            <li><img src={gPay} alt="image" /></li>
          </ul>

        </div>

        <div className=' md:w-1/6 w-1/3'>
          <h2 className=' text-lg font-medium text-[#12204D]'>Quick Links</h2>
          <ul className=' text-gray-600'>
            <li><Link to='#'>Home</Link></li>
            <li><Link to='#'>Product</Link></li>
            <li><Link to='#'>Artists</Link></li>
            <li><Link to='#'>Track Order</Link></li>
            <li><Link to='#'>Refund & Exchange</Link></li>
            <li><Link to='#'>Reviews</Link></li>
            <li><Link to='#'>FAQs</Link></li>
            <li><Link to='#'>Privacy Policy</Link></li>
          </ul>
        </div>

        <div className=' md:w-1/6 w-1/3'>
          <h2 className=' text-lg font-medium text-[#12204D]'>Shop by</h2>
          <ul className=' text-gray-600'>
            <li><Link to='#'>Gallery</Link></li>
            <li><Link to='#'>Painting</Link></li>
            <li><Link to='#'>Abstract</Link></li>
            <li><Link to='#'>Wall Art</Link></li>
            <li><Link to='#'>Acrylics</Link></li>
          </ul>
        </div>

        <div className=' md:w-1/6 w-1/3 min-w-[250px]'>
          <h2 className=' text-lg font-medium text-[#12204D]'>Contact us</h2>
          <h4 className=' text-green-500 text-sm font-medium'>Customer Support</h4>
          <ul className=' text-gray-600 font-medium flex flex-col gap-2 my-4'>
            <li className='flex items-center gap-2 border-b border-gray-500 pb-1' ><IoMail className=' text-green-400' /><h2>@nayacanvas.com</h2></li>
            <li className='flex items-center gap-2 border-b border-gray-500 pb-1' ><MdOutlinePhone className=' text-green-400' /><h2>+971 50 678 3883</h2></li>
            <li className='flex items-center gap-2 border-b border-gray-500 pb-1' ><FaCarSide className=' text-green-400' />Order Inquiry</li>
          </ul>
        </div>

      </div>

      <div className=' flex flex-col gap-10 py-5'>
        <div className=' flex flex-col md:flex-row gap-4 md:gap-0 items-center md:justify-around md:mt-12'>

          <Link to='#' className=' text-gray-500'>Terms & Conditions</Link>

          <div className=' flex items-center flex-col gap-2'>
            <h3 className=' font-medium'>FOLLOW US</h3>
            <div className=' text-3xl flex text-[#E65B50] gap-3'>
              <CgFacebook className='border border-[#E65B50] rounded-full p-[1px]' />
              <FaInstagram className='border border-[#E65B50] rounded-full p-[1px]' />
              <FaXTwitter className='border border-[#E65B50] rounded-full p-[4px]' />
              <FaLinkedinIn className='border border-[#E65B50] rounded-full p-[4px]' />
            </div>
          </div>

          <Link to='#' className=' flex items-center text-gray-500'>Cookies Policy <FaAngleDown className=' relative top-[3px] ' /></Link>

        </div>

        <p className=' text-center text-gray-600'>All Right reserved© by naya canvas art 2024</p>

      </div>

    </div>
  )
}

export default Footer