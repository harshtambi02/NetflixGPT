import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addPopularMovies } from "../utils/moviesSlice"

const usePopularMovies = () => {

    //  FETCH data from TMDB API and upadte the store.
    const dispatch = useDispatch()

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS)  // this will return us a promise.

        const json = await data.json()
       
        dispatch(addPopularMovies(json.results))
        
    }

    useEffect(() => {
        getPopularMovies()
    }, []) // if we don't put the [] then we will see an infinite api calls.

}

export default usePopularMovies