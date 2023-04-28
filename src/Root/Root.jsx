import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Categories from "../Pages/Categories/Categories";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
import Login from "../LoginAndRegister/Login/Login";
import Register from "../LoginAndRegister/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Categories></Categories>,
                loader:() => fetch('http://localhost:3000/news')
            },
            {
                path: "/category/:id",
                element: <Categories></Categories>,
                loader:({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:'/news/:id',
                element:<News></News>,
                loader:({params})=> fetch(`http://localhost:3000/news/${params.id}`),
            }
        ]
    },
    {
        path:'login',
        element:<Login></Login>,
    },
    {
        path:'register',
        element:<Register></Register>
    }
]);

export default router ;