import React from 'react';
import Tour from './Tour';

export default function Tours({ tours,getId }) {
  console.log(tours)
    return (
        <>
            <h3 className='title'>Explore Our Tours</h3>
            {tours.map((tour) => (
                <Tour key={tour.id} {...tour} getId={getId}/>
            ))}
        </>
    );
}
