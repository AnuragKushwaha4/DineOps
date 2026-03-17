import React from 'react'
import "./OrderCreation.css"
import { IoClose } from "react-icons/io5";

const OrderCreation = ({ Title, isOrderCreation, Close, children }) => {
  if (!isOrderCreation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      {/* Modal Box */}
      <div className="w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-5 animate-scaleIn">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-lg font-semibold text-gray-800">
            {Title}
          </h1>

          <button 
            onClick={Close}
            className="p-1 rounded-full hover:bg-gray-100 transition"
          >
            <IoClose className="text-2xl text-gray-500 hover:text-red-500"/>
          </button>
        </div>

        {/* Content */}
        <div className="text-gray-600">
          {children}
        </div>

      </div>
    </div>
  )
}

export default OrderCreation