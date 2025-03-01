import React from 'react'
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {

 const navigate = useNavigate();

 const handleNavigate = ()=>{
    navigate(-1);
 }

  return (
    <>
    <div className="container w-screen h-screen flex flex-col justify-center items-center bg-gray-400">
     <h1 className='text-4xl text-white font-bold'>404 page not found</h1>
     <button onClick={handleNavigate} className='w-auto h-auto p-2 border cursor-pointer text-white mt-5'>Go Back</button>
     </div>
    </>
  )
}

export default Errorpage;
