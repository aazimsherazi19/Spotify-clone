import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='flex items-center px-4 justify-between w-full font-semibold'>
      <div className='flex items-center gap-2'>
      <img onClick={()=>navigate(-1)} className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_left} alt="" />
      <img onClick={()=>navigate(1)} className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_right} alt="" />
      </div>
      <div className='flex items-center gap-2 '>
       <p className='px-4 py-1 text-[14px] rounded-2xl hidden md:block bg-white text-black text-center cursor-pointer'>Explore Premium</p>
       <p className='px-3 py-1 text-[14px] rounded-2xl hidden md:block bg-black text-white text-center cursor-pointer'>Install App</p>
       <p className='flex items-center justify-center w-7 h-7 rounded-full bg-slate-300 text-black'>A</p>
      </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
      <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
      <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
      <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
    </div>
    </>
  )
}

export default Navbar
