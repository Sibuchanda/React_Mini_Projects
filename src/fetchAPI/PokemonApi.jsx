import React, { useEffect } from 'react'
import { useState } from 'react';

const PokemonApi = () => {

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";


    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setPokemon(data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);


    // ------ For Loading ------- 
    if (loading)
        return (
            <div className='w-screen h-screen bg-amber-100 flex justify-center items-center'>
                <h1 className='font-bold text-4xl'>Loading...</h1>
            </div>
        )
    // ---------- For Error ----------
    if (error)
        return (
            <div className='w-screen h-screen bg-amber-100 flex justify-center items-center'>
                <h1 className='font-bold text-4xl'>{error.message}</h1>
            </div>
        )


    return (
        <>
            <section className='w-screen h-screen bg-amber-100 flex flex-col items-center'>
                <header>
                    <h1 className='text-blue-600 font-bold text-4xl'>Pokemon Game</h1>
                </header>
                <ul className='card mt-6'>
                    <li className='w-80 h-70 bg-gray-100 rounded-md shadow-md hover:shadow-xl flex flex-col items-center cursor-pointer'>
                        <figure className='mt-2'>
                            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className='w-30 h-30' />
                        </figure>
                        <h1 className='text-2xl font-bold mt-2'>{pokemon.name}</h1>
                        <div className="attributes flex gap-6 mt-10">
                            <p className='font-bold text-blue-800'>Height : {pokemon.height}</p>
                            <p className='font-bold text-blue-800'>Weight : {pokemon.weight}</p>
                            <p className='font-bold text-blue-800'>Speed : {pokemon.stats[5].base_stat}</p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default PokemonApi;
