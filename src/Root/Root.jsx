import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Categories from "../Pages/Categories/Categories";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
import Login from "../LoginAndRegister/Login/Login";
import Register from "../LoginAndRegister/Register/Register";
import LoginLayout from "../Layouts/LoginLayout";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Terms from "../Pages/Terms/Terms";

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
            },
            {
                path:'terms',
                element:<Terms></Terms>
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
                loader:({params}) => fetch(`https://mydatas-khanziaul.vercel.app/categories/${params.id}`)
            },
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRouter> <News></News> </PrivateRouter>,
                loader:({params})=> fetch(`https://mydatas-khanziaul.vercel.app/news/${params.id}`)
            }
        ]
    }
]);

export default router ;