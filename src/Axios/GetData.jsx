import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import Card2 from './Card2';


const GetData = ()=>{

const [data, setData] = useState([]);

const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_THAPA_API_KEY}=titanic&page=1`;

const getMoviesData = async()=>{

    try{
        const res = await Axios.get(API);
        // console.log(res);
        setData(res.data.Search);

       }catch(err){
           console.log(err);
       }
}

useEffect(()=>{
   getMoviesData(); 
},[]);


return(
    <>
    {
        data.map((currElement)=>{
            return <Card2 key={currElement.imdbID} movieData={currElement}/>;
        })
    }
    </>
)


}

export default GetData;
