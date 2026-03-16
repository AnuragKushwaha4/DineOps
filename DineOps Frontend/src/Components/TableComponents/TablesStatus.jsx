import React from "react";

const TablesStatus = () => {
  const tables = new Array(10).fill({
    status: "damaged",
    customername: "Anurag Kushwaha",
  });

  return (
    <div className="flex flex-wrap gap-6 p-6">
      {tables.map((table, index) => {
        const statusBg =
          table.status === "booked"
            ? "bg-red-200"
            : table.status === "available"
            ? "bg-green-200"
            : "bg-yellow-200";

        return (
          <div
            key={index}
            className={`w-64 h-40 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition ${statusBg}`}
          >
            {/* Table Number */}
            <p className="text-sm font-medium text-gray-700">
              Table {index + 1}
            </p>

            {/* Customer Name */}
            <h1 className="text-xl font-semibold text-gray-800">
              {table.customername}
            </h1>

            {/* Status */}
            <p className="text-sm font-medium text-gray-700 capitalize">
              {table.status}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TablesStatus;