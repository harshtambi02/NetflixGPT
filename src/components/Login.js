import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const[isSignInForm, setisSigninForm] = useState(true)

    const toggleSignInForm = () => {
        // if this function is called then it should change the signin form to sign up form using state variable.
        setisSigninForm(!isSignInForm)  // setsigninform not of issigninform
    }


    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
                alt="logo"/>
            </div>

            <form className="w-3/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">

            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (
            <input type="text" placeholder="Full Name"
            className="w-full p-4 mb-4 bg-gray-800 bg-opacity-50 rounded-lg"></input>
            )}

            <input type="text" placeholder="Email Address or Username"
            className="w-full p-4 mb-4 bg-gray-800 bg-opacity-50 rounded-lg"></input>


            <input type="text" placeholder="Password"
            className="w-full p-4 mb-4  bg-gray-800 bg-opacity-50 rounded-lg"></input>

            <button className="w-full p-3 mt-4 bg-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p
            className="py-6 cursor-pointer"
            onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
            </p>

            </form>
            
        </div>

        


)}

export default Login