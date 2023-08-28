import React, { useEffect, useState } from 'react'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

export default function App() {
  const [tours, setTours]=useState([]);
  const [isLoading, setLoading]=useState(true);
  const [error, setError]=useState('');

  const fetchData=()=>{
      fetch(url)
      .then((res)=>{
        if (!res) {
          throw Error("Data can not fetch!")
        } else {
          return res.json()
        }
      })
      .then((res)=>{
        setTours(res)
        setLoading(false)
      }).catch((error)=>{
        setError(error.message)
        setLoading(false)
      })
}
    useEffect(()=>{ 
      fetchData()
    },[])

const removeTour=(id)=>{
  const newTour=tours.filter((tour)=>tour.id!==id);
  setTours(newTour)
}
const reFetchData=()=>{
  fetchData();
}

    if(tours.length === 0){
      return <h4 className='title'>No tour is available! Please <button onClick={()=>{reFetchData()}}> Refresh</button></h4>
    } else if (tours) {
      return (
      <div>
        <section>
        {isLoading&& `Data is loading...`}
        {error&& `${error}`}
          <Tours tours={tours} getId={removeTour}/>
        </section>
      </div>
    )
  }

}
