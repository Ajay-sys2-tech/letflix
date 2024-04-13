const API_KEY = process.env.API_KEY;


const getMovie = async (genre, page)  =>{
    const res = await fetch (
      `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=ec961df14ff68b366511cfd6c1e6979c&language=en-US&page=${page}`,
      { next: { revalidate: 10000}}
    );

    const data = await res.json();
    if(!res.ok){
      throw new Error('Failed to fetch data');    
    }

    return data.results;
  }

  export default getMovie;