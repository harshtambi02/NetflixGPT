import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice"

const useNowPlayingMovies = () => {

    //  FETCH data from TMDB API and upadte the store.
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)  // this will return us a promise.

        const json = await data.json()
       
        dispatch(addNowPlayingMovies(json.results))
        
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, []) // if we don't put the [] then we will see an infinite api calls.

}

export default useNowPlayingMovies