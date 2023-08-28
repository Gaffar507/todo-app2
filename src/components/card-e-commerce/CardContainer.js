import React from 'react'
import CardItem from './CardItem'
import { useGlobalContext } from './Context'

const CardContainer = () => {
    const{items, total}=useGlobalContext();
        if (items.length===0) {
            return(<h2 className='empty'>Empty Items!</h2>) 
        } else{
            return(
                <section className='card-container'>
                    <div className='card-header'>
                        <h1>Your Basket</h1>
                    </div>
                    <div className="card-items">
                        {items.map((item)=><CardItem key={item.id} {...item}/>)}
                    </div>
                    <hr className='underline'/>
                    <div className="card-footer">
                        <h4>Total</h4>
                        <p>Price: {total} $</p>
                    </div>
                </section>
            )
        }

}

export default CardContainer
