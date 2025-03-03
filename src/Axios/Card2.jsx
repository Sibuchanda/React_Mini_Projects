import React from 'react'
import { NavLink } from 'react-router-dom';

const Card2 = ({ currMovie }) => {

    const { Poster, imdbID } = currMovie;

    return (
        <>
            <li className='w-50 h-60 container flex flex-col shadow-md justify-center items-center mt-4'>

                <div className="imgContainer w-auto h-auto">
                    <img src={Poster} alt={imdbID} className='w-50 h-60' />
                </div>
                <div className="buttonContainer">
                    <NavLink to={`/movie/${imdbID}`}>
                    <button className='w-auto h-auto border p-2'> Watch Now </button>
                    </NavLink>
                </div>
            </li>

        </>
    )
}

export default Card2;
