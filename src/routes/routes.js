import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import TopRated from "../pages/TopRated";
// import Cart from "../pages/Cart";
import Dashboard from "../layout/Dashboard/Dashboard";
import ContentList from "../pages/dashboard/ContentList";
import AddContent from "../pages/dashboard/AddContent";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/top-rated",
                element: <TopRated />,
            },
            {
                path: "/about",
                element: <About />,
            },
            /* {
                path: "/cart",
                element: <Cart />,
            }, */
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "/dashboard",
                        element: <ContentList />,
                    },
                    {
                        path: "add-content",
                        element: <AddContent />,
                    },
                ],
            },
        ],
    },

]);

export default routes;