import React, { useState } from "react";
import Heading from "./MenuComponents/Heading";
import MenuCategory from "./MenuComponents/MenuCategory";
import { menus } from "../Constants/Constants";
import SelectedCategory from "./MenuComponents/SelectedCategory";
import CartDetails from "./MenuComponents/CartDetails";
import BillingDetails from "./MenuComponents/BillingDetails";

const Menu = () => {
  const [selectedCategory, setCategory] = useState(menus[0]);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">

      {/* Main Layout */}
      <div className="grid grid-cols-4 gap-6 h-full">

        {/* LEFT SECTION */}
        <div className="col-span-3 bg-white rounded-2xl shadow-lg p-6 flex flex-col">

          {/* Heading */}
          <Heading />

          {/* Category + Items */}
          <div className="grid grid-cols-3 gap-6 mt-6 flex-1 overflow-hidden">

            {/* Categories */}
            <div className="col-span-1 bg-blue-50 rounded-xl p-3 border border-blue-100 overflow-y-auto">
              <MenuCategory
                selectedCategory={selectedCategory}
                setCategory={setCategory}
              />
            </div>

            {/* Selected Items */}
            <div className="col-span-2 bg-gray-50 rounded-xl p-4 border border-gray-100 overflow-y-auto">
              <SelectedCategory
                selectedCategory={selectedCategory}
                setCategory={setCategory}
              />
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-span-1 flex flex-col gap-4">

          {/* Order Details Card */}
          <div className="bg-white rounded-2xl shadow-md p-4 flex-1 overflow-y-auto border border-gray-100">
            <CartDetails />
          </div>

          {/* Billing Card */}
          <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100">
            <BillingDetails />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Menu;