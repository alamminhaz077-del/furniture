import React, { useState } from 'react'
import Navbar from './component/section1/Navbar'
import Section1 from './component/section1/Section1.jsx'

const App = () => {


  const [a, setA] = useState(20)
   
  function changeA(){
    setA (76)
  }

  return (
    <>
  
      <Navbar />
      <Section1 />
      <div className='bg-red-200'>
        <h1 className=' py-20 px-20 '>value of a is {a} </h1>
        <button onClick={changeA} className='  px-20 py-20'>Click me</button>
      </div>
    </>
  )
}

export default App
