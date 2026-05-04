import React, { useState } from "react";
import {useQuery,useMutation} from "@tanstack/react-query"
import {getOrders} from "../../Https/index"
import {enqueueSnackbar} from "notistack"
import Loader from "../CommanComponents/Loader"

const OrdersInfo = () => {

  


  const {data:orderData,isError,isLoading}=useQuery({
    queryKey:["order"],
    queryFn:async ()=>{
      return await getOrders()
    },
    isError:()=>{
      enqueueSnackbar("Something went wrong",{variant:"error"})
    }
  })

  console.log(orderData?.data?.data)
  
  

  function handleStatusChange(id, newStatus) {
    
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

        {orderData?.data?.data.map((order,index) => (
          <div
            key={order._id}
            className="flex items-center justify-between bg-gray-50 rounded-lg px-5 py-4"
          >

            {/* LEFT INFO */}
            <div className="flex flex-col">

              <span className="font-semibold text-gray-800">
                Order #{index+1}
              </span>

              <span className="text-sm text-gray-500">
                {order.customerDetails.name} • Table {order.table.tableNo}
              </span>

              <span className="text-xs text-gray-400">
                {order.updatedAt}
              </span>

            </div>

            {/* MIDDLE INFO */}
            <div className="flex items-center gap-10">

              <div className="text-sm">
                <p className="text-gray-400">Items</p>
                <p className="font-medium">{order.items.length}</p>
              </div>

              <div className="text-sm">
                <p className="text-gray-400">Total</p>
                <p className="font-semibold text-blue-600">
                  ₹{order.bills.totalwithTax}
                </p>
              </div>

            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-4">

              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyle(order.orderStatus)}`}
              >
                {order.orderStatus}
              </span>

              <select
                value={order.orderStatus}
                onChange={(e) =>
                  handleStatusChange(order._did, e.target.value)
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