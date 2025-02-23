import React, { useRef, useState } from 'react'

const UserefExample = () => {

    // const username = document.getElementById("username");
    // const password = document.getElementById("password");

   const username = useRef(null);
   const password = useRef(null);
   console.log(username);

   const handleFormSubmit = (e)=>{
    e.preventDefault();
     console.log(username.current.value);
     console.log(password.current.value);
   }

  return (
    <>
      <div className="container w-screen h-screen flex flex-col justify-center items-center">
      <h1 className='text-4xl text-center'>useRef Example</h1>
       <form onSubmit={handleFormSubmit} className='mt-6 flex flex-col gap-4'>
          <input type="text" placeholder='Enter name' id="username" ref={username}/>
          <input type="password" placeholder='Enter password' id="password" ref={password}/>
           <button className='w-auto h-auto p-2 bg-blue-400 rounded-md cursor-pointer hover:bg-blue-700'>Submit</button>

       </form>

      </div>
    </>
  )
}

export default UserefExample;