import React from 'react'
import { FiSearch } from 'react-icons/fi'

const RecentOrders = () => {

  const orders = new Array(7).fill({
    name: "Aditya Kushwaha",
    items: 5,
    table: 5,
    status: "Ready"
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Recent Orders
        </h1>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          View all
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg w-80 mb-6">
        <FiSearch className="text-blue-500 mr-2"/>
        <input
          type="text"
          placeholder="Search orders..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Orders List */}
      <div className="space-y-3">

        {orders.map((order, index) => {

          const initial = order.name.charAt(0)

          return (
            <div
              key={index}
              className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition"
            >

              {/* Left Section */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                  {initial}
                </div>

                {/* Customer Info */}
                <div>
                  <h1 className="text-sm font-semibold text-gray-800">
                    {order.name}
                  </h1>

                  <p className="text-xs text-gray-500">
                    {order.items} items • Table {order.table}
                  </p>
                </div>

              </div>

              {/* Status */}
              <div className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                {order.status}
              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default RecentOrders