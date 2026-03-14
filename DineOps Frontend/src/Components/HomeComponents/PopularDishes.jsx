import React from 'react'
import { MdRestaurant } from "react-icons/md"

const PopularDishes = () => {

  const dishes = new Array(10).fill({
    dishname: "Butter Chicken",
    prize: 250
  })

  return (
    <div className="  bg-blue-100 rounded-xl p-6 w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-semibold text-gray-800">
          Popular Dishes
        </h1>

        <button className="text-blue-500 text-sm hover:text-blue-600 font-medium">
          View All
        </button>
      </div>

      {/* Dish List */}
      <div className="flex flex-col gap-3">

        {dishes.map((dish, index) => (
          
          <div 
            key={index}
            className="flex items-center justify-between bg-white rounded-lg px-4 py-3 hover:bg-blue-200 transition"
          >

            {/* Left Section */}
            <div className="flex items-center gap-3">

              <span className="text-sm font-semibold text-blue-500 w-5">
                {index + 1}
              </span>

              <MdRestaurant className="text-blue-400 text-xl"/>

              <p className="text-gray-700 font-medium">
                {dish.dishname}
              </p>

            </div>

            {/* Price */}
            <p className="text-gray-800 font-semibold">
              ₹{dish.prize}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default PopularDishes