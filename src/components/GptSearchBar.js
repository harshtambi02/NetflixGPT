import { useSelector, useDispatch } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react"

import { GoogleGenerativeAI } from '@google/generative-ai';
import { GENAI_KEY } from "../utils/constants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";




const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    const fetchMovie = async(movie)=>{ 

        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +
          "&include_adult=false&language=en-US&page=1", API_OPTIONS);

        const json = await data.json();
        return json.results;
      }


//     const handleGptSearchClick = async () => {
//         console.log(searchText.current.value);
//         // make an api call to gpt api and get movie results.

//         const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya"

//         const gptResults = await openai.chat.completions.create({
//             messages: [{ role: 'user', content: gptQuery }],
//             model: 'gpt-3.5-turbo',
//           });
//           console.log(gptResults.choices?.[0]?.message?.content);
          
//           const gptMovies = gptResults.choices?.[0]?.message?.content
// }
            const handleGptSearchClick = async ()=>{
                const gptQuery="Act as movie recommendation system and suggest some movies for the query "+searchText.current.value
                + "only give me name of 5 movies, comma separated like this example given ahead . example result : avengers end game , the avengers  , iron man , avenger age of ultron , deadpool and wolverine, do not make names bold and give anything else"
                try {
                  
                const genAI = new GoogleGenerativeAI(GENAI_KEY);
        
                  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        
                const prompt = gptQuery;
        
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                const gptMovies = text.split(",");
                const promisedArray = gptMovies.map((movie)=>fetchMovie(movie));
          
                const tmdbResult = await Promise.all(promisedArray);
                console.log(tmdbResult);
                dispatch(addGptMovieResult({movieNames:gptMovies,movieResult:tmdbResult}));
                  
                } 
                catch (error) {
                  console.log(error);
                  console.log("can not retrieve data from gemini Api so using hard coded data instead");
                  const gptMovies = ["Avengers","Batman","Iron Man" ,"Thor","Spider Man"];
                  const promisedArray = gptMovies.map((movie) => fetchMovie(movie));  // this will return us the promises
                  
                  const tmdbResult = await Promise.all(promisedArray);  // Promise.all() resolve all the promises first and then give me the results.

                  console.log(tmdbResult);
                  dispatch(addGptMovieResult({movieNames: gptMovies,movieResult: tmdbResult}));
                }
            }

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12 bg-opacity-60" onSubmit={(e) => e.preventDefault()}>
                <input 
                ref = {searchText}
                type="text"  
                className = "p-4 m-4 col-span-9"
                placeholder={lang[langKey].gptSearchPlaceholder}></input>

                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
                onClick={handleGptSearchClick}>
                    {lang[langKey].search}</button>
            </form>
        </div>
    )

}

export default GptSearchBar