import React, { useRef } from 'react'

const ForwardRef = () => {

 const username = useRef(null);
 const password = useRef(null);

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
      }

  return (
   <>
   
   <div className="container flex flex-col justify-center items-center">
     <h1>ForwardRef example in React - 19 </h1>
     <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-center'>
        <AfterReact19Input label="username" type="text" ref={username}/>
        <AfterReact19Input label="password" type="password" ref={password}/>
        <button className='border cursor-pointer'>Submit</button>
     </form>

   </div>
   </>
  )
}



// const AfterReact19Input = (props)=>{
//     return(
//         <>
//         <div className='m-2'>
//          <label>{props.label}</label>
//          <input type={props.type} ref={props.ref} className='border'/>
//          </div>
//         </>
//     )
// }



//  Same as above. But here we destructured the props 
const AfterReact19Input = ({label,type,ref})=>{
    return(
        <>
        <div className='m-2'>
         <label>{label}</label>
         <input type={type} ref={ref} className='border'/>
         </div>
        </>
    )
}



export default ForwardRef;