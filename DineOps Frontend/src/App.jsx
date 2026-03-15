import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home.jsx";
import Auth from "./Components/Auth.jsx";
import Order from "./Components/Orders.jsx";

import Layout from "../src/Components/Layout.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,   // Layout wrapper
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
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;