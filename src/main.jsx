import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home_layout from './Component/Layout/Home_layout/Home_layout';
import Home from './Component/Pages/Home/Home/Home';
import Home_details from './Component/Pages/Home/Home_details/Home_details';
import ErrorPage from './Component/Pages/Errorpage/Errorpage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_layout></Home_layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:"/",
      element:<Home></Home>,
      loader:()=>fetch('https://assignment-server-tasniasamia.vercel.app/chef'),
    },{
      path:"/home_layout/:id",
      element:<Home_details></Home_details>,
      loader:({params})=>fetch(`https://assignment-server-tasniasamia.vercel.app/recepie/${params.id}`)
    }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);