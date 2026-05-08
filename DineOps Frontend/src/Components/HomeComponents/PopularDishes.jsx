import React, { useState } from 'react'
import { menus } from "../../Constants/Constants"
import { FiChevronDown } from "react-icons/fi"

const PopularDishes = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] overflow-hidden">
      <div className="px-5 py-5 bg-gradient-to-r from-blue-600 to-sky-500 text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-blue-100">
          Menu Highlights
        </p>
        <h1 className="mt-2 text-2xl font-bold">Popular Dishes</h1>
        <p className="mt-1 text-sm text-blue-50/90">
          Browse by category and explore best picks
        </p>
      </div>

      <div className="p-4 bg-slate-50">
        <div className="space-y-3">
          {menus.map((category, index) => {
            const isOpen = activeCategory === index

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden
                  ${isOpen
                    ? "border-blue-300 bg-white shadow-md"
                    : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"
                  }`}
              >
                <button
                  onClick={() => setActiveCategory(isOpen ? null : index)}
                  className={`w-full flex items-center gap-4 px-4 py-4 text-left transition-all duration-300
                    ${isOpen ? "bg-gradient-to-r from-blue-50 to-sky-50" : "bg-white"}
                  `}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 transition-all duration-300
                      ${isOpen
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "bg-slate-100 text-blue-600"
                      }`}
                  >
                    {category.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-sm font-semibold text-slate-800 truncate">
                        {category.name}
                      </h2>

                      <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                        {category.items?.length || 0} items
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      Tap to view dishes in this category
                    </p>
                  </div>

                  <div className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <FiChevronDown />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 mt-3">
                    <div className="pl-4 border-l-2 border-blue-100 space-y-3">
                      {category.items?.map((dish, dishIndex) => (
                        <div
                          key={dishIndex}
                          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition-all duration-300 hover:border-blue-200 hover:shadow-sm"
                        >
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-slate-800 truncate">
                              {dish.name}
                            </h3>
                            <p className="mt-0.5 text-xs text-slate-500">
                              {dish.category}
                            </p>
                          </div>

                          <p className="ml-4 text-sm font-bold text-blue-600">
                            ₹{dish.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PopularDishes