import React from 'react'
import HeroImg from '../assets/Hero.jpg'
function Hero() {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-25 justify-between items-center h-screen w-full relative'>
        <div className='px-5 md:px-10 flex flex-col items-start justify-center w-full gap-4'>
            <div className='bg-linear-to-t from-[#4e46e56c] to-transparent h-70 w-full absolute bottom-0 left-0'></div>
            <p className='border border-green-400 rounded-full px-5 py-1 text-green-500 font-semibold bg-green-100 flex items-center gap-1'><p className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></p>Integrated Solution for College Students</p>
            <h1 className='text-6xl font-bold'>Meet The World's Laziest Figma Design System.</h1>
            <p className='text-md font-semibold text-gray-800'>slothUI is the ultimate FREE Figma design tool tailored for lazy entrepreneurs, coding coach potatoes, and design procrastinators.</p>
            <button className='px-10 py-2 bg-[#4F46E5] cursor-pointer text-white font-semibold rounded-full z-10 hover:bg-[#3c34e1] transition-all duration-400 ease-in'>Get Started</button>
        </div>
        <div className='px-5 md:px-10'>
            <img src={HeroImg} alt="hero" className='w-full h-full object-contain'/>
        </div>
    </div>
    </>
  )
}

export default Hero