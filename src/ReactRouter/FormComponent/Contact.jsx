import React from 'react'
import { Form } from 'react-router-dom';


const getContactData = async ({ request })=>{

try{

 const res = await request.formData();
 const data = Object.fromEntries(res);
 console.log(data);
 return null;

}catch(err){
    console.log(err);
}


}



const Contact = () => {

  return (
    <>
    
    <div className="container flex flex-col w-screen h-screen bg-amber- items-center">
      <h1 className='text-4xl font-bold mt-10'>Contact us</h1>

      <Form method='POST' action="/contact" className='flex flex-col gap-4 mt-5'>

      <div className='flex flex-col gap-2'>
        <label htmlFor="name">Full name </label>
        <input type="text" id="name" name="fullname" placeholder="Enter your full name" required className='w-80 h-8 bg-white pl-2'/>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="email">Email </label>
        <input type="email" id="email" name="email" placeholder="Enter your email address" required  className='w-80 h-8 bg-white pl-2'/>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="message">Message</label>
        <textarea type="text" id="message" name="message" cols="30" row="10" placeholder="We are always here to help you..." className='w-80 h-8 bg-white pl-2'></textarea>
      </div>

     <button className='w-auto h-auto border p-2 cursor-pointer'>Send message </button>
      </Form>

    </div>
    
    
    </>
  )
}

export  {Contact, getContactData};
