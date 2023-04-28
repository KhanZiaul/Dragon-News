import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Categories from "../Pages/Categories/Categories";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
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
    }
]);

export default router ;