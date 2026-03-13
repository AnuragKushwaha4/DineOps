import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./Components/Home.jsx"
import Auth from "./Components/Auth.jsx"
import Order from "./Components/Orders.jsx"

import Header from "./Components/CommanComponents/Header.jsx"
import NavigationBar from "./Components/CommanComponents/NavigationBar.jsx"

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
      <NavigationBar/>
      <RouterProvider router={router}></RouterProvider>
      
    </>
  )
}

export default App
