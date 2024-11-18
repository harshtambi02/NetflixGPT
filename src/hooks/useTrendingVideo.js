import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addTrendingVideo } from "../utils/moviesSlice"

const useTrendingVideo = () => {

    //  FETCH data from TMDB API and upadte the store.
    const dispatch = useDispatch()

    const getTrendingVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS)  // this will return us a promise.

        const json = await data.json()
       
        dispatch(addTrendingVideo(json.results))
        
    }

    useEffect(() => {
        getTrendingVideo()
    }, []) // if we don't put the [] then we will see an infinite api calls.

}

export default useTrendingVideo