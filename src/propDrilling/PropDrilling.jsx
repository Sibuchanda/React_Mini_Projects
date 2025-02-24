import React from 'react'

const PropDrilling = () => {
  return (
    <>
    <div className="w-screen h-screen container flex bg-amber-100 flex-col justify-center items-center">
        <h1 className='text-2xl font-bold'>I am the Main Component</h1>
        <Counter data="Raect Js"/>
    </div>
    </>
  )
}


const Counter =(props)=>{
  return(
    <>
     <h1 className='text-2xl font-bold'>I am the counter component</h1>
     <Child data={props.data}/>
    </>
  )
}


const Child =(props)=>{
  return(
    <>
     <h1 className='text-2xl font-bold'>I am the Child component </h1>
     <GrandChild data={props.data}/>
    </>
  )
}


const GrandChild =(props)=>{
  return(
    <>
     <h1 className='text-2xl font-bold'>I am the GrandChild component</h1>
     <GreatGrandChild data={props.data}/>
    </>
  )
}


const GreatGrandChild =(props)=>{
  return(
    <>
     <h1 className='text-2xl font-bold'>I am the GreatGrandChild component and  I love <span className='text-pink-500'> {props.data} </span></h1>
    </>
  )
}



export default PropDrilling;