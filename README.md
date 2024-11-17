# Netflix GPT 

- Create React App
- Configured tailwind css into our app
- Header
- Routing
- Login Form
- Sign In Form  (we are using a same form for handling sign in and sign up and we will just toggle it using state variable)
- Form validation
- useRef
- Authentication (we will use firebase for the authentication)
- Deploying our app to production
- Create a signup user account using firebase authentication documents.(using API - createUserWtihEmailandPassword)
- after authentication of sign up / sign in we have to redirect the user to the browse page.
- once our user sign in we keep that object data into our redux store, as we can access that data anywhere in the app and then navigate the user onto the browse page.
- created our redux store with user slice.
- now as soon as our user signs in we want to update that user slice with user information.
- Implemented sign out.
- Update profile API
- Fetch from TMDB Movies.
- BUG FIX: Sign Up user displayName and profile picture update.
- BUG FIX : If the user is not logged in Redirect / browse to login page and vice - versa.
- Unsubscribed to onAuthStateCahnged callback.
- Add hardcoded values to the constant file.
- Registered TMDB  API & create an app and get the access token.
- Get data from TMDB now playing movies list API.
- Custom hook for now Playing Movies.
- Create MovieSlice.
- Planning for mainContainer and Secondary Container.
- Fetch data for trailer video.
- Update the store with Trailer Video data.
- Embedded the youtube video and make it autoplay and mute.
- Tailwind classes to make Main Container look awesome.
- Build Secondary component.
- Build the movie list.
- Build the movie card.
- TMDB image CDN URL.
- Made the browse page amazing with Tailwind CSS.
- usePopularMovies custom hook.
- GPT Search
- GPT Search Bar
- Multi- lnaguage feature in our app.
- Integrate GPT API's.

# Features 
- Login / Signup Page
    - Sign In/ Sign up Form
    - redirect to browse page after authentication

- Browse Page (only comes after authentication)
    - Header 
    - Main movie 
        - Trailer in background 
        - Title and description
        - Movie suggestions
            - Movies list * N

- Nteflix GPT 
    - Search Barw
    - Movie Suggestion


# EXPLAINATION:

- when we are building a form we always need a validation inside a form, so if we have very big form we have to use a library called formik.

- we have a test function for regex.
- we will check the email  validation through regex.
- we can get the value by two ways the first one is state variables and the second one is useRef.

- To call any api from firebase we need const auth = getAuth() so we will do this in a central place we will write this in a firebase.js

- like when ever we dispatch an action we have to do here and there but we can prevent it using firebase by using onAuthStateChange (API), this api is called whenever there is some authentication happens. (kind of event listener)

- WHY WE USE useEffect for authentication state change? => because we have to set it once with the []

- to use the photo url over the header we will use the useSelector.

- whenever the user signs up we are dispatching a add user item over body.js but it is not updating displayname and photoURL because by that time the displayName and photoURL is not there because it is updated after creatingthe user and after that we are not setting the store up and good solution will be that we should dispatch the action right from that point.(updateProfile)

- We have to fix the bug, suppose if the user is not signed in but we can still access the /browse page that is not good so we have to fix that also.

- we can fix it by navigating the page in onAuthStateChange but it will throw an error as it will not be inside the RouterProvider and we want that useEffect everywhere like in a central place so we will place that in Header Component and we can there navigate through the onAuthStateChange and then we can remove the navigation from  login after sign in / sign up.

- When we are making the API call it is making it two times but why ?
it is because of react strict moode as we disable the strict mode in index.js we can see the api call only one time. 
 
- But why some things are called twice in strict mode?
    - react does extra rendering in local just to check some inconsistencies in bw your call, it only happens in development mode.

- We can put the movie data into the store.
- After adding movies to the store we will add json.results into the movie slice.
- we don't want our browse component to be messy so we will create the custom hook and extract the logic there.

- Main Container needs the data to be shown which will come from our store using the selector.

- if we are using redux store then we dont have to create the state variable in the VideoBackground for storing the trailer key.

- Before adding the toggling feature into the GPT search button we will have to sotre that page somewhere we can use state variable for that but we are already using redux so we can store that in redux by creating the new slice.

- We use useRef to get the data from the GptSearchBox on the text.

- Once we have got the movie data then we just pushed it inside our store and show it to the user.

- We can pass an object insdide the dispatch(name({})) to pass muiltiple actions and then we have to extract that in our slice.

- If we searched something and go back to homepage then it is not deleting the result and it was not in the homepage DOM because these were present in our redux store there are two layes data and ui and gpt page is not in the ui layer and data layer is still holding the data as soon as we come to our gpt page the data layer populates the page.