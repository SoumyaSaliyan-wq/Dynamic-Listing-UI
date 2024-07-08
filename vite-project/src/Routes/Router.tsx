import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cities from "../Pages/Cities";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";

export  const Router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {path:'city',element:<Cities></Cities>},
            {path:'home',element:<Home></Home>},
            {path:'blogs',element:<Blogs></Blogs>}
        ]
    }
])