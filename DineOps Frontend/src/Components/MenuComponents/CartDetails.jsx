import React from "react";
import { Trash2 } from "lucide-react";

const CartDetails = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col h-full">

      {/* Heading */}
      <h1 className="text-lg font-semibold text-gray-800 mb-4">
        Order Details
      </h1>

      {/* Orders List */}
      <div className="flex flex-col gap-3 overflow-y-auto">

        {[1,2,3].map((item,index)=>(
          <div
            key={index}
            className="flex items-center justify-between bg-blue-50 rounded-lg p-3 hover:bg-blue-100 transition"
          >

            {/* Item Info */}
            <div>
              <h1 className="text-sm font-semibold text-gray-800">
                Aalu Paratha
              </h1>
              <p className="text-xs text-gray-500">
                x2
              </p>
            </div>

            {/* Price + Delete */}
            <div className="flex items-center gap-4">

              <p className="text-sm font-semibold text-gray-700">
                ₹123
              </p>

              <button className="text-red-500 hover:text-red-600">
                <Trash2 size={18}/>
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CartDetails;