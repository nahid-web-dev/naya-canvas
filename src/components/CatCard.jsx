import React from 'react'

import productBg from '/product-bg.png'

const CatCard = ({ item }) => {
  return (
    <div className=' mx-auto relative h-[270px] w-[222px] overflow-hidden'>
      <img src={productBg} alt="image" className=' absolute h-full' />
      <div className=' relative pr-5 pl-3 py-4 h-full w-full'>
        <img src={item.image} alt="image" className=' h-full w-full ' />
        <h2 className=' absolute bottom-4 text-white bg-black opacity-65  text-center w-[86%] left-[48%] -translate-x-1/2'>{item.type}</h2>
      </div>
    </div>
  )
}

export default CatCard