import React from "react";
import { ArrowLeft } from "lucide-react";

const Heading = () => {
  return (
    <div className="w-full bg-white shadow-sm rounded-xl px-6 py-4 flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* Back Button */}
        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 hover:bg-blue-100 transition">
          <ArrowLeft className="w-5 h-5 text-blue-600" />
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Menu
        </h1>

      </div>

    </div>
  );
};

export default Heading;