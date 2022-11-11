import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import AddService from "../../Pages/Services/addservice/AddService";
import MyReviews from "../../Pages/Services/Review/MyReviews";
import PostReview from "../../Pages/Services/Review/PostReview";
import Review from "../../Pages/Services/Review/Review";
import AllServices from "../../Pages/Services/Services/AllServices";
import ServiceDetails from "../../Pages/Services/Services/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/reviews',
                element: <Review></Review>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/post-review/:id',
                element: <PrivateRoute><PostReview></PostReview></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/my-reviews',
                element: <MyReviews></MyReviews>,
                loader: () => fetch('http://localhost:5000/reviews')

            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/allServices')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
            
        ]
    }
])

export default router;