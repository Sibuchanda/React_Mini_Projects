
const getSingleMovieData = async ({params})=>{
    // console.log(params);
    const id = params.movieID;

    try{
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_THAPA_API_KEY}`)

        const data = response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export default getSingleMovieData;