import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"

const Body = () => {


    // To provide this routing we have to import a router provider
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",   // this browse page is authenticated, if you are authenticated then only we move top that page
            element: <Browse/>
        },
    ])

    return (
        <div>
            <RouterProvider router = {appRouter}/>
        </div>       
    )
}

export default Body