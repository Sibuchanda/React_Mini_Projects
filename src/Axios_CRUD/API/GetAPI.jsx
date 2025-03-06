import axios from "axios";

// creates a reusable axios instance with default settings.
const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
});

//Fetching all the posts data from baseURL
const getPosts = ()=>{
    return api.get("/posts");  // It appends /posts at the end of baseURL and then returns the result
}

// Delete posts

const deletePosts = (id)=>{
  return api.delete(`/posts/${id}`);
}

export  { getPosts, deletePosts };