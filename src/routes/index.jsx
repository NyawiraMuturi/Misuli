import {createBrowserRouter} from 'react-router-dom'
import Landing from '../pages/Landing'
import Login from '../pages/userAuth/Login'
import Register from '../pages/userAuth/Register'
import ForgotPass from '../pages/userAuth/ForgotPass'
import ResetPass from '../pages/userAuth/ResetPass'
import Layout from '../components/Layout/Layout'
import Dashboard from '../pages/Dashboard'
import Activity from '../pages/Activity'
import MealPrep from '../pages/MealPrep'

const router = createBrowserRouter ([
    {
        path: "/home",
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
    }, 


    {
        path: "/",
        element: <Layout/>, 
        children:[
            {
                path:'/',
                element: <Dashboard/>
            },

            {
                path:'/activity',
                element: <Activity/>
            },

            {
                path:'/meal-plan',
                element: <MealPrep/>
            },
        ]
    }, 


])

export {router}