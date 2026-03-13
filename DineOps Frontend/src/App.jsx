import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./Components/Home.jsx"
import Auth from "./Components/Auth.jsx"
import Order from "./Components/Orders.jsx"

import Header from "./Components/CommanComponents/Header.jsx"

function App() {

  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<>
  
        <Home/>
        </>
      },
      {
        path:"/auth",
        element:<>
       
        <Auth/>
        </>
      },
      {
        path:"/order",
        element:<>
        <Order/>
        </>
      }

    ]
  )
  return (
    <>
      <Header/>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
