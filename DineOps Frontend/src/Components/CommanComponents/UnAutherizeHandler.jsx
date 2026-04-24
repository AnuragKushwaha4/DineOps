import React from "react";
import { useNavigate } from "react-router-dom";
import { FiAlertTriangle, FiHome, FiLogIn } from "react-icons/fi";

const Unauthorized404 = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-6">

      <div className="bg-white shadow-lg rounded-xl p-10 max-w-lg w-full text-center">

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <FiAlertTriangle className="text-blue-500 text-6xl" />
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-bold text-blue-600 mb-2">
          404
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Unauthorized Route
        </h2>

        <p className="text-gray-500 text-sm mb-8">
          The page you are trying to access either does not exist or you do not
          have permission to view it.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <FiHome />
            Go Home
          </button>

          <button
            onClick={() => navigate("/auth/login")}
            className="flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-200 transition"
          >
            <FiLogIn />
            Login
          </button>

        </div>

      </div>

    </div>
  );
};

export default Unauthorized404;