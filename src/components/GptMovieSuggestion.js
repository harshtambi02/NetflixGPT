import { useSelector } from "react-redux"
import MovieList from "./MovieList"

//  in this we will show all of these movies.
const GptMovieSuggestion = () => {

    const { movieResult, movieNames } = useSelector(store => store.gpt)
    // from gpt slice we will extract our movie names and movie results.

    if (!movieNames || movieNames.length === 0 || !movieResult || movieResult.length === 0) return null;

    if (!movieNames) return null

    // For each movie we have movie results also
    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            <div>
                {movieNames.map((movies, index) => 
                    <MovieList 
                    key ={movies} 
                    title={movies} 
                    movies = {movieResult[index]} />
                )}
                
            </div>
        </div>
    )
}

export default GptMovieSuggestion