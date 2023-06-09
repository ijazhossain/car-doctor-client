import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`https://car-doctor-server-pied.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    }
])
export default router;