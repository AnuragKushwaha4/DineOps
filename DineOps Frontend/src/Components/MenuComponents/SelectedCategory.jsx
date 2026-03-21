import React, { useState } from "react";

const SelectedCategory = ({ selectedCategory }) => {
  const [counts, setCounts] = useState({});

  const increment = (index) => {
    setCounts((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  const decrement = (index) => {
    setCounts((prev) => ({
      ...prev,
      [index]: Math.max((prev[index] || 0) - 1, 0),
    }));
  };

  return (
    <div className="flex flex-col gap-4 pr-4 overflow-y-auto max-h-[80vh]">

      {selectedCategory.items.map((info, index) => {
        const count = counts[index] || 0;

        return (
          <div
            key={index}
            className="bg-white border border-blue-100 rounded-xl p-4 
            flex items-center justify-between 
            hover:shadow-md hover:bg-blue-50 transition"
          >

            {/* Dish Info */}
            <div>
              <h1 className="text-lg font-semibold text-gray-800">
                {info.name}
              </h1>

              <p className="text-blue-600 font-medium">
                ₹ {info.price}
              </p>
            </div>

            {/* Quantity Controller */}
            <div className="flex items-center gap-3">

              <button
                onClick={() => decrement(index)}
                className="w-8 h-8 rounded-lg bg-gray-100 
                hover:bg-gray-200 flex items-center justify-center text-lg"
              >
                -
              </button>

              <p className="w-6 text-center font-medium">{count}</p>

              <button
                onClick={() => increment(index)}
                className="w-8 h-8 rounded-lg bg-blue-500 
                text-white hover:bg-blue-600 flex items-center justify-center text-lg"
              >
                +
              </button>

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default SelectedCategory;