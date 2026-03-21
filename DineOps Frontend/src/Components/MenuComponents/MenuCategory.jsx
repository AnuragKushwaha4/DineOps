import React from "react";
import { menus } from "../../Constants/Constants";

const MenuCategory = () => {
  return (
    <div className="flex flex-col gap-3 pr-2 overflow-y-auto max-h-[80vh]">

      {menus.map((category, index) => {
        return (
          <div
            key={index}
            id={index}
            className="bg-white border border-blue-100 rounded-xl p-3 w-full cursor-pointer 
            hover:bg-blue-50 hover:shadow-md transition duration-200"
          >
            <div className="flex items-center gap-3">

              {/* Icon */}
              <div className="text-xl">
                {category.icon}
              </div>

              {/* Category Info */}
              <div>
                <h1 className="text-sm font-semibold text-gray-800">
                  {category.name}
                </h1>

                <p className="text-xs text-gray-500">
                  {category.items.length} items
                </p>
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
};

export default MenuCategory;