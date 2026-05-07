import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import {useQuery} from "@tanstack/react-query"
import {getOrders} from "../../Https/index"
import {enqueueSnackbar} from "notistack"
import Loader from '../CommanComponents/Loader'
const RecentOrders = () => {


  const [viewAll,setViewAll] = useState(false)

  const {data:orderData, onError,isLoading}= useQuery({
    queryKey:["orders"],
    queryFn:async (reqData)=>{
      return await getOrders()
    },
    onError:(error)=>{
      const {response}=error;
      enqueueSnackbar(response.data.message,{variant:"error"})
    }
  })


  
 if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        <Loader/>
      </div>
    );
  }


const allorders = [...orderData?.data?.data].reverse() ||[];
const orders = (viewAll)?allorders:allorders.slice(0,5)
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Recent Orders
        </h1>

        <button onClick={()=>setViewAll((viewAll)?false:true)} className="text-blue-600 text-sm font-medium hover:underline">
          {(viewAll)?"view less":"view all"}
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg w-80 mb-6">
        <FiSearch className="text-blue-500 mr-2"/>
        <input
          type="text"
          placeholder="Search orders..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Orders List */}
      <div className="space-y-3">

        {orders.map((order, index) => {

          const initial = order.customerDetails.name.charAt(0)

          return (
            <div
              key={index}
              className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition"
            >

              {/* Left Section */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                  {initial}
                </div>

                {/* Customer Info */}
                <div>
                  <h1 className="text-sm font-semibold text-gray-800">
                    {order.customerDetails.name}
                  </h1>

                  <p className="text-xs text-gray-500">
                    {order.items.length} items • Table {order.table.tableNo}
                  </p>
                </div>

              </div>

              {/* Status */}
              <div className={`px-3 py-1 text-xs font-medium rounded-full
    ${
      order.orderStatus === "Completed"? "bg-green-100 text-green-700": order.orderStatus === "In Progress"
      ? "bg-yellow-100 text-yellow-700": order.orderStatus === "In Progess"
      ? "bg-blue-100 text-blue-700": order.orderStatus === "Ready"
      ? "bg-red-100 text-red-700": "bg-gray-100 text-gray-700"
    }`}>
                {order.orderStatus}
              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default RecentOrders