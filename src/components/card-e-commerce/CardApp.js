import React from 'react'
import CardContainer from './CardContainer'
import Navbar from './Navbar'
import { useGlobalContext } from './Context'
import './cardApp.css'

const CardApp = () => {
  const{isLoading}=useGlobalContext();
  if(isLoading){
    return(
      <div className='isLoading'>
          <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <div>
      <Navbar/>
      <CardContainer/>
    </div>
  )
}

export default CardApp
