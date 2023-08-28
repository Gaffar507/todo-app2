import React from 'react'

const Menu = ({id,img,desc,category,title,price}) => {
  return (
    <div className='menu'>
      <section  className='container'>
      <img className='image' src={img} alt={title} /> 
        <article className='info'>
            <p>{title}</p>
            <p>Category: {category}</p>
            <p>Price: {price}$</p>
            <p>{desc}</p>
        </article>
      </section>
    </div>
  )
}

export default Menu
