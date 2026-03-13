import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo"className="w-10 h-10 rounded-full object-cover"/>
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

      {/* User Info */}
      <div className="flex items-center gap-4">

        <IoNotificationsOutline className="text-2xl text-blue-500 cursor-pointer hover:text-blue-600"/>

        <FaUserCircle className="text-3xl text-blue-500"/>

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium text-gray-800">
            Anurag Kushwaha
          </span>
          <span className="text-xs text-gray-500">
            Admin
          </span>
        </div>

      </div>

    </div>
  )
}

export default Header