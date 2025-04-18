import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MailLayout from "../layouts/MailLayout";
import About from "../pages/About";
import Error from "../pages/Error";
import Favorites from "../pages/Favorites";
import PhoneDetails from "../pages/PhoneDetails";

const loader = <>
    <div className="flex justify-center mt-4">
        <span className="loading loading-spinner text-primary"></span>
    </div>
</>

const router = createBrowserRouter([
    {
        path: "/",
        Component: MailLayout,
        errorElement: <Error />,
        children: [
            {
                index: true,
                hydrateFallbackElement: loader,
                loader: () => fetch('../phones.json'),
                Component: Home
            },
            {
                path: '/phone-details/:id',
                hydrateFallbackElement: loader,
                loader: () => fetch('../phones.json'),
                Component: PhoneDetails
            },
            { path: '/about', Component: About },
            { path: '/favorites', Component: Favorites }
        ]
    },
]);
export default router