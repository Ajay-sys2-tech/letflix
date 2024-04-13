import Results from "@/components/Results";
const API_KEY = process.env.API_KEY;


const SearchPage = async ({params}) => {
    const searchTerm  = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
    const data = await res.json();
    const results = data.results;
    console.log(results);

  return (
    <div>
        {
            results && results.length === (
                <h1 className="text-center pt-6">No results found</h1>
            )
        }
        {
            results && <Results results={results} />
        }
    </div>
  )
}

export default SearchPage;
