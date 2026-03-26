import React from 'react'
import logo from '../../assets/LOGO.avif'

const Navbar = () => {
  return (
    <div className='fixed   w-full bg-white'>
      <nav className='bg-white-900 px-8 py-0 '>
        <div className=' px-0 py-3 flex flex-row justify-between '>
            <img className='h-12 w-30' src={logo} alt="logo" />
            
            <ul className='flex flex-row gap-5 items-center text-blue-900'>
                <li>Home interious</li>
                <li>Business furniture</li>
                <li>Repair service</li>
            </ul>
              <ul className=' flex flex-row items-center '>
                <li><input type="text" className='border p-1 w-140 rounded-full bg-gray-200 placeholder:text-gray-600' placeholder='Search' /></li>
               </ul> 
                <ul className='flex flex-row items-center gap-5 text-gray-400'>
                     <li><i className="ri-store-2-line text-2xl "></i></li>
                     <li><i className="ri-account-circle-2-line text-2xl"></i></li>
                     <li><i className="ri-heart-line text-2xl"></i></li>
                     <li><i className="ri-shopping-cart-2-line text-2xl"></i></li>
                 </ul>




            
        </div>
      </nav>
    </div>
  )
}

export default Navbar
