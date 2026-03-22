import React from "react";
import { tables } from "../../Constants/Constants";

const TablesStatus = () => {
  return (
    <div className="flex flex-wrap gap-8 p-8 bg-blue-50 min-h-screen">
      {tables.map((table) => {
        const statusStyle =
          table.status === "Booked"
            ? "bg-red-100 text-red-600"
            : table.status === "Available"
            ? "bg-green-100 text-green-600"
            : "bg-yellow-100 text-yellow-600";

        return (
          <div
            key={table.id}
            className="w-72 h-44 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between border border-blue-100"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 font-medium">
                Table {table.id}
              </p>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyle}`}
              >
                {table.status}
              </span>
            </div>

            {/* Customer */}
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                {table.name || "No Customer"}
              </h1>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Seats
                <span className="ml-1 font-semibold text-gray-700">
                  {table.seats}
                </span>
              </p>

              <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
                View
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TablesStatus;