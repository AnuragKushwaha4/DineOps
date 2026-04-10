import Header from "./CommanComponents/Header.jsx";
import NavigationBar from "./CommanComponents/NavigationBar.jsx";
import { Outlet } from "react-router-dom";


const Layout = () => {

 
  return (
    <>
      <Header />
      <Outlet />
      <NavigationBar />
    </>
  );
};

export default Layout;