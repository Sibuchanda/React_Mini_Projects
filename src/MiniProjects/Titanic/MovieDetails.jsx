import React from 'react'
import { useLoaderData } from 'react-router-dom';

const MovieDetails = () => {

 const movieData = useLoaderData();
//  console.log(movieData);

  return (
   <>
     <div className="container w-screen h-screen bg-amber-100 flex flex-col justify-center items-center">
        <div className="header w-auto h-auto">
         <h1 className='text-4xl'>{movieData.Title}</h1>
         <h2 className='text-md'>{movieData.Year}</h2>
         <h2 className='text-md'>{movieData.Released}</h2>
        </div>
        <div className="body">
          <h1 className='text-md'>Actors : </h1>
          <p className='text-xl'>{movieData.Actors}</p>
        </div>
     </div>
   
   </>
  )
}

export default MovieDetails;
