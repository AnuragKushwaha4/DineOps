import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const WelcomeBanner = () => {

  const userData = useSelector(state=>state.user)
  const [currenttime, setcurrenttime] = useState(new Date());

  
  useEffect(() => {
    const timer = setInterval(() => {
      setcurrenttime(new Date())
    }, 1000);

    return () => clearInterval(timer);
  }, [])

  const months = [
    "January","February","March",
    "April","May","June","July",
    "August","September","October",
    "November","December"
  ];

  return (
    <div className="w-full bg-white shadow-md rounded-xl px-8 py-6 flex justify-between items-center">

      {/* Name Section */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          {userData.name}
        </h1>

        <p className="text-gray-500 text-sm mt-1 max-w-md">
          Welcome back! Let’s manage today’s orders and keep the restaurant running efficiently.
        </p>
      </div>

      {/* Time Section */}
      <div className="text-right">
        <h1 className="text-3xl font-bold text-blue-600">
          {currenttime.getHours()}:
          {currenttime.getMinutes().toString().padStart(2,"0")}:
          {currenttime.getSeconds().toString().padStart(2,"0")}
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          {currenttime.getDate()} {months[currenttime.getMonth()]} {currenttime.getFullYear()}
        </p>
      </div>

    </div>
  )
}

export default WelcomeBanner