import React, { useState } from 'react'

const Registrationform = () => {

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
    });

   const handleFormData = (e)=>{
     const {name, value} = e.target;  // Here we destructure it
     setUser((prev)=>({...prev, [name] : value}));
    //  { name: value } creates an object where "name" is a fixed key, not dynamic.
    // [name]: value dynamically sets the key based on the name attribute of the input field. If we enter in the email field then the 'name' becomes email, if we enter in the 'password' field then the name becomes 'password'  that's why 'name' is dynamic. 
   }

   const handleSubmitForm = (e)=>{
      e.preventDefault();
      console.log(user); 
      setUser({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
      });
   }



    return (
        <>
            <div className="container w-screen h-screen flex justify-center items-center bg-amber-100">
                <form className='h-auto w-md p-5 bg-white rounded-md' onSubmit={handleSubmitForm}>
                    <h1 className='text-blue-600 font-bold text-center text-2xl'>Registration Form</h1>
                    <div className="wrapper flex flex-col gap-2 mt-4">
                        <label htmlFor="firstname">
                            <b>First Name</b>
                        </label>
                        <input
                            type="text"
                            name="firstname"
                            value={user.firstname}
                            onChange={handleFormData}
                            placeholder='Enter your firstname'
                            required
                            className='w-auto h-8 bg-gray-100 pl-1 border-none focus:outline-sky-300 rounded-md'
                        />
                        <label htmlFor="lastname">
                            <b>Last Name</b>
                        </label>
                        <input
                            type="text"
                            name="lastname"
                            value={user.lastname}
                            onChange={handleFormData}
                            placeholder='Enter your lastname'
                            required
                            className='w-auto h-8 bg-gray-100 pl-1 border-none focus:outline-sky-300 rounded-md'
                        />
                        <label htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleFormData}
                            placeholder='Enter your email'
                            required
                            className='w-auto h-8 bg-gray-100 pl-1 border-none focus:outline-sky-300 rounded-md'
                        />
                        <label htmlFor="password">
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleFormData}
                            placeholder='Enter your password'
                            required
                            className='w-auto h-8 bg-gray-100 pl-1 border-none focus:outline-sky-300 rounded-md'
                        />
                        <label htmlFor="phone">
                            <b>Phone Number</b>
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={user.phone}
                            onChange={handleFormData}
                            placeholder='Enter your phone number'
                            required
                            className='w-auto h-8 bg-gray-100 pl-1 border-none focus:outline-sky-300 rounded-md'
                        />
                    </div>
                     <p className='text-center text-gray-600 mt-4'>Before sign up confirm our <a className='text-blue-500 cursor-pointer'>Terms & conditions</a></p>
                    <button type="submit" className='w-sm h-8 bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-800 mt-4 text-center'>Sign up</button>
                </form>
            </div>
        </>
    )
}

export default Registrationform;