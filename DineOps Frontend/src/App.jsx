import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home.jsx";
import Auth from "./Components/Auth.jsx";
import Order from "./Components/Orders.jsx";
import Tables  from "./Components/Tables.jsx";
import Layout from "../src/Components/Layout.jsx";
import Menu from "./Components/Menu.jsx"

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
          path: "/auth",
          element: <Auth />
        },
        {
          path: "/order",
          element: <Order />
        },
        {
          path:"/tables",
          element:<Tables/>
        },
        {
          path:"/menu",
          element:<Menu/>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;