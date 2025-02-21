


import React, { useEffect, useState } from 'react'

const UseeffectCleanup = () => {

    const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setCount((prev)=> prev +1);
    //        },1000)
    // },[count]);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount((prev)=> prev +1);
           },1000);

           return ()=> clearInterval(timer);
    },[count]);
  
    return (
      <>
        <div className="container w-screen h-screen bg-blue-50 flex flex-col justify-evenly items-center">
          <h1 className='font-bold text-4xl'> Example of useEffect </h1>
           <div className="wrapper">
             <h2 className='font-bold text-2xl'>Count : {count}</h2>
              <button onClick={()=>setCount(count+1)} className='w-auto h-auto bg-blue-400 p-3 rounded-md hover:bg-blue-700 cursor-pointer mt-10 font-bold'>Increment</button>
           </div>
        </div>
      </>
    )
}

export default UseeffectCleanup;