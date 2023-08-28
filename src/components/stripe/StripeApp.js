import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SubMenu from './SubMenu'

import './stripeApp.css'

const StripeApp = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <SubMenu/>
    </div>
  )
}

export default StripeApp
