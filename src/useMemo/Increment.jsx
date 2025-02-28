import React, { useState } from 'react'
import DummyComponent from './DummyComponent';

const Increment = () => {

    const [value, setValue] = useState(0);


  return (
    <>
    <div className="container w-screen h-90 flex flex-col justify-evenly items-center bg-amber-100">
        <h1 className='text-4xl font-bold'>Example of React memo</h1>
        <div className="box">
            <h1 className='text-2xl font-bold'>Value : {value}</h1>
            <button onClick={()=>setValue((pre)=> pre + 1)} className='border w-auto h-auto p-2 cursor-pointer mt-4'>Increment</button>
        </div>
    </div>
   <DummyComponent/>
    </>
  )
}

export default Increment;
