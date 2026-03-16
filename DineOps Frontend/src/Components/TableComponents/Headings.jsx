import React from "react";
import { ArrowLeft } from "lucide-react";

const Headings = () => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-sm">
      
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6">

        {/* Left */}
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

        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
          All
        </button>

        <button className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition">
          Booked
        </button>

        <button className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition">
          Available
        </button>

      </div>

    </div>
  );
};

export default Headings;