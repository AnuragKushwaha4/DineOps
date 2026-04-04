import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  function handleSignup(e){
    e.preventDefault();
    navigate("/auth/register");
  }

  return (

    <div className="bg-white shadow-2xl rounded-2xl p-12 w-full max-w-xl border border-blue-100">

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Sign In
      </h1>

      <form className="flex flex-col gap-5">

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Forgot password */}
        <p className="text-sm text-blue-600 cursor-pointer hover:underline text-right">
          Forgot password?
        </p>

        {/* Sign in button */}
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Sign In
        </button>

      </form>

      {/* Signup redirect */}
      <p className="text-sm text-center mt-6 text-gray-600">
        Don't have an account?
      </p>

      <button
        onClick={handleSignup}
        className="w-full mt-2 border border-blue-500 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
      >
        Create Account
      </button>

    </div>

  );
};

export default Login;