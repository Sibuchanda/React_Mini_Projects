import React from 'react'
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';

const Movies = () => {

 const movieData = useLoaderData();
//  console.log(movieData);


  return (
   <>
   <ul className='w-auto h-auto bg-amber-100 grid grid-cols-4 mt-4 p-4 gap-10'>

    {
      movieData && movieData.Search.map((currMovie)=>{
        return <MovieCard key={currMovie.imdbID} currMovie={currMovie} />
      })


    }

   </ul>
   
   </>
  )
}

export default Movies;
