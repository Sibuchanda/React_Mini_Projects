import React, { useState, useEffect } from 'react'

const HowNotToFetchApi = () => {

  const [apiData, setApiData] = useState([]);

//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res)=>res.json())
//   .then((data)=>{
//     setApiData(data);
//   })
//   .catch((error)=>console.log(error));


  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
      setApiData(data);
    })
    .catch((error)=>console.log(error));
  },[]);



  return (
    <>
    <div className='container w-screen h-auto bg-amber-100'>
     <ul>
        {
            apiData.map((currData)=>{
                return <li key={currData.id}> {currData.title} </li>
            })
        }
     </ul>

    </div>
    </>
  )
}

export default HowNotToFetchApi;