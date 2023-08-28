import React, { useState } from 'react';

export default function Tour({ id, image, name, info, price, getId }) {
    const [showMore, setMore] = useState(false);
    return (
        <main>
            <article className='single-tour'>
                <img className="single-tour" src={image} alt={name} />
                <div className='tour-info'>
                  <h4>{name}</h4>
                <p className='tour-price'>Cost: {price}$</p>
                <p>
                    {showMore ? info : `${info.substring(0, 200)}... `}
                    <button
                        onClick={() => {
                            setMore(!showMore);
                        }}>
                        {showMore ? `Show less` : `Show more`}
                    </button>
                </p>
                <button
                    onClick={() => {
                        getId(id);
                    }}
                    className='delete-btn'>
                    Not Interested
                </button>
                </div>
  
            </article>
        </main>
    );
}
