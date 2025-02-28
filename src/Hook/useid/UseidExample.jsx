import React, { useId } from 'react'

const UseidExample = () => {

//     const nameId = useId();
//     const emailId = useId();
//     const passId = useId();


//     return (
//         <>
//             <h1 className='text-center text-4xl font-bold mt-2 mb-10'>useId  Example </h1>
//             <form className='flex flex-col justify-center items-center gap-4'>
//                 <div>
//                 <label htmlFor={nameId}>Enter name : </label>
//                 <input type="text" id={nameId} name="name"  className='border'/>
//             </div>
//             <div>
//                 <label htmlFor={emailId}>Enter email : </label>
//                 <input type="email" id={emailId} name="email" className='border'/>
//             </div>
//             <div>
//                 <label htmlFor={passId}>Enter password : </label>
//                 <input type="password" id={passId} name="password" className='border'/>
//             </div>
//            <button className='border p-2 cursor-pointer'>Submit</button>
//         </form >
//    </>
//   )



    const id = useId();


    return (
        <>
            <h1 className='text-center text-4xl font-bold mt-2 mb-10'>useId  Example </h1>
            <form className='flex flex-col justify-center items-center gap-4'>
                <div>
                <label htmlFor={id + "username"}>Enter name : </label>
                <input type="text" id={id + "username"} name="name"  className='border'/>
            </div>
            <div>
                <label htmlFor={id + "email"}>Enter email : </label>
                <input type="email" id={id + "email"} name="email" className='border'/>
            </div>
            <div>
                <label htmlFor={id + "password"}>Enter password : </label>
                <input type="password" id={id + "password"} name="password" className='border'/>
            </div>
           <button className='border p-2 cursor-pointer'>Submit</button>
        </form >
   </>
  )
}





export default UseidExample;
