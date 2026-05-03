import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const Headings = ({ setCategory }) => {

  const [active, setActive] = useState("All");

  const handleClick = (category) => {
    setActive(category);
    setCategory(category);
  };

  const getClass = (category) =>
    active === category
      ? "bg-blue-600 text-white"
      : "bg-blue-50 text-blue-600 hover:bg-blue-100";

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-sm">
      
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition">
            <ArrowLeft size={20} className="text-blue-600" />
          </button>

          <h1 className="text-2xl font-semibold text-gray-800">
            Tables
          </h1>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3">

        <button
          onClick={() => handleClick("All")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${getClass("All")}`}
        >
          All
        </button>

        <button
          onClick={() => handleClick("Booked")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${getClass("Booked")}`}
        >
          Booked
        </button>

        <button
          onClick={() => handleClick("Available")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${getClass("Available")}`}
        >
          Available
        </button>

      </div>
    </div>
  );
};

export default Headings;