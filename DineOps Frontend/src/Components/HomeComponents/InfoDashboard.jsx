import React from 'react'
import { FiDollarSign, FiTrendingUp, FiPackage } from "react-icons/fi"
import { MdTableRestaurant } from "react-icons/md"

const InfoDashboard = () => {
  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Revenue Card */}
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 min-h-[160px] flex flex-col justify-center">

        <div className="flex items-center gap-3">
          <FiDollarSign className="text-green-500 text-2xl"/>
          <h1 className="text-gray-700 font-medium text-lg">
            Today's Earning
          </h1>
        </div>

        <p className="text-3xl font-bold text-gray-800">
          ₹12,000
        </p>

        <div className="flex items-center gap-3 pt-3 border-t">
          <FiTrendingUp className="text-blue-500 text-xl"/>
          <p className="text-sm text-gray-600">
            Average Order Value: <span className="font-semibold">₹500</span>
          </p>
        </div>

      </div>

      {/* Operations Card */}
      <div className="bg-white shadow-md rounded-xl p-6 space-y-5 min-h-[180px] flex flex-col justify-center">

        <div className="flex items-center gap-3">
          <MdTableRestaurant className="text-blue-500 text-2xl"/>
          <p className="text-gray-700 text-base">
            Table Occupied: <span className="font-semibold">9</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <MdTableRestaurant className="text-green-500 text-2xl"/>
          <p className="text-gray-700 text-base">
            Table Available: <span className="font-semibold">5</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FiPackage className="text-orange-500 text-2xl"/>
          <p className="text-gray-700 text-base">
            Orders in Process: <span className="font-semibold">7</span>
          </p>
        </div>

      </div>

    </div>
  )
}

export default InfoDashboard