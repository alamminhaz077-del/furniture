import React from 'react'
import './Herocard2.css'

const Herocard2 = (props) => {
  console.log(props.data)
  return (
    <div className='px-5 py-5 bg-blue-300 rounded-2xl'>
      <h1 className='text-2xl font-bold mb-4'>On Everybody's list</h1>
      <div className='flex overflow-x-auto gap-4 pb-2 hide-scrollbar'>
        {props.data.map((item, index) => (
          <div key={index} className='min-w-[220px] flex-shrink-0 bg-white p-5 rounded-xl shadow-md scroll-smooth'>
            <img
              className='h-40 w-full object-cover rounded-lg mb-3'
              src={item.image}
              alt={item.title}
            />
            <h2 className='text-lg font-bold text-gray-700'>{item.title}</h2>
            <p className='text-sm text-gray-500'>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Herocard2
