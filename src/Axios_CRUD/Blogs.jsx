import React, { useEffect, useState } from 'react'
import { createPost, deletePosts, getPosts } from './API/GetAPI';
import Card from './Card';

const Blogs = () => {

  const [data, setData] = useState([]);
  const [addPost, setAddPost] = useState({
    title: "",
    body: ""
  });
  const [updateData, setUpdateData] = useState({});

  const getAllPostsData = async () => {
    try {
      const res = await getPosts();
      const result = res.data;
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  // ---- Getting data --------
  useEffect(() => {
    getAllPostsData();
  }, []);

// ----- Updaing data -------
  useEffect(()=>{
    updateData && setAddPost({
      title: updateData.title || "",
      body: updateData.body || ""
    });
  },[updateData])


  // Handling Input data from the Form
  const handleInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddPost((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  // Adding data into the API
  const AddPostData = async () => {
    const res = await createPost(addPost);
    if (res.status === 201) {
      setData([...data, res.data]);
    }

  }

  // Form Submission
  const handleFormData = (e) => {
    e.preventDefault();
    AddPostData();
  }

  // ----------------------------------
 
  // Delete API posts
  const handleDeletePost = async (id)=>{
      try{
        const res = await deletePosts(id);
        if(res.status === 200){
          const newUpdatedPosts = data.filter((currPosts)=>{
            return currPosts.id !== id;
          });
          setData(newUpdatedPosts);
        }
      }catch(err){
        console.log(error);
      }
  }

  //Updating Cards 
  const handleUpdateData = (currData) =>{
     setUpdateData(currData);
  }


  return (
    <>
      <div className="container w-auto h-auto bg-gray-600 flex flex-col items-center justify-center">
        <form className="inputBox flex gap-4 mt-8" onSubmit={handleFormData}>
          <input type="text" name="title" placeholder='Add Title' required className='w-60 h-10 outline-none border-none bg-white focus:border-blue-500 pl-2' value={addPost.title} onChange={handleInputData} />
          <input type="text" name="body" placeholder='Add Post' required className='w-60 h-10 outline-none border-none bg-white focus:outline-blue-500 pl-2' value={addPost.body} onChange={handleInputData} />
          <button className='w-20 h-auto p-1 cursor-pointer bg-blue-400 hover:bg-blue-600 rounded-md'>Add</button>
        </form>
        <ul className='w-auto h-auto p-6 grid grid-cols-3 gap-5'>
          {

            data.map((currData) => {
              const { id, title, body } = currData;
              return(
               <li key={id} className="container w-auto h-auto bg-blue-100 p-2 flex flex-col justify-around gap-4">
                <p>{id}</p>
                <p>Title : {title}</p>
                <p>{body}</p>
                <div className="buttons flex gap-4">
                  <button className='w-20 h-auto bg-green-500 cursor-pointer p-1 rounded-md hover:bg-green-600' onClick={() => handleUpdateData(currData)}>Edit</button>
                  <button className='w-20 h-auto bg-red-500 cursor-pointer p-1 rounded-md hover:bg-red-600' onClick={() => handleDeletePost(id)}>Delete</button>
                </div>
              </li>
              );
            })

          }
        </ul>
      </div>
    </>
  )
}


export default Blogs;
