import React from 'react'
import { deletePosts } from './API/GetAPI';

const Card = ({currData, data, setData }) => {
  

    const { id, title, body } = currData;

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

  return (
   <>
   <li key={id} className="container w-auto h-auto bg-blue-100 p-2 flex flex-col justify-around gap-4">
     <p>{id}</p>
     <p>Title : {title}</p>
     <p>{body}</p>
     <div className="buttons flex gap-4">
        <button className='w-20 h-auto bg-green-500 cursor-pointer p-1 rounded-md hover:bg-green-600'>Edit</button>
        <button className='w-20 h-auto bg-red-500 cursor-pointer p-1 rounded-md hover:bg-red-600' onClick={()=> handleDeletePost(id)}>Delete</button>
     </div>
   </li>
   </>
  )
}
export default Card;
