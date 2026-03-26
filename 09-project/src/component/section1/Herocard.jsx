import React from 'react'
import Leftcard from './Leftcard'
import Rightcard from './Rightcard'

const Herocard = () => {
  return (
    <div className='flex gap-5 py-15'>
      <Leftcard />
      <Rightcard />
      
    </div>
  )
}

export default Herocard
