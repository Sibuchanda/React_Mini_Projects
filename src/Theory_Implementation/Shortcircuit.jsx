import React, { useState } from 'react'

function Shortcircuit() {

const [userLogin, setUserLogin] = useState(false);
const [user, setUser] = useState("");

 const handleLoginLogout=()=>{
     setUserLogin(!userLogin);
 }

  const num = false;


  return (
    <>
     <div className="container w-screen h-screen flex flex-col justify-around items-center bg-amber-100">
       <div className="display">
          <h1 className='text-4xl text-blue-600 font-bold mb-5'>Welcome to React Short-Circut Evaluation</h1>
          {!!num && <>The value of num is 0</>}
          {userLogin && <>Congratulations, you are logegd in🎉🎉</>}
          <br></br>
          { user ? `Hello, ${user} welcome to our page.` : "" }

       </div>
       <div className="functions flex gap-x-10">
          <button className='w-auto h-auto p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700' onClick={handleLoginLogout}>Login/Logout</button>
          <button className='w-auto h-auto p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700' onClick={()=>setUser("Bheem")}>setUser</button>
          <button className='w-auto h-auto p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700' onClick={()=>setUser("")}>Clear All</button>
       </div>
     </div>
    
    </>
  )
}

export default Shortcircuit