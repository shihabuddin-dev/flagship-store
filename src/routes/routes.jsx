import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MailLayout from "../layouts/MailLayout";
import About from "../pages/About";
import Error from "../pages/Error";
import Favorites from "../pages/Favorites";
import PhonesContainer from "../components/PhonesContainer";

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
                Component: Home,
                hydrateFallbackElement: loader,
                loader: () => fetch('../phones.json')
            },
            {path: '/phone-details:id', Component: PhonesContainer},
            { path: '/about', Component: About },
            { path: '/favorites', Component: Favorites }
        ]
    },
]);
export default router