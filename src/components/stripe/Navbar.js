import React from 'react'
import logo from './image/logo.svg'
import { useGlobalContext } from './Context'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext()
  const subMenu=(e)=>{
      const text= e.target.textContent;
      const tempBtn= e.target.getBoundingClientRect();
      const center=(tempBtn.left + tempBtn.right)/2
      const bottom= tempBtn.bottom-3;
    openSubmenu(text,{center,bottom})
  }
  const removeSubmenu=(e)=>{
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }
  return (
    <nav className='nav' onMouseOver={removeSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className='nav-logo' alt="stripe"/>
          <button className='btn toggle-btn' onClick={openSidebar}> <FaBars/></button>
        </div>
          <ul className="nav-links">
            <li><button className='link-btn' onMouseOver={subMenu}>products</button></li>
            <li><button className='link-btn' onMouseOver={subMenu}>developers</button></li>
            <li><button className='link-btn' onMouseOver={subMenu}>company</button></li>
          </ul>
          <button className='btn signin-btn'>Sign in</button>
        </div>
    </nav>
  )
}

export default Navbar
