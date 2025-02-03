import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import Navbar from './Navbar';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext);
  return (
    <>
      <Navbar/>
      <div className='flex flex-col md:flex-row gap-8 mt-8 items-start'>
        <img className='w-48 rounded' src={albumData.image} alt="" />
         <div className='flex flex-col'>
           <p>Playlist</p>
           <h2 className='font-bold text-5xl md:7xl mb-4'>{albumData.name}</h2>
           <h4>{albumData.desc}</h4>
           <p>
            <img className='w-5 inline-block' src={assets.spotify_logo} alt="" />
            <b> Spotify  </b>
            •14,546,745 likes 
            •<b> 50 Songs, </b>
            about 2 hr 30 min
           </p>
         </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index)=>(
        <div key={index} onClick={()=>playWithId(item.id)} className='grid grid-cols-3 sm:grid-cols-4 items-center p-2 gap-2 text-[#a7a7a7] hover:bg-[#ffffff2b]'>
          <p className='text-white'>
            <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
            <img className='inline w-10 mr-5' src={item.image} alt="" />
            {item.name}
            </p>
            <p className='text-[15px] '>{albumData.name}</p>
            <p className='text-[15px] hidden sm:block'>{(index+1)*3} days ago</p>
            <p className='text-[15px] m-auto'>{item.duration}</p>
        </div>
      ))}
    </>
  )
}

export default DisplayAlbum
