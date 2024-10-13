import React from 'react'
import { PiShoppingCartSimple } from 'react-icons/pi'

const Card = ({ item }) => {
  return (
    <div className=' w-[240px] mx-auto'>
      <img src={item.img} alt="img" className=' w-full h-[300px] object-cover' />
      <div className=' flex justify-between items-end text-gray-700 font-medium'>
        <div className=' flex flex-col justify-end'>
          <h2 className='text-xs '>{item.name}</h2>
          <h2 className=' text-sm'>{item.title}</h2>
        </div>
        <div className=' flex items-center gap-4 text-sm border-b border-gray-400'>
          <p>AED {item.price}</p>
          <PiShoppingCartSimple />
        </div>
      </div>
    </div>
  )
}

export default Card