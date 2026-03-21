import React, { useState } from "react";
import Heading from "./MenuComponents/Heading";
import MenuCategory from "./MenuComponents/MenuCategory";
import { menus } from "../Constants/Constants";
import SelectedCategory from "./MenuComponents/SelectedCategory";

const Menu = () => {
  const [selectedCategory, setCategory] = useState(menus[0]);

  return (
    <div className="w-full h-screen bg-blue-50 p-6">

      {/* Main 3:1 Layout */}
      <div className="grid grid-cols-4 gap-6 h-full">

        {/* LEFT SECTION */}
        <div className="col-span-3 bg-white rounded-xl shadow-sm p-4 flex flex-col">

          {/* Heading */}
          <Heading />

          {/* Category + Items Layout */}
          <div className="grid grid-cols-3 gap-6 mt-4 flex-1 overflow-hidden">

            {/* Menu Categories (1 part) */}
            <div className="col-span-1 border-r pr-3 overflow-y-auto">
              <MenuCategory
                selectedCategory={selectedCategory}
                setCategory={setCategory}
              />
            </div>

            {/* Selected Category Items (2 parts) */}
            <div className="col-span-2 overflow-y-auto">
              <SelectedCategory
                selectedCategory={selectedCategory}
                setCategory={setCategory}
              />
            </div>

          </div>
        </div>

        {/* RIGHT SECTION (design later) */}
        <div className="col-span-1 bg-white rounded-xl shadow-sm p-4">
        </div>

      </div>

    </div>
  );
};

export default Menu;