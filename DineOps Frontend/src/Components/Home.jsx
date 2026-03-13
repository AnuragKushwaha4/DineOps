import React from 'react'

const Home = () => {
  return (
    <section className="flex w-full min-h-[calc(100vh-80px)] bg-blue-50">

      {/* Left Section (3 parts) */}
      <div className="flex-[3] bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Dashboard
        </h2>

        <p className="text-gray-600">
          Welcome to DineOps POS system. Manage orders, tables, and restaurant
          operations from here.
        </p>
      </div>

      {/* Right Section (2 parts) */}
      <div className="flex-[2] bg-blue-100 p-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Quick Actions
        </h2>

        <p className="text-gray-700">
          Create new orders, check notifications, and manage tasks quickly.
        </p>
      </div>

    </section>
  )
}

export default Home