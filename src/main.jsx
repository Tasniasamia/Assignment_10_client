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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_layout></Home_layout>,
    children:[{
      path:"/",
      element:<Home></Home>
    }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);