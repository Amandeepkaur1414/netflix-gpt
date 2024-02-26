import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video p-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <h1 className='py-6 text-lg w-1/4'>{overview}</h1>
      <div>
        <button className='p-4 m-4 border text-black bg-white font-bold rounded-lg hover:bg-opacity-50'> ▶ Play</button>
        <button className='p-4 m-4 border bg-white  font-bold rounded-lg bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle