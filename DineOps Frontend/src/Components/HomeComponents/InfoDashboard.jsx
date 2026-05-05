import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FiDollarSign, FiTrendingUp, FiPackage } from "react-icons/fi"
import { MdTableRestaurant } from "react-icons/md"
import { GetTables,getOrders } from '../../Https'
import {enqueueSnackbar} from "notistack"
import Loader from '../CommanComponents/Loader'
const InfoDashboard = () => {

  const {data:tableData,isError,isLoading:tableLoading}= useQuery({
    queryKey:["tables"],
    queryFn:async ()=>{
      return await GetTables();
    },
    onError:(error)=>{
      const {response}=error;
      enqueueSnackbar("Something went wrong",{variant:"error"})
    }
  })

  let tableAvailable =0;
  let tableOccupied=0;
  tableData?.data?.data.forEach(table=> {
    if(table.tableStatus==="Available")tableAvailable++;
    if(table.tableStatus==="Booked")tableOccupied++;
  });

   const { data: orderData, isLoading:orderLoading} = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    onError: () => {
      enqueueSnackbar("Something went wrong", { variant: "error" });
    }
  });

  const OrderInProcess = orderData?.data?.data.filter((order)=>{return order.orderStatus=="In Progress"}).length ||0;
  if (tableLoading || orderLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        <Loader/>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Revenue Card */}
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 min-h-[160px] flex flex-col justify-center">

        <div className="flex items-center gap-3">
          <FiDollarSign className="text-green-500 text-2xl"/>
          <h1 className="text-gray-700 font-medium text-lg">
            Today's Earning
          </h1>
        </div>

        <p className="text-3xl font-bold text-gray-800">
          ₹12,000
        </p>

        <div className="flex items-center gap-3 pt-3 border-t">
          <FiTrendingUp className="text-blue-500 text-xl"/>
          <p className="text-sm text-gray-600">
            Average Order Value: <span className="font-semibold">₹500</span>
          </p>
        </div>

      </div>

      {/* Operations Card */}
      <div className="bg-white shadow-md rounded-xl p-6 space-y-5 min-h-[180px] flex flex-col justify-center">

        <div className="flex items-center gap-3">
          <MdTableRestaurant className="text-blue-500 text-2xl"/>
          <p className="text-gray-700 text-base">
            Table Occupied: <span className="font-semibold">{tableOccupied}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <MdTableRestaurant className="text-green-500 text-2xl"/>
          <p className="text-gray-700 text-base">
            Table Available: <span className="font-semibold">{tableAvailable}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FiPackage className="text-orange-500 text-2xl"/>
          <p className="text-gray-700 text-base">
            Orders in Process: <span className="font-semibold">{OrderInProcess}</span>
          </p>
        </div>

      </div>

    </div>
  )
}

export default InfoDashboard