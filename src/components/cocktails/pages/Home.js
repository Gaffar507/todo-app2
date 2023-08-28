import React from 'react';
import { useGlobalContext } from '../context';
import IsLoading from '../components/IsLoading'
import Search from '../components/Search';
import Cocktail from '../components/Cocktail'; 

const Home = () => {
  const{isLoading,error , cocktails}=useGlobalContext()
  if (isLoading) {
   return <IsLoading/>
  }
  if (cocktails.length<1) {
    return (
      <div>
        {error? <h2> {`${error},`} Didn't find anything!</h2>:<h2>Didn't find anything!</h2> }
      </div>
    )
  }
  return (
    <section className='home-container'>
      <div className="home-header">
        <h2 className='home-title'>All Your favorite drinks here.</h2>
        <Search/>
      </div>
      <section className="cocktails-container">
        {cocktails.map((item)=><Cocktail key={item.id} {...item} /> )}
      </section>
    </section>
  )
}

export default Home
