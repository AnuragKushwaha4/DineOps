import React from 'react'

import { MdHome } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";

const NavigationBar = () => {

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] border-t flex justify-around items-center py-2">

      {/* Home */}
      <button className="flex flex-col items-center text-blue-500 hover:text-blue-600">
        <MdHome className="text-2xl"/>
        <span className="text-xs">Home</span>
      </button>

      {/* Orders */}
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <FaClipboardList className="text-2xl"/>
        <span className="text-xs">Orders</span>
      </button>

      {/* New Order (Main Action) */}
      <button className="flex flex-col items-center justify-center bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-105 -mt-8">
        <IoAdd className="text-3xl"/>
      </button>

      {/* Tables */}
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <MdTableRestaurant className="text-2xl"/>
        <span className="text-xs">Tables</span>
      </button>

      {/* More */}
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <FiMoreHorizontal className="text-2xl"/>
        <span className="text-xs">More</span>
      </button>

    </div>
  )
}

export default NavigationBar