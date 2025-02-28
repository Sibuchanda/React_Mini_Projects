import React, { useEffect, useState } from 'react'

export const UseEffectExample2 = () => {

  const [time, setTime] = useState("");

  useState(()=>{
    setInterval(()=>{
       const time = new Date();
       setTime(time.toLocaleTimeString());
    },1000);
  },[]);


  return (
    <>
    <div className="container bg-black flex justify-center items-center w-screen h-screen">
    <h1 className='text-white font-bold text-9xl'>{time}</h1>  
    </div>
    
    </>
  )
}
