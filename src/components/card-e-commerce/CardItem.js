import React from 'react'
import { useGlobalContext } from './Context'
import { BsArrowDown,BsArrowUp } from "react-icons/bs";

const CardItem = ({id,amount, price, img, title}) => {
      const{removeItem, increase, decrease ,toggleAmount}=useGlobalContext();
  return (
    <article className='container-item'>
      <img className='item-img' src={img} alt={title} />
      <div className="item-details">
        <h3>{title}</h3>
         <p>${`${price}`}</p> 
        <button onClick={()=>removeItem(id)}>Remove</button>
      </div>
      <div className="count-section">
        <button onClick={()=>{toggleAmount(id,'increase')}}><BsArrowUp/></button>
        <p>{amount}</p>
        <button onClick={()=>{toggleAmount(id,'decrease')}}><BsArrowDown/></button>
      </div>
    </article>
  )
}

export default CardItem
