import React, { useEffect, useState } from 'react'
import getPosts from './API/GetAPI';
import Card from './Card';

const Blogs = () => {
    
    const [data, setData] = useState([]);

   const getAllPostsData = async ()=>{
    try{
      const res = await getPosts();
      const result = res.data;
      console.log(result);
      setData(result);
    }catch(err){
      console.log(err);
    }
};

useEffect(()=>{
getAllPostsData();
},[]);


  return (
   <>
   <div className="container w-auto h-auto bg-gray-600 flex flex-col items-center justify-center">
    <div className="inputBox flex gap-4 mt-8">
       <input type="text" placeholder='Add Title' required className='w-60 h-10 outline-none border-none bg-white focus:border-blue-500 pl-2'/>
       <input type="text" placeholder='Add Post' required className='w-60 h-10 outline-none border-none bg-white focus:outline-blue-500 pl-2'/>
       <button className='w-20 h-auto p-1 cursor-pointer bg-blue-400 hover:bg-blue-600 rounded-md'>Add</button>
    </div>
   <ul className='w-auto h-auto p-6 grid grid-cols-3 gap-5'>
 {
  
  data.map((currData)=>{
    return <Card key={currData.id} currData={currData} />
  })

 }
   </ul>
   </div>
   </>
  )
}


export default Blogs;
