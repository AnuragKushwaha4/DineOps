import React from "react";

const OrdersList = () => {

  const orders = new Array(10).fill({
    custmername: "Arshita Kushwaha",
    status: "ready",
    items: 8,
    table: 7,
    prize: 250
  });

  const getStatusColor = (status) => {
    if (status === "ready") return "bg-green-100 text-green-700";
    if (status === "inprogress") return "bg-yellow-100 text-yellow-700";
    if (status === "completed") return "bg-gray-200 text-gray-700";
  };

  return (
    <div className="flex flex-col gap-3 p-4">

      {orders.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border"
        >

          {/* Avatar */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
              {item.custmername.charAt(0)}
            </div>

            {/* Customer Info */}
            <div className="flex flex-col">

              <span className="font-semibold text-gray-800">
                {item.custmername}
              </span>

              <span className="text-sm text-gray-500">
                Table No: {item.table}
              </span>

              <span className="text-sm text-gray-500">
                Items: {item.items}
              </span>

            </div>

          </div>

          {/* Order Details */}
          <div className="flex flex-col items-end gap-1">

            <span className="font-semibold text-gray-800">
              ₹{item.prize}
            </span>

            <span
              className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusColor(item.status)}`}
            >
              {item.status}
            </span>

          </div>

        </div>
      ))}

    </div>
  );
};

export default OrdersList;