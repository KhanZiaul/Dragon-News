import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Categories from "../Pages/Categories/Categories";
import NewsLayout from "../Layouts/NewsLayout";

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
        path:'news/:id',
        element:<NewsLayout></NewsLayout>
    }
]);

export default router ;