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
import Blog from './Component/Pages/Home/Home/Blog/Blog';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import Resister from './Component/Pages/Resister/Resister';
import Login from './Component/Pages/Login/Login';
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
    },{
      path:"/Blog",
      element:<Blog></Blog>,

    },{
      path:"/Resister",
      element:<Resister></Resister>,
    },{
      path:"/Login",
      element:<Login></Login>,
    }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<AuthProvider>
    <RouterProvider router={router} /></AuthProvider>

);