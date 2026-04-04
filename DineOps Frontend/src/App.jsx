import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Home from "./Components/Home.jsx";
import Auth from "./Components/Auth.jsx";
import Order from "./Components/Orders.jsx";
import Tables  from "./Components/Tables.jsx";
import Layout from "../src/Components/Layout.jsx";
import Menu from "./Components/Menu.jsx"
import Login from "./Components/AuthComponents/Login.jsx";
import Register from "./Components/AuthComponents/Register.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,  
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "order",
          element: <Order />
        },
        {
          path:"tables",
          element:<Tables/>
        },
        {
          path:"menu",
          element:<Menu/>
        }
      ]
    },
      {
          path: "/auth",
          element: <Auth />,
          children:[
            {
              index:true,
              element:<Navigate to="register"/>
            },
           {
              path:"login",
              element:<Login/>
            },
            {
              path:"register",
              element:<Register/>
            }

          ]
      },
      
  ]);

  return <RouterProvider router={router} />;
}

export default App;