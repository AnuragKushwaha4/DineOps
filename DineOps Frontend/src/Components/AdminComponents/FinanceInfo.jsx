import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const FinanceInfo = () => {
  return (
    <div className="space-y-8">

      {/* Top Filter */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Financial Overview
        </h1>

        <select
          className="border border-blue-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>1 Month</option>
          <option>2 Months</option>
          <option>6 Months</option>
          <option>1 Year</option>
        </select>
      </div>

      {/* FINANCIAL RECORDS */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Financial Records
        </h2>

        <div className="grid grid-cols-4 gap-4">

          {/* Revenue */}
          <div className="bg-white shadow-md rounded-xl p-5 space-y-2">
            <p className="text-sm text-gray-500">Revenue</p>
            <h1 className="text-2xl font-bold text-gray-800">
              ₹5,045,322
            </h1>

            <div className="flex items-center text-green-600 text-sm">
              <FiTrendingUp className="mr-1"/>
              +5% this month
            </div>
          </div>

          {/* Outboard */}
          <div className="bg-white shadow-md rounded-xl p-5 space-y-2">
            <p className="text-sm text-gray-500">Outboard Clicked</p>
            <h1 className="text-2xl font-bold text-gray-800">
              45,322
            </h1>

            <div className="flex items-center text-red-500 text-sm">
              <FiTrendingDown className="mr-1"/>
              -5% this month
            </div>
          </div>

          {/* Customers */}
          <div className="bg-white shadow-md rounded-xl p-5 space-y-2">
            <p className="text-sm text-gray-500">Total Customers</p>
            <h1 className="text-2xl font-bold text-gray-800">
              4,322
            </h1>

            <div className="flex items-center text-green-600 text-sm">
              <FiTrendingUp className="mr-1"/>
              +8% growth
            </div>
          </div>

          {/* Events */}
          <div className="bg-white shadow-md rounded-xl p-5 space-y-2">
            <p className="text-sm text-gray-500">Event Count</p>
            <h1 className="text-2xl font-bold text-gray-800">
              4,322
            </h1>

            <div className="flex items-center text-green-600 text-sm">
              <FiTrendingUp className="mr-1"/>
              +3% increase
            </div>
          </div>

        </div>
      </div>

      {/* STOCK INFORMATION */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Stock & Items Information
        </h2>

        <div className="grid grid-cols-4 gap-4">

          <div className="bg-white shadow-md rounded-xl p-5 space-y-2">
            <p className="text-sm text-gray-500">Total Categories</p>
            <h1 className="text-2xl font-bold text-gray-800">8</h1>
            <div className="flex items-center text-green-600 text-sm">
              <FiTrendingUp className="mr-1"/>
              +5%
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 space-y-2">
            <p className="text-sm text-gray-500">Total Dishes</p>
            <h1 className="text-2xl font-bold text-gray-800">8</h1>
            <div className="flex items-center text-green-600 text-sm">
              <FiTrendingUp className="mr-1"/>
              +5%
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 space-y-2">
            <p className="text-sm text-gray-500">Active Orders</p>
            <h1 className="text-2xl font-bold text-gray-800">8</h1>
            <div className="flex items-center text-red-500 text-sm">
              <FiTrendingDown className="mr-1"/>
              -2%
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 space-y-2">
            <p className="text-sm text-gray-500">Total Tables</p>
            <h1 className="text-2xl font-bold text-gray-800">8</h1>
            <div className="flex items-center text-green-600 text-sm">
              <FiTrendingUp className="mr-1"/>
              +2%
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FinanceInfo;