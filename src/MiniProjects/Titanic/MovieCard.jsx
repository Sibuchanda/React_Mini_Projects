import React from 'react'

const MovieCard = ({ currMovie }) => {

    const { Poster, imdbID } = currMovie;

    return (
        <>
            <li className='w-50 h-60 container flex flex-col shadow-md justify-center items-center mt-4'>

                <div className="imgContainer w-auto h-auto">
                    <img src={Poster} alt={imdbID} className='w-50 h-60' />
                </div>
                <div className="buttonContainer">
                    <button className='w-auto h-auto border p-2'> Watch Now </button>
                </div>
            </li>

        </>
    )
}

export default MovieCard;
