import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "./AuthComponents/Header";

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <AuthHeader />
      <Outlet />
    </div>
  );
};

export default Auth;