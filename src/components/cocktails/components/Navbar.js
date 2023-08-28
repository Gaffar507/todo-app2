import React from 'react'
import cocktail from '../cocktail.svg'
import { Link, NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context'
const Navbar = () => {
  const {fetchData}=useGlobalContext()
  return (
    <section className='navbar'>
      <div className="nav-img">
        <button onClick={fetchData}><img src={cocktail} alt="cocktail" /></button>
        
      </div>
      <nav className="navlinks">
            <NavLink to={'/'} className='navlink' >Home</NavLink>
            <NavLink to={'/about'} className='navlink'  >About</NavLink>
      </nav>
    </section>
  )
}

export default Navbar
