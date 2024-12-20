import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    
    useMovieTrailer(movieId)

    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <div className="w-screen">
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe
            className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
            ></iframe>
        </div>
    )
}

export default VideoBackground