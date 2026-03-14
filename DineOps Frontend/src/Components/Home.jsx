import React from 'react'
import WelcomeBanner from './HomeComponents/WelcomeBanner'
import RecentOrders from './HomeComponents/RecentOrders'
import InfoDashboard from './HomeComponents/InfoDashboard'
import PopularDishes from './HomeComponents/PopularDishes'

const Home = () => {
  return (
    <section className="flex w-full min-h-[calc(100vh-80px)] bg-blue-50">

      {/* Left Section (3 parts) */}
      <div className="flex-[3] bg-white p-6 shadow-sm flex flex-col gap-6">

        <WelcomeBanner/>

        {/* Horizontal Section */}
        <div className="flex gap-6">

          <div className="flex-1">
            <InfoDashboard/>
          </div>

          <div className="flex-1">
            <RecentOrders/>
          </div>

        </div>

      </div>

      {/* Right Section (2 parts) */}
      <div className="flex-[2] bg-blue-100 p-6">
        <PopularDishes/>
      </div>

    </section>
  )
}

export default Home