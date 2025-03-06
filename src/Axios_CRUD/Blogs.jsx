import React, { useEffect, useState } from 'react'
import { deletePosts, getPosts } from './API/GetAPI';


const Blogs = () => {

  const [data, setData] = useState([]);

  const getAllPostsData = async () => {
    try {
      const res = await getPosts();
      const result = res.data;
      console.log(result);
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPostsData();
  }, []);


  // Delete API posts
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePosts(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((currPosts) => {
          return currPosts.id !== id;
        });
        setData(newUpdatedPosts);
      }
    } catch (err) {
      console.log(error);
    }
  }



  return (
    <>
      <div className="container w-auto h-auto bg-gray-600 flex flex-col items-center justify-center">
        <div className="inputBox flex gap-4 mt-8">
          <input type="text" placeholder='Add Title' required className='w-60 h-10 outline-none border-none bg-white focus:border-blue-500 pl-2' />
          <input type="text" placeholder='Add Post' required className='w-60 h-10 outline-none border-none bg-white focus:outline-blue-500 pl-2' />
          <button className='w-20 h-auto p-1 cursor-pointer bg-blue-400 hover:bg-blue-600 rounded-md'>Add</button>
        </div>
        <ul className='w-auto h-auto p-6 grid grid-cols-3 gap-5'>
          {

            data.map((currData) => {

              const { id, body, title } = currData;

              return <li key={id} className="container w-auto h-auto bg-blue-100 p-2 flex flex-col justify-around gap-4">
                <p>{id}</p>
                <p>Title : {title}</p>
                <p>{body}</p>
                <div className="buttons flex gap-4">
                  <button className='w-20 h-auto bg-green-500 cursor-pointer p-1 rounded-md hover:bg-green-600'>Edit</button>
                  <button className='w-20 h-auto bg-red-500 cursor-pointer p-1 rounded-md hover:bg-red-600' onClick={() => handleDeletePost(id)}>Delete</button>
                </div>
              </li>
            })

          }
        </ul>
      </div>
    </>
  )
}


export default Blogs;
