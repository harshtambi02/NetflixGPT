import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
   

    const handleSignOut = () => {
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate("/error")
          });
    }

        // we want to call this event listener only once and we want to call it again an again as soon as the state changes so we can use useEffect which will run as soon as the state changes, it will render that compnent and we can write it anywhere like in body or at root level.
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    // this is the sign in case
                    const {uid, email, displayName, photoURL} = user;
                    dispatch(addUser({uid: uid ,
                        email: email, 
                        displayName: displayName,
                        photoURL: photoURL,
                    }))
                    navigate("/browse") // if the user sign in it will navigate it to the browse page.
                    
                } else {
                    // on signput
                    dispatch(removeUser())  // we don't have to pass anything over here coz in that user slice it does not need action.payload
                    navigate("/")  // if the user sign out this will navigate it to the main page.
                }
              });
              
            // we have to unsubscribe to the above onAuthState wehen the component unmounts and this can be done by returning the function.

            return () => unsubscribe()  // kind of event listener which will unscubscribe to the event when our component unmounts.

        }, [])
    
    
    const handleGptSearchClick = () => {
        // Toggle my GPT Search
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
            className="w-44"
            src={LOGO}
            alt="logo"/>
        
        { user && (<div className="flex p-3">
            {showGptSearch && (<select className="p-2 m-2 bg-gray-800 text-white rounded-lg" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(lang => <option key = {lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>)}
            <button className="py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
            >{showGptSearch ? "Home" : "GPT Search"}</button>
            <img
            className="w-12 h-12" 
            alt ="usericon" src={user.photoURL}></img>

            <button
            onClick={handleSignOut}
            className="mx-2 font-bold text-white">Sign Out</button>

        </div>)}
        </div>

    )
}

export default Header


// in the login screen first we will have a header