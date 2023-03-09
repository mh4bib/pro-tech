import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import TopRated from "../pages/TopRated";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/top-rated",
                element: <TopRated/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
        ],
    },

]);

export default routes;