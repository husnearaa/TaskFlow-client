import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AllTask from "../pages/Dashboard/AllTask";
import AddTask from "../pages/Dashboard/AddTask";







const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/dashboard',
                element:<PrivateRoute><AllTask></AllTask></PrivateRoute>
            },
            {
                path:'/dashboard/addTask',
                element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
           
           
        ]
    },
])

export default myCreatedRoute;