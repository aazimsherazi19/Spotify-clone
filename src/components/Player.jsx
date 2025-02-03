import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
  const {seekBg, seekBar, play, pause, playStatus, track, time, next, previous, seekSong} = useContext(PlayerContext);
  return (
    <div className='h-[10%] bg-black flex text-white justify-between px-4 items-center'>
      <div className='lg:flex items-center hidden gap-2'>
        <img className='w-12' src={track.image} alt="" />
        <div>
          <p className='font-semibold'>{track.name}</p>
          <p className='text-[15px]'>{track.desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2 m-auto'>
        <div className='flex items-center gap-4'>
          <img className='w-4' src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className='w-4' src={assets.prev_icon} alt="" />
          {playStatus 
          ? <img onClick={pause} className='w-4' src={assets.pause_icon} alt="" /> 
          : <img onClick={play} className='w-4' src={assets.play_icon} alt="" />}
          <img onClick={next} className='w-4' src={assets.next_icon} alt="" />
          <img className='w-4' src={assets.loop_icon} alt="" />
        </div>
        <div className='flex items-center gap-3'>
         <p>{time.currentTime.minute}:{time.currentTime.second}</p>
         <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full h-1 cursor-pointer'>
          <hr ref={seekBar} className='h-1 bg-green-800 border-none w-0 overflow-hidden rounded-full' />
         </div>
         <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2'>
          <img className='w-4' src={assets.plays_icon} alt="" />
          <img className='w-4' src={assets.mic_icon} alt="" />
          <img className='w-4' src={assets.queue_icon} alt="" />
          <img className='w-4' src={assets.speaker_icon} alt="" />
          <img className='w-4' src={assets.volume_icon} alt="" />
          <div className='w-20 h-1 bg-slate-50 rounded-full'></div>
          <img className='w-4' src={assets.mini_player_icon} alt="" />
          <img className='w-4' src={assets.zoom_icon} alt="" />
        </div>
    </div>
  )
}

export default Player
