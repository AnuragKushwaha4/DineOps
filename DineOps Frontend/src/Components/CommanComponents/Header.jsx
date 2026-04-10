import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch, FiLogOut } from "react-icons/fi";
import logo from "../../assets/logo.png"
import {useDispatch, useSelector} from "react-redux"
import {useMutation} from "@tanstack/react-query"
import {logout} from "../../Https/index"
import { removeUser } from '../../Redux/Slice/UserSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const userData = useSelector(state=>state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn:()=>logout(),
    onSuccess:(data)=>{
      console.log(data)
      dispatch(removeUser());
      navigate("/auth/login")
    },
    onError:(error)=>{
      const {response}=error;
      enqueueSnackbar(response.data.message,{variant:"error"})
    }
  })

  function handleLogout(e){
     e.preventDefault();
     logoutMutation.mutate()

  }
  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-10 h-10 rounded-full object-cover"/>
        <h1 className="text-xl font-semibold text-blue-600">
          The Modern Bite
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg w-80">
        <FiSearch className="text-blue-500 mr-2"/>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <IoNotificationsOutline className="text-2xl text-blue-500 cursor-pointer hover:text-blue-600 transition"/>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-3xl text-blue-500"/>

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-gray-800">
              {userData.name || "USER"}
            </span>
            <span className="text-xs text-gray-500">
              {userData.role || "role"}
            </span>
          </div>
        </div>

        {/* Logout Button (Faded) */}
        <button onClick={handleLogout}
          className="flex items-center justify-center p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
        >
          <FiLogOut className="text-lg"/>
        </button>

      </div>

    </div>
  )
}

export default Header