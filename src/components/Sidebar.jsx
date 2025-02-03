import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 hidden flex-col lg:flex text-white gap-2'>
      <div className='h-[15%] bg-[#121212] rounded flex flex-col justify-around'>
         <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.home_icon} alt="" />
            <p className='font-bold'>Home</p>
         </div>
         <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.search_icon} alt="" />
            <p className='font-bold'>Search</p>
         </div>
      </div>
      <div className='h-[85%] bg-[#121212] rounded '>
        <div className='flex justify-between items-center p-3'>
            <div className='flex gap-2 items-center'>
                <img className='w-8' src={assets.stack_icon} alt="" />
                <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex gap-2 items-center'>
               <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="" />
               <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="" />
            </div>
        </div>
        <div className='p-4 bg-[#242424] flex flex-col m-2 font-semibold rounded justify-start items-start'>
         <h1>Create your first Playlist</h1>
         <p className='font-light'>It's easy we will help you</p>
         <button className='px-3 py-1.5 mt-4 bg-white text-black rounded-full text-[14px] cursor-pointer'>Create Playlist</button>
        </div>

        <div className='p-4 bg-[#242424] flex flex-col m-2 font-semibold rounded justify-start items-start mt-4'>
         <h1>Let's find some podcast to follow</h1>
         <p className='font-light'>we will keep you update on new episodes</p>
         <button className='px-3 py-1.5 mt-4 bg-white text-black rounded-full text-[14px] cursor-pointer'>Browse Podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
