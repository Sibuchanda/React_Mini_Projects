import React, { useEffect } from 'react'
import getPosts from './Axios_CRUD/API/GetAPI';

const App = () => {

  // console.log(getPosts());
   const getAllPostsData = async ()=>{
        try{
          const data = await getPosts();
          console.log(data.data[0]);
        }catch(err){
          console.log(err);
        }
   };

  useEffect(()=>{
    getAllPostsData();
  },[]);




  return (
   <>
   <h1>Hello APP</h1>
   </>
  )
}


export default App;