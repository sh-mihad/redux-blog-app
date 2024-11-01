import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SingleBlog from "../pages/SingleBlog";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/blog/:id",
        element: <SingleBlog/>
    },
])

