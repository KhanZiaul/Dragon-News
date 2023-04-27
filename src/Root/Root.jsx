import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Category/Category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader:({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
            }
        ]
    },
]);

export default router ;