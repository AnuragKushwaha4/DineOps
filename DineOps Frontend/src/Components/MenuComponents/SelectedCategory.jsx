import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import {useDispatch} from "react-redux"
import { addItems } from "../../Redux/Slice/MenuCartSlice";

const SelectedCategory = ({ selectedCategory }) => {
    const dispatch = useDispatch();

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


  function handleCart(info,count,index){
    console.log({...info,count:count})
    dispatch(addItems({...info,count:count}));
    setCounts(prev => ({
      ...prev,
      [index]: 0
}));
  }

  return (
    <div className="flex flex-col gap-4 pr-4 overflow-y-auto max-h-[80vh] pb-24">

      {selectedCategory.items.map((info, index) => {
        const count = counts[index] || 0;

        return (
          <div
            key={index}
            className="bg-white border border-blue-100 rounded-xl p-4
            hover:shadow-md hover:bg-blue-50 transition flex flex-col gap-4"
          >

            {/* Top Row */}
            <div className="flex justify-between items-start">

              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  {info.name}
                </h1>

                <p className="text-blue-600 font-medium mt-1">
                  ₹ {info.price}
                </p>
              </div>

              {/* Cart Button */}
              <button
              onClick={()=>{handleCart(info,count,index)}}
                disabled={count === 0}
                className={`p-2 rounded-lg transition
                ${
                  count === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <ShoppingCart size={18} />
              </button>

            </div>

            {/* Bottom Row */}
            <div className="flex justify-end">

              <div className="flex items-center gap-3 bg-blue-50 px-3 py-1 rounded-lg">

                <button
                  onClick={() => decrement(index)}
                  className="w-7 h-7 rounded-md bg-white border
                  hover:bg-gray-100 flex items-center justify-center"
                >
                  -
                </button>

                <p className="w-5 text-center font-medium">{count}</p>

                <button
                  onClick={() => increment(index)}
                  className="w-7 h-7 rounded-md bg-blue-500 text-white
                  hover:bg-blue-600 flex items-center justify-center"
                >
                  +
                </button>

              </div>

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default SelectedCategory;