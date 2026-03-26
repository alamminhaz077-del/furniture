import React from 'react'
import myImg from '../../assets/heroleftimg1.png'
import myImg1 from '../../assets/heroleftimg.png'


const Rightcard = () => {
  return (
    <div className='w-1/2 flex py-16 gap-20'>
      
       <div className='py-40'>
           <h1 className='bg-amber-600 h-110 w-70'>  
            <img className='' src={myImg} alt="image" />
           </h1>
       </div>
         
      

      <div className='py-7'>
           <h1 className='bg-cyan-400 h-130 w-70'>TR 
            <img src={myImg1} alt="" />
            </h1> 
           
      </div>
          
      
    </div>
  )
}

export default Rightcard
