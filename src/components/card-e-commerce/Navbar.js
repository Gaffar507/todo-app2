import React from 'react'
import { BsBasket } from "react-icons/bs";
import { useGlobalContext } from './Context'
const Navbar = () => {
  const{amount}=useGlobalContext();
  return (
    <section className='navbar'>
        <div className="navbar-header">
            <h2>UseReducer</h2>
        </div>
        <div className="navbar-basket">
            <BsBasket className='navbar-icon'/>
            <p>{amount}</p>
        </div>
    </section>
  )
}

export default Navbar
