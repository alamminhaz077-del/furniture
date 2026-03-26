import React from 'react'
import heroleftfurniture from '../../assets/heroleftfurniture.avif'
import heroleftvideo from '../../assets/photoandvideo/Heroleftcomponentvideo.mp4'

const Leftcard = () => {
  return (
    <div className='flex flex-col  w-1/2 gap-20 px-8 py-10'>
      <h1 className='gap-5 py-1 align-text-left'> A beautifull house <br /><span className='font-bold text-7xl'>Furniture.</span> <br /> Find out the most effecient way to start <br /> organizing your home. Begin by creating <br /> storage space.  </h1>
      <video
        src={heroleftvideo}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        style={{  maxWidth: '560px', borderRadius: '8px', gap: '6px' }}
      >
        Your browser does not support the video tag.
      </video>
    
    </div>
  )
}

export default Leftcard
