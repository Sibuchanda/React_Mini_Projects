import React, { useState } from 'react'

const FAQcard = ({ currData }) => {
 
  const { question, answer } = currData;
  const [ isActive, setIsActive ] = useState(false);

  const handleToggle = ()=>{
    setIsActive(!isActive);
  }

  return <>
    <li className='w-3xl h-auto border p-2 bg-gray-800'>
      <div className='flex gap-8 justify-between'>
        <p className='text-xl font-bold text-white'>{question}</p>
        <button className={`p-1 rounded-sm h-auto w-auto cursor-pointer font-bold ${ isActive ? "bg-red-400" : "bg-green-400"} px-2`} onClick={handleToggle}>{isActive ? "Close" : "Show"}</button>
      </div>
      <p className='text-white p-2'>{ isActive && answer}</p>
    </li>
  </>
}

export default FAQcard;
