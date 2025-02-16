import React, { useState } from 'react';
import './Toogle.css';

const Toggle = () => {

  const [istoggle, setIsToggle] = useState(false);

  const toggleBtn = ()=>{
     if(istoggle===true){
        setIsToggle(false);
     }
     else{
        setIsToggle(true);
     }
  }

  return (
    <div className="container flex justify-center items-center w-screen h-screen">
      <div onClick={toggleBtn} className={`box w-40 h-18 bg-gray-300 rounded-full flex items-center px-1 relative ${istoggle ? "bg-green-500" : ""}`}>
        <div className={`circle w-18 h-18 bg-gray-700 rounded-full flex justify-center items-center cursor-pointer border-2 border-white transition-all ${istoggle ? "on" : "of"}`}>
          <span className="text-white text-lg font-bold uppercase">{istoggle ? "on" : "of"}</span>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
