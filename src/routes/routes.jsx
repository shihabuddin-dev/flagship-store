import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MailLayout from "../layouts/MailLayout";
import About from "../pages/About";
import Error from "../pages/Error";
import Favorites from "../pages/Favorites";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MailLayout,
        errorElement: <Error />,
        children: [
            { index: true, Component: Home },
            { path: '/about', Component: About },
            { path: '/favorites', Component: Favorites }
        ]
    },
]);
export default router