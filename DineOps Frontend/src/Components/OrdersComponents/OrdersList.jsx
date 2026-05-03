import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../Https";
import { enqueueSnackbar } from "notistack";
import Loader from "../CommanComponents/Loader"

const OrdersList = ({category}) => {

  const { data: orderData, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    onError: () => {
      enqueueSnackbar("Something went wrong", { variant: "error" });
    }
  });

  const orders = orderData?.data?.data || [];

  const filteredOrders = (category==="All")?orders : orders.filter(order => order.orderStatus===category)
  
  const getStatusColor = (status) => {
    if (status === "Ready") return "bg-green-100 text-green-700";
    if (status === "In Progress") return "bg-yellow-100 text-yellow-700";
    if (status === "Completed") return "bg-gray-200 text-gray-700";
    return "bg-blue-100 text-blue-700";
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        <Loader/>
      </div>
    );
  }

  
  if (!filteredOrders.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">

        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mb-4 text-2xl">
          📦
        </div>

        <h2 className="text-lg font-semibold text-gray-700">
          No Orders Yet
        </h2>

        <p className="text-sm text-gray-500 mt-1 max-w-xs">
          Orders will appear here once customers start placing them.
        </p>

      </div>
    );
  }

  
  return (
    <div className="flex flex-col gap-4 p-4">

      {filteredOrders.map((order) => (
        
        <div
          key={order._id}
          className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100"
        >

          {/* Left */}
          <div className="flex items-center gap-4">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg shadow">
              {order.customerDetails.name.charAt(0)}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 text-sm">
                {order.customerDetails.name}
              </span>

              <span className="text-xs text-gray-500">
                Table No:{" "}
                <span className="font-medium text-gray-700">
                  {order.table?.tableNo || "--"}
                </span>
              </span>

              <span className="text-xs text-gray-500">
                {order.items.length} items
              </span>
            </div>

          </div>

          {/* Right */}
          <div className="flex flex-col items-end gap-2">

            <span className="font-semibold text-gray-800 text-sm">
              ₹{order.bills.totalwithTax}
            </span>

            <span
              className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusColor(order.orderStatus)}`}
            >
              {order.orderStatus}
            </span>

          </div>

        </div>
      ))}

    </div>
  );
};

export default OrdersList;