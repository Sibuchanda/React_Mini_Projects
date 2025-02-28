import React, { useState } from 'react'
import ExpenseCalculation from './ExpenseCalculation';




const Increment = () => {

    const [count, setCount] = useState(0);

  return (
    <>
    <div className="container w-screen h-screen flex flex-col justify-center items-center bg-amber-100 gap-4">
    <ExpenseCalculation />
     <button onClick={()=> setCount((prev) => prev + 1)} className='w-auto h-auto p-2 bg-blue-500 hover:bg-blue-800 cursor-pointer'>Increment value </button>
     <h2 className='text-3xl'>Value : {count}</h2>

    </div>
    </>
  )
}


export default Increment;
