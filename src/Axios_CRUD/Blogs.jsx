import React, { useEffect, useState } from 'react'
import { createPost, getPosts } from './API/GetAPI';
import Card from './Card';

const Blogs = () => {
    
    const [data, setData] = useState([]);
    const [addPost, setAddPost] = useState({
      title: "",
      body: ""
    });

   const getAllPostsData = async ()=>{
    try{
      const res = await getPosts();
      const result = res.data;
      setData(result);
    }catch(err){
      console.log(err);
    }
};

useEffect(()=>{
getAllPostsData();
},[]);


// Handling Input data from the Form
const handleInputData = (e)=>{
  const name = e.target.name;
  const value = e.target.value;

  setAddPost((prev)=>{
    return{
      ...prev,
      [name]:value
    }
  })
}

// Adding data into the API
const AddPostData = async ()=>{
     const res = await createPost(addPost);
     if(res.status === 201){
       setData([...data, res.data]);
     }

}

// Form Submission
const handleFormData = (e)=>{
 e.preventDefault();
  AddPostData();
}


  return (
   <>
   <div className="container w-auto h-auto bg-gray-600 flex flex-col items-center justify-center">
    <form className="inputBox flex gap-4 mt-8" onSubmit={handleFormData}>
       <input type="text" name="title" placeholder='Add Title' required className='w-60 h-10 outline-none border-none bg-white focus:border-blue-500 pl-2' value={addPost.title} onChange={handleInputData}/>
       <input type="text" name="body" placeholder='Add Post' required className='w-60 h-10 outline-none border-none bg-white focus:outline-blue-500 pl-2' value={addPost.body} onChange={handleInputData}/>
       <button className='w-20 h-auto p-1 cursor-pointer bg-blue-400 hover:bg-blue-600 rounded-md'>Add</button>
    </form>
   <ul className='w-auto h-auto p-6 grid grid-cols-3 gap-5'>
 {
  
  data.map((currData)=>{
    return <Card key={currData.id} currData={currData} data={data} setData={setData} />
  })

 }
   </ul>
   </div>
   </>
  )
}


export default Blogs;
