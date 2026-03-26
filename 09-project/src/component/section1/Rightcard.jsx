import React from 'react'
import myImg from '../../assets/heroleftimg1.png'
import myImg1 from '../../assets/heroleftimg.png'


const Rightcard = () => {
  return (
    <div className='w-1/2 h-20 flex py-16 gap-20'>
      
       <div className='py-40'>
           <h1 className='bg-amber-600 h-130 w-70 flex flex-col '>
            <h2 className='   py-4 px-4 ' >  <span className='text-6xl font_semibold'>01.</span> <br /> <span className='text-xl font-bold  '>A Prefect armchair </span> <br /> <span className='font-normal text-xl text-gray-900 w-19 inline-full'>A collection of simple. minimal  <br />chairs and scating.</span></h2>
            <img className=' mt-10 ml-15 py-0 px-0 h-2/3 w-3/3' src={myImg} alt="image" />
           </h1>
       </div>
         
      

      <div className='py-7'>
           <h1 className='bg-cyan-400 h-120 w-70 flex flex-col '>
            <img  className=' mb-7 top-0 left-0 w-full h-auto' src={myImg1} alt="" />
            <h1 className='mb-25 px-4'><span className='text-6xl font-semibold'>02.</span><br /> <span className='font-bold text-xl'>A beautifull chair </span> <br /> <span>A collection of simple. Minimal <br />chair and scating.</span></h1>
            </h1> 
           
      </div>
          
      
    </div>
  )
}

export default Rightcard
