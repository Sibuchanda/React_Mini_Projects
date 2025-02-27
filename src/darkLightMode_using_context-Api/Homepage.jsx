import React, { useContext } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

import { ThemeContext } from '../darkLightMode_using_context-Api/DarkLight';


const Homepage = () => {
    const {theme, handleButtonToggle} = useContext(ThemeContext);

  return (
    <>
     <div className={`container w-screen h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} flex flex-col items-center`}>
        <div className="navBar flex w-screen justify-evenly mt-4">
            <ul className={`flex gap-8 ${theme === 'dark'? 'text-white' : 'text-black'}`}>
                <li className='text-xl cursor-pointer'>Home</li>
                <li className='text-xl cursor-pointer'>About</li>
                <li className='text-xl cursor-pointer'>Contact Us</li>
            </ul>
            <button onClick={handleButtonToggle} className={`icon ${theme === 'dark'? 'text-white' : 'text-black'}`}>
            {
                theme === 'dark' ? <FaSun className='text-xl cursor-pointer'/> : <FaRegMoon className='text-xl cursor-pointer'/>
            }
            </button>
        </div>
        <div className={`mt-40 flex flex-col items-center gap-2 ${theme === 'dark'? 'text-white' : 'text-black'} `}>
          <h1 className='text-5xl font-bold'>Hello, Wecome to React 19</h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates rerum qui sequi. Harum ipsa, omnis quibusdam sint modi fugiat.</p>
          <p className='text-xl font-bold'>Hii, I am Sibu Chanda</p>
        </div>
     </div>
    </>
  )
}

export default Homepage;
