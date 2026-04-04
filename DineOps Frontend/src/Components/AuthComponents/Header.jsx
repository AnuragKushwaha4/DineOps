import React from "react";
import logo from "../../assets/logo.png";

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mb-6">
      <img
        src={logo}
        alt="DineOps Logo"
        className="w-14 h-14 rounded-full object-cover shadow-md"
      />

      <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
        The Modern Bite
      </h1>

      <p className="text-sm text-gray-500">
        Powering modern restaurant management
      </p>
    </div>
  );
};

export default AuthHeader;