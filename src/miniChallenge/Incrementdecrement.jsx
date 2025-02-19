import React, { useState } from 'react'

function Incrementdecrement() {

    const [step, setStep] = useState(0);
    const [value, setValue] = useState(0);

 
     const handleIncrement = ()=>{
        setValue(value + step); // As the inputValue is string that is why we are converting it into Number.
     }

     const handleDecrement = ()=>{
        setValue(value - step);
     }

     const handleFormSubmit = (event)=>{
        event.preventDefault();
     }
     const handleClearAll= ()=>{
         setStep(0);
         setValue(0);
     }

    return (
        <>
            <div className="container w-screen h-screen bg-gray-300 flex justify-center items-center">

                <form className='w-2xl h-2xl flex flex-col gap-8 bg-white shadow-md p-10 rounded-md' onSubmit={handleFormSubmit}>
                    <h1 className='text-3xl font-bold text-center'>useState Challenge</h1>
                    <div className="input flex flex-col ml-5 gap-2">
                        <p className='font-bold text-md'>Count : <span className='text-xl font-bold text-blue-500'>{value}</span></p>
                        <div className="inputContainer flex gap-2">
                            <label className='font-bold text-md'>Steps : </label>
                            <input type="text" value={step} onChange={(e)=>setStep(Number(e.target.value))} className='border pl-1'/>
                        </div>
                    </div>

                    <div className="buttons flex justify-evenly">
                        <button type='submit' disabled={value>=100} className='btn1 w-auto h-auto p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700' onClick={handleIncrement}>Increment </button>

                        <button type='submit' disabled={value<=0} className='btn1 w-auto h-auto p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700' onClick={handleDecrement}>Decrement </button>

                        <button type='submit' className='btn1 w-auto h-auto p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700' onClick={handleClearAll}>Clear All </button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Incrementdecrement