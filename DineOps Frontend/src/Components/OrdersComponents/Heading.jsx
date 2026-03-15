import React from "react";
import { ArrowLeft } from "lucide-react";

const Heading = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm border-b">

      {/* Back Button */}
      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 transition">
        <ArrowLeft size={18} className="text-blue-600" />
      </button>

      {/* Order Status Tabs */}
      <div className="flex gap-3">

        <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium">
          All
        </button>

        <button className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
          In Progress
        </button>

        <button className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
          Ready
        </button>

        <button className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
          Completed
        </button>

      </div>

    </div>
  );
};

export default Heading;