
const getMovieData = async ()=>{

    try{
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_THAPA_API_KEY}=titanic&page=1`)

        const data = response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export default getMovieData;