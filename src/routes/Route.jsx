import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";






const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default myCreatedRoute;