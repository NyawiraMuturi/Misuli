import {createBrowserRouter} from 'react-router-dom'
import Landing from '../pages/Landing'
import Login from '../pages/userAuth/Login'
import Register from '../pages/userAuth/Register'
import ForgotPass from '../pages/userAuth/ForgotPass'
import ResetPass from '../pages/userAuth/ResetPass'

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Landing/>
    }, 
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },

    {
        path: "/forgot-password",
        element: <ForgotPass/>
    },

    {
        path: "/reset-password",
        element: <ResetPass/>
    }

])

export {router}