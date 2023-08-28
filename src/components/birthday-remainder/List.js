import React from 'react';

export default function List(props) {
    const { data } = props;
    console.log(data);
    return (
        <div>
            <section className='section'>
            <h4>{data.length} Birthdays today</h4>
                {data.map((user) => {
                    const { id, name, age, image } = user;
                    return (
                        <article key={id}>
                            
                            <img  src={image} alt={name} className='remainder'></img>
                            <h5>{name}</h5>
                            <p>{age}</p>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}
