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
            {/* <RouterProvider router = {appRouter}/> */}
            <RouterProvider
                router={appRouter}
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                    v7_fetcherPersist: true,
                    v7_normalizeFormMethod: true,
                    v7_partialHydration: true,
                    v7_skipActionErrorRevalidation: true,
                }}
                />
        </div>       
    )
}

export default Body