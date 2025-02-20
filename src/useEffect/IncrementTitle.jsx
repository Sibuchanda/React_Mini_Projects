

// 1. A counter that increments when a button is clicked
// 2. An Input field where the user can input their name, and that input will display in the console live.
// 3. The document title update to show the count value


import React, { useEffect, useState } from 'react'

const IncrementTitle = () => {

   const [count, setCount] = useState(0);
   const [name, setName] = useState("");

useEffect(()=>{
  document.title = `Count : ${count}`;
},[count]);

   useEffect(()=>{
      console.log(name);
   },[name]);


  return (
    <> 
      <div className="container w-screen h-screen bg-amber-100 flex flex-col justify-evenly items-center">
        <h1 className='font-bold text-4xl'> Example of useEffect </h1>
         <div className="wrapper">
           <h2 className='font-bold text-xl'>Count : {count}</h2>
            <button onClick={()=>setCount(count+1)} className='w-auto h-auto bg-blue-400 p-3 rounded-md hover:bg-blue-700 cursor-pointer mt-10 font-bold'>Increment</button>
         </div>
         <div>
            <h1 className='text-xl font-bold'>Name :{name} </h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='bg-white rounded-md outline-none border-none w-80 h-10 pl-1 mt-4'/>
         </div>
      </div>
    </>
  )
}

export default IncrementTitle;