import React from 'react'
import eyeImg from '/eye-img.jpg'
import { FaInstagram, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { BsArrowRight } from 'react-icons/bs'
import Card from '../components/Card'

// Slider

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//  bg-images

import bg1 from '/bg1.png'
import heroBg from '/hero-bg.jpg'
import hero2 from '/hero2.png'
import sideImg from '/side-img.png'


//  product images
import img1 from '/img1.jpg';
import img2 from '/img2.jpg';
import img3 from '/img3.jpg';
import img4 from '/img4.jpg';
import img5 from '/img5.jpg';
import img6 from '/img6.jpg';

// 2nd part product images
import productBg from '/product-bg.png'
import image1 from '/image1.jpg'
import image2 from '/image2.jpg'
import image3 from '/image3.jpg'
import CatCard from '../components/CatCard'


//
import bottomImg from '/btm-img.jpg'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { PiShoppingCartLight } from 'react-icons/pi'

// slider images
import slImg1 from '/slide-img1.jpg'
import slImg2 from '/slide-img2.jpg'
import slImg3 from '/slide-img3.png'
import slImg4 from '/slide-img4.png'

const Home = () => {

  const heroProducts = [
    {
      img: img1,
      name: 'Floral Art',
      title: 'Sunset Serenade',
      price: 600,
    },
    {
      img: img2,
      name: 'Wall Art',
      title: 'Urban Dreams',
      price: 890,
    },
    {
      img: img3,
      name: 'Acrylic Art',
      title: 'Mystic Forest',
      price: 750,
    },
    {
      img: img4,
      name: 'Floral Art',
      title: 'Sunset Serenade',
      price: 600,
    },
    {
      img: img5,
      name: 'Wall Art',
      title: 'Urban Dreams',
      price: 890,
    },
    {
      img: img6,
      name: 'Acrylic Art',
      title: 'Mystic Forest',
      price: 750,
    }
  ];

  const categoryProducts = [
    {
      image: image1,
      type: 'ABSTRACT',
    },
    {
      image: image2,
      type: 'BOTANICAL',
    },
    {
      image: image3,
      type: 'WALL ART',
    },
    {
      image: image1,
      type: 'ABSTRACT',
    },
    {
      image: image2,
      type: 'BOTANICAL',
    },
    {
      image: image3,
      type: 'WALL ART',
    },

  ]

  const sliderImgs = [slImg1, slImg2, slImg3, slImg4]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };





  return (
    <div>

      <div className=' px-2 md:px-10 lg:px-16 2xl:px-40 bg-[#F5FFFB] md:pt-16'>


        <div className=' md:hidden py-5 flex gap-2 justify-center items-center'>
          <div className=' relative w-[80%] max-w-[340px] min-w-[260px]'>
            <input type="text" className=' text-gray-500 py-2 w-full px-4 sm:px-8 rounded-3xl border border-green-400 ' />
            <CiSearch className=' absolute top-1/2 right-2 -translate-y-1/2 text-xl text-gray-700 ' />
          </div>
          <div className=' relative'>
            <PiShoppingCartLight className=' text-4xl' />
            <div className='absolute -top-0 -right-1 text-xs h-4 w-4 bg-[#0F3DD2] rounded-full flex items-center justify-center font-medium text-white'>
              <p>0</p>
            </div>
          </div>
        </div>

        <div className=' md:hidden flex items-center flex-col'>
          <div className=' flex gap-1 items-center text-orange-500'><FaStar /><FaStar /><FaStar /><FaStar /></div>
          <h2 className=' text-gray-500 mb-5'>(12360) Reviews</h2>
        </div>

        <div className=' md:flex-row flex-col items-center  flex gap-5 md:gap-0 md:justify-evenly'>
          <h2 className=' font-extralight text-5xl lg:text-7xl xl:text-8xl'>Elevate Your</h2>
          <div className=' md:max-w-[400px] lg:max-w-[480px] w-[80%]'>
            <img src={eyeImg} alt="image" className=' h-12 md:h-28 w-full object-cover rounded-full' />
          </div>
        </div>

        <div className=' flex md:flex-row flex-col-reverse gap-5 md:gap-0 justify-between items-center py-4 md:py-10'>

          <div className=' flex flex-col gap-2'>

            <div className='md:flex hidden items-center gap-3'>
              <div className=' flex gap-1 items-center text-orange-500'><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className='text-xs'>(12360) Reviews</p>
            </div>

            <p className=' md:text-base text-xs md:text-start text-center leading-4 text-[#060606] '> <Link className=' underline'>Explore</Link> the latest arrivals from our new sellers <br /> and find your next masterpiece today!</p>
          </div>

          <h2 className=' text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-extralight'>Space with Art</h2>
        </div>

        <div className=' flex md:flex-row flex-col md:justify-center gap-3 items-center md:items-start md:gap-10 py-5'>
          <Link className='hover:gap-8 transition-all font-medium border border-black flex justify-center gap-2 items-center p-5 w-[200px] h-[50px] rounded-3xl' to='#'>
            <p>Shop Now</p><BsArrowRight className=' relative top-[2px]' />
          </Link>
          <Link className=' hover:gap-8 transition-all text-white font-medium bg-[#059F58] flex justify-center gap-2 items-center p-5 w-[200px] h-[50px] rounded-3xl' to='#'>
            <p>New Arrivals</p><BsArrowRight className=' relative top-[2px]' />
          </Link>
        </div>

      </div>

      <div className=' bg-[#F5FFFB] flex justify-center'>
        <img className='w-[95%]' src={bg1} alt="background image" />
      </div>

      <div className=' relative py-10'>
        <img src={heroBg} alt="Image" className='opacity-30 absolute top-0 left-0 h-full w-full -z-10' />

        <div className=' text-center text-[#12204D] leading-3 text-lg font-medium mb-5 md:mb-0'>
          <h2 className=' md:text-base text-sm'>Our Products</h2>
          <h1 className=' text-5xl md:text-7xl lg:text-9xl font-extralight mb-5'>Fresh Artistry</h1>
          <p className=' text-xs md:text-sm'>Discover our newest paintings from emerging artists, perfect for adding a unique touch to your collection.</p>
        </div>

        <div className=' md:pt-10 lg:pt-24 hidden md:grid grid-cols-3 md:px-10 lg:px-28 md:gap-10 lg:gap-16 xl:gap-20 justify-evenly'>
          {
            heroProducts.map((item, idx) => {
              return <Card item={item} key={idx} />
            })
          }
        </div>

        <div className=' flex md:hidden justify-center items-center'>
          <Slider {...settings2} className=' max-w-[260px]'>
            {
              heroProducts.map((item, idx) => {
                return (
                  <div key={idx} className=''>
                    <Card item={item} />
                  </div>
                )
              })
            }
          </Slider>
        </div>

      </div>

      <div className=' my-10 lg:my-20 flex flex-col items-center '>
        <img src={hero2} alt="hero-image" className=' w-[90%]' />
        <div className=' relative'>
          <img className=' w-full object-cover absolute top-0 left-0' src={heroBg} alt="image" />
        </div>
      </div>

      <div className='my-20 relative bg-[#27B674] z-10 md:py-0 py-10 md:h-[400px] flex md:flex-row flex-col gap-10 md:gap-0 items-center px-5 md:px-7 lg:px-20 md:justify-between'>
        <img src={heroBg} alt="image" className='opacity-20 absolute top-0 left-0 h-full object-cover w-full -z-10' />

        <div className=' z-10 flex items-center flex-col gap-3 md:gap-5 text-white font-extralight'>
          <h4 className=' text-base md:text-lg'>About Naya Canvas</h4>
          <h2 className=' text-4xl md:text-6xl font-normal md:font-extralight'>Why Buy From <br /> Naya Canvas?</h2>
          <h3 className=' text-xs md:text-sm md:text-start text-center'>At Naya Canva we want you to get the best br pieaces <br /> of art that shows who you really are !</h3>
          <Link to='#' className='flex justify-center items-center md:text-base text-sm w-[170px] md:w-[230px] h-[40px] md:h-[50px] border-2 border-white rounded-3xl text-white bg-[#E65B50] hover:w-[250px] transition-all' >View Our Collection</Link>
        </div>

        <img src={sideImg} alt="img" className=' w-[70%] min-w-[260px] max-w-[340px] md:w-auto md:h-[110%]' />
      </div>


      <div className=' px-10 md:px-2 lg:px-10 flex flex-col items-center'>

        <div className=' hidden lg:flex items-end justify-center'>
          <p className=' lg:translate-x-[30%] xl:translate-x-[40%] md:translate-y-8 text-xs '>Step into the NayaCanvas Gallery, where creativity and innovation <br /> meet. Discover stunning paintings that blend artistic brilliance with <br /> captivating themes, perfect for enhancing your space. Explore our <br /> collection and find your next masterpiece today!</p>

          <h2 className=' font-extralight text-center md:text-6xl lg:text-5xl xl:text-7xl '>A Blend Of Genius <br /> In Art</h2>

          <Link to='#' className=' md:-translate-x-[60%] md:translate-y-8 px-10 hover:px-12 transition-all py-3 text-sm rounded-3xl border border-gray-400 text-gray-500 '>More About Us</Link>
        </div>

        <div className=' flex lg:hidden flex-col text-center items-center gap-5'>

          <h2 className='  text-center font-extralight text-4xl'>A Blend Of <br /> Genius In Art</h2>

          <p className=' text-xs leading-4'>Step into the NayaCanvas Gallery, where creativity and innovation  meet. Discover stunning paintings that blend artistic brilliance with captivating themes, perfect for enhancing your space. Explore our collection and find your next masterpiece today!</p>
        </div>


        <div className='sm:hidden my-6 md:my-20 flex justify-center items-center'>
          <Slider {...settings2} className=' max-w-[260px]'>
            {
              sliderImgs.map((imgSrc, idx) => {
                return (
                  <div key={idx} className=''>
                    <img src={imgSrc} alt="image" className='mx-auto w-[250px] h-[320px] lg:w-[300px] lg:h-[400px]  object-cover ' />
                  </div>
                )
              })
            }
          </Slider>
        </div>

        <div className=' hidden sm:block lg:hidden my-6 md:my-20 w-[90%]'>
          <Slider {...settings3}>
            {
              sliderImgs.map((imgSrc, idx) => {
                return (
                  <div key={idx} className=''>
                    <img src={imgSrc} alt="image" className='mx-auto w-[250px] h-[320px] lg:w-[300px] lg:h-[400px]  object-cover ' />
                  </div>
                )
              })
            }
          </Slider>
        </div>


        <Link to='#' className=' md:hidden my-8 block text-center px-10 transition-all py-3 text-sm rounded-3xl border border-gray-400 text-gray-500'>More About Us</Link>


        <div className='hidden lg:block my-20 px-2 w-full'>
          <Slider {...settings}>
            {
              sliderImgs.map((imgSrc, idx) => {
                return (
                  <div key={idx} className=' '>
                    <img src={imgSrc} alt="image" className='mx-auto w-[250px] h-[320px] lg:w-[300px] lg:h-[400px]  object-cover ' />
                  </div>
                )
              })
            }
          </Slider>
        </div>

      </div>

      {/* <h2 className=' text-9xl'>here is the slider</h2> */}

      <div className=' min-h-60 flex flex-col items-center gap-16 my-10 md:mb-32'>
        <div className=' text-[#12204D] flex flex-col items-center '>
          <h4 className=' text-xs'>View artwork by Category</h4>
          <h2 className=' text-6xl font-extralight leading-10'>Categories</h2>
        </div>

        <div className=' lg:px-52 hidden md:grid grid-cols-3 lg:gap-20 md:gap-10 justify-around'>
          {categoryProducts.map((item, idx) => {
            return <CatCard item={item} key={idx} />
          })}
        </div>

        <div className=' flex md:hidden justify-center items-center'>
          <Slider {...settings2} className=' max-w-[250px] pl-5'>
            {
              categoryProducts.map((item, idx) => {
                return (
                  <div key={idx}>
                    <CatCard item={item} />
                  </div>
                )
              })
            }
          </Slider>
        </div>

        <Link to='#' className=' w-[180px] hover:w-[200px] transition-all  py-2 flex justify-center items-center border border-black rounded-3xl'>See more</Link>
      </div>


      <div className=' relative flex flex-col items-center mb-10 md:pt-24 pt-5 md:pb-20 rounded-b-[20%] overflow-hidden'>

        <div className=' absolute bg-[#12204D] top-0 left-0 h-full w-full opacity-90 -z-10 '></div>
        <img src={heroBg} alt="image" className=' absolute top-0 left-0 w-full h-full object-cover opacity-80 -z-20' />

        <div className=' flex flex-col items-center gap-8 z-10 text-white font-extralight'>
          <h2 className=' hidden md:block md:text-6xl font-extralight'>Follow Us On Instagram</h2>
          <h2 className=' md:hidden text-4xl text-center font-extralight'>Follow Us <br /> On Instagram</h2>
          <div className=' h-[40px] w-[160px] flex gap-1 items-center rounded-3xl border border-black justify-center'>
            <FaInstagram className=' text-2xl' />
            <h4>@nayacanvas</h4>
          </div>
        </div>

        <div>
          <div className=' h-10 rounded-b-[100%] bg-[#12204D] opacity-100 z-20 relative top-5 '></div>
          <div className=' flex justify-evenly'>
            <img src={bottomImg} alt="image" className=' w-1/5' />
            <img src={bottomImg} alt="image" className=' w-1/5' />
            <img src={bottomImg} alt="image" className=' w-1/5' />
            <img src={bottomImg} alt="image" className=' w-1/5' />
          </div>
          <div className=' h-10 rounded-t-[100%] bg-[#12204D] opacity-100 z-20 relative bottom-5 '></div>
          <div className=' h-10 md:h-20 rounded'></div>
        </div>

      </div>


    </div>
  )
}

export default Home