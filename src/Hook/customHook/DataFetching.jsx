import React from 'react'
import useFetch from './useFetch';
const DataFetching = () => {

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
   <>
      {
         data && data.map((item)=>{
            return <p key={item.id}> {item.title}</p>
         })

      }
   
   </>
  )
}

export default DataFetching;
