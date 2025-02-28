import React, { useRef } from 'react'

const DummyComponent = () => {

    const renderCount = useRef(0);

  return (
   <>
     <div className="container w-screen h-80 border bg-red-200 flex flex-col justify-center items-center">
        <h1 className='text-5xl'>Nothing changed here but I have rendered :
        <span className='text-red-600 font-bold'>{renderCount.current++} times</span> 
        </h1>
     </div>
   </>
  )
}

export default React.memo(DummyComponent); 
