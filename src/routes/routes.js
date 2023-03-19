import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
// import Cart from "../pages/Cart";
import Dashboard from "../layout/Dashboard/Dashboard";
import ContentList from "../pages/dashboard/ContentList";
import AddContent from "../pages/dashboard/AddContent";
import ReadingHistory from "../pages/ReadingHistory";
import ReadMore from "../pages/ReadMore";
import UpdateContent from "../pages/dashboard/UpdateContent";

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
                path: "/about",
                element: <About />,
            },
            {
                path: "/history",
                element: <ReadingHistory />,
            },
            {
                path: "/read/:_id",
                element: <ReadMore />,
            },
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
                    {
                        path: "update-content/:_id",
                        element: <UpdateContent />,
                    },
                ],
            },
        ],
    },

]);

export default routes;