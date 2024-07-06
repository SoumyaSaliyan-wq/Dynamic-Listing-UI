import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cities from "../Pages/Cities";
import Home from "../Pages/Home";

export  const Router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {path:'city',element:<Cities></Cities>},
            {path:'home',element:<Home></Home>}
        ]
    }
])