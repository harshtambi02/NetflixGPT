import { useRef, useState } from "react"
import Header from "./Header"
import checkValidData from "../utils/Validate"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth }  from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice"
import { BG_URL, USER_AVATAR } from "../utils/constants";



const Login = () => {
    

    const[isSignInForm, setisSigninForm] = useState(true)
    const [errorMessage, seterrorMessage] = useState(null)
    const dispatch = useDispatch()
    
    // we will use useRef hook to get the refrence of the email and password.
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const toggleSignInForm = () => {
        // if this function is called then it should change the signin form to sign up form using state variable.
        setisSigninForm(!isSignInForm)  // setsigninform not of issigninform
    }

    const handleButtonClick = () => {
        // now we will validate the form data.

        const message = checkValidData(email.current.value, password.current.value)
        seterrorMessage(message)
        
        if(message) return // this means if my message is present then just return otherwise sign in or sign up 

        // Sign In / Sign Up 
        if(!isSignInForm) {
            // Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_AVATAR
                  }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;  
                    dispatch(
                        addUser({uid: uid ,
                                email: email, 
                                displayName: displayName,
                                photoURL: photoURL,
                    })
                )  
                }).catch((error) => {
                    seterrorMessage(error.message)
                });
                
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + "-" + errorMessage)
            });  

            
        }
        else {
            // Sign Up logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + "-" + errorMessage)
            });
        }
                    
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                src={BG_URL}
                alt="logo"/>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">

            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (
            <input type="text" placeholder="Full Name"
            className="w-full p-4 mb-4 bg-gray-800 bg-opacity-50 rounded-lg"
            ref = {name}
            ></input>
            )}

            <input type="text" placeholder="Email Address or Username"
            className="w-full p-4 mb-4 bg-gray-800 bg-opacity-50 rounded-lg"
            ref = {email}
            ></input>


            <input type="password" placeholder="Password"
            className="w-full p-4 mb-4  bg-gray-800 bg-opacity-50 rounded-lg"
            ref = {password}
            ></input>

            <p className="text-red-500 font-extralight text-lg py-2">{errorMessage}</p>

            <button className="w-full p-3 mt-4 bg-red-600" onClick = {handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p
            className="py-6 cursor-pointer"
            onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
            </p>

            </form>
            
        </div>


)}

export default Login