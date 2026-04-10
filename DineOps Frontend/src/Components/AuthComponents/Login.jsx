import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useMutation} from "@tanstack/react-query"
import {login} from "../../Https/index"
import {enqueueSnackbar} from "notistack"
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Slice/UserSlice";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSignup(e){
    e.preventDefault();
    navigate("/auth/register");
  }

  const loginMutation = useMutation({
    mutationFn:(reqData)=>login(reqData),
    onSuccess:(res)=>{
      const {data}=res;
      console.log(data)
      const {_id,name,email,phone,role}=data.data;
      dispatch(setUser({_id,name,email,phone,role}))
      navigate("/")
    },
    onError:(error)=>{
      const {response}=error;
      enqueueSnackbar(response.data.message,{variant:"error"})
    }
  })


  function handleSubmit(e){
  e.preventDefault()

  loginMutation.mutate(formData)
}
  return (

    <div className="bg-white shadow-2xl rounded-2xl p-12 w-full max-w-xl border border-blue-100">

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Sign In
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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