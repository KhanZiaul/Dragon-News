import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Categories from "../Pages/Categories/Categories";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
import Login from "../LoginAndRegister/Login/Login";
import Register from "../LoginAndRegister/Register/Register";
import LoginLayout from "../Layouts/LoginLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children:[
            {
                path: ":id",
                element: <Categories></Categories>,
                loader:({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
            },
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<News></News>,
                loader:({params})=> fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }
]);

export default router ;