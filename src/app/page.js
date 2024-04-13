// const API_KEY = process.env.API_KEY;
import LoadMore from "@/components/LoadMore";
import Results from "@/components/Results";
import getMovie from "./action";

export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending';
  

  // const getMovie = async (genre, page)  =>{
  //   const res = await fetch (
  //     `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=${page}`,
  //     { next: { revalidate: 10000}}
  //   );

  //   const data = await res.json();
  //   if(!res.ok){
  //     throw new Error('Failed to fetch data');    
  //   }

  //   return data.results;
  // }

  // const res = await fetch (
  //   `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`,
  //   { next: { revalidate: 10000}}
  // );

  // const data = await res.json();
  // if(!res.ok){
  //   throw new Error('Failed to fetch data');    
  // }

  // const results = data.results;

  const results = await getMovie(genre, 1);
  return (
    <div>
      <Results results={results}/>
      <LoadMore genre={genre} oldData={results}/>
    </div>
  )
}
