import React, { useState } from "react";
import { orders } from "../../Constants/Constants";
import {useQuery,useMutation} from "@tanstack/react-query"
import {getOrders} from "../../Https/index"
import {enqueueSnackbar} from "notistack"
const OrdersInfo = () => {

  const [ordersData, setOrdersData] = useState(orders);


  const {orderData: data,isError,isLoading}=useQuery({
    queryKey:["order"],
    queryFn:async ()=>{
      return await getOrders()
    }
  })
  if(isError)enqueueSnackbar("Something went wrong",{variant:"error"})
  

  function handleStatusChange(id, newStatus) {
    const updatedOrders = ordersData.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrdersData(updatedOrders);
  }




  function statusStyle(status) {
    if (status === "Ready")
      return "bg-green-100 text-green-700";
    if (status === "In Progress")
      return "bg-yellow-100 text-yellow-700";
    if (status === "Completed")
      return "bg-gray-200 text-gray-700";
    return "";
  }


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        <Loader/>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Orders
      </h2>

      <div className="space-y-4">

        {ordersData.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between bg-gray-50 rounded-lg px-5 py-4"
          >

            {/* LEFT INFO */}
            <div className="flex flex-col">

              <span className="font-semibold text-gray-800">
                Order #{order.id}
              </span>

              <span className="text-sm text-gray-500">
                {order.customer} • Table {order.tableNo}
              </span>

              <span className="text-xs text-gray-400">
                {order.dateTime}
              </span>

            </div>

            {/* MIDDLE INFO */}
            <div className="flex items-center gap-10">

              <div className="text-sm">
                <p className="text-gray-400">Items</p>
                <p className="font-medium">{order.items}</p>
              </div>

              <div className="text-sm">
                <p className="text-gray-400">Total</p>
                <p className="font-semibold text-blue-600">
                  ₹{order.total}
                </p>
              </div>

            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-4">

              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyle(order.status)}`}
              >
                {order.status}
              </span>

              <select
                value={order.status}
                onChange={(e) =>
                  handleStatusChange(order.id, e.target.value)
                }
                className="border rounded-md px-2 py-1 text-sm focus:outline-none"
              >
                <option>In Progress</option>
                <option>Ready</option>
                <option>Completed</option>
              </select>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default OrdersInfo;