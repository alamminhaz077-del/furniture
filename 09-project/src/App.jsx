import React, {} from 'react'
import Navbar from './component/section1/Navbar'
import Section1 from './component/section1/Section1.jsx'
import Section2 from './component/section2/Section2.jsx'

const App = () => {

const ftdata = [

  {
    "image": "https://images.unsplash.com/photo-1711300068093-0d0beb4a93c0?q=80&w=296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Up to 60% Off",
    "subtitle": "Architecture Interiors"
  },

  {
    "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Flat 50% Discount",
    "subtitle": "Modern Living Room"
  },

  {
    "image": "https://images.unsplash.com/photo-1680775076360-568410f6aaa4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Up to 70% Off",
    "subtitle": "Luxury Sofa Sets"
  },

  {
    "image": "https://plus.unsplash.com/premium_photo-1686090446908-60fbb45f2805?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Save 40%",
    "subtitle": "Wooden Furniture"
  },

  {
    "image": "https://images.unsplash.com/photo-1593476463304-6a800e24ee11?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Mega Sale 65% Off",
    "subtitle": "Bedroom Collection"
  },

  {
    "image": "https://images.unsplash.com/photo-1758977403341-0104135995af?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Flat 55% Off",
    "subtitle": "Dining Sets"
  },

  {
    "image": "https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Up to 45% Off",
    "subtitle": "Office Furniture"
  },

  {
    "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Special Offer 50% Off",
    "subtitle": "Home Decor"
  },

  {
    "image": "https://images.unsplash.com/photo-1643949914877-b20f30792c1e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Limited Time 60% Off",
    "subtitle": "Wardrobes"
  },

  {
    "image": "https://images.unsplash.com/photo-1609587639086-b4cbf85e4355?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Festive Sale 70% Off",
    "subtitle": "Premium Beds"
  },

  {
    "image": "https://images.unsplash.com/photo-1624904415510-9e7443f50ac0?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Flat 35% Off",
    "subtitle": "Coffee Tables"
  },

  {
    "image": "https://images.unsplash.com/photo-1603025832572-c5ba1fb6be8b?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Up to 50% Off",
    "subtitle": "Study Tables"
  },

  {
    "image": "https://images.unsplash.com/photo-1664560724581-e3b068a0a376?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Hot Deal 65% Off",
    "subtitle": "Recliner Chairs"
  },

  {
    "image": "https://images.unsplash.com/photo-1772475385442-9e2c59cab288?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Clearance 75% Off",
    "subtitle": "Storage Units"
  },

  {
    "image": "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Mega Discount 60% Off",
    "subtitle": "TV Units"
  },

  {
    "image": "https://plus.unsplash.com/premium_photo-1677517547416-a48ee5cf6c97?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Flat 45% Off",
    "subtitle": "Bookshelves"
  },

  {
    "image": "https://plus.unsplash.com/premium_photo-1686167991356-b60859d9a34f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Up to 55% Off",
    "subtitle": "Outdoor Furniture"
  },

  {
    "image": "https://images.unsplash.com/photo-1759176171010-2d64aa5253c2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Special Sale 50% Off",
    "subtitle": "Kids Furniture"
  },

  {
    "image": "https://images.unsplash.com/photo-1499510502518-8f294dac3f9f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Limited Offer 65% Off",
    "subtitle": "Luxury Interiors"
  },

  {
    "image": "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Festive Deal 70% Off",
    "subtitle": "Home Essentials"
  }
]
  


  return (
   <div className='flex flex-col gap-15'>
        <div>
          <Navbar />
          <Section1 />
        </div>

        <div>
          <Section2 ftdata={ftdata} />
        </div>

    </div>
  )
}

export default App
