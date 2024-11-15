import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addUpcomingMovies } from "../utils/moviesSlice"

const useUpcomingMovies = () => {

    //  FETCH data from TMDB API and upadte the store.
    const dispatch = useDispatch()

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS)  // this will return us a promise.

        const json = await data.json()
       
        dispatch(addUpcomingMovies(json.results))
        
    }

    useEffect(() => {
        getUpcomingMovies()
    }, []) // if we don't put the [] then we will see an infinite api calls.

}

export default useUpcomingMovies