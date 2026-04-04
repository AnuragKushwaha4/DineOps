import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        role:""
    })


  const navigate = useNavigate();
 
  function handleChange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  function handleLogin(){
    navigate("/auth/login");
  }

  return (

      <div className="bg-white shadow-2xl rounded-2xl p-12 w-[550px] border border-blue-100">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Employee Registration
        </h1>

        <form className="flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-600">Employee Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter employee name"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-600">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm text-gray-600">Select Role</label>

            <div className="grid grid-cols-3 gap-3 mt-2">

              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`py-2 rounded-lg border font-medium transition
                ${role === "admin"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 hover:bg-blue-50"}
                `}
              >
                Admin
              </button>

              <button
                type="button"
                onClick={() => setRole("cashier")}
                className={`py-2 rounded-lg border font-medium transition
                ${role === "cashier"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 hover:bg-blue-50"}
                `}
              >
                Cashier
              </button>

              <button
                type="button"
                onClick={() => setRole("waiter")}
                className={`py-2 rounded-lg border font-medium transition
                ${role === "waiter"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 hover:bg-blue-50"}
                `}
              >
                Waiter
              </button>

            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

        </form>

        {/* Login redirect */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?
        </p>

        <button
          onClick={handleLogin}
          className="w-full mt-2 border border-blue-500 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          Login
        </button>

      </div>

  );
};

export default Register;