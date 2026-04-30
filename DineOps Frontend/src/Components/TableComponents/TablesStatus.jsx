import React from "react";
import {useNavigate} from "react-router-dom" 
import { useDispatch, useSelector } from "react-redux";
import { setTableNumber } from "../../Redux/Slice/CustomerSlice";
import { useQuery} from "@tanstack/react-query"
import { GetTables } from "../../Https/index";
import {enqueueSnackbar} from "notistack"
const TablesStatus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerInfo = useSelector(state=>state.customer)



  function handleOrderCreation(table){
    if(table.status!="Booked" && customerInfo.customerName!="" && customerInfo.customerPhone!=""){
      dispatch(setTableNumber({table:table.tableNo}))
      navigate("/menu")
    }
  }

  const {data : tableData , isError }=useQuery({
      queryKey:["tables"],
      queryFn:async ()=>{
        return await GetTables();
      }
  })

  console.log(tableData?.data.data)
  if(isError)enqueueSnackbar("Something went wrong",{variant:"error"})


  return (
    <div className="flex flex-wrap gap-8 p-8 bg-blue-50 min-h-screen">
      {tableData?.data.data.map((table) => {
        const statusStyle =
          table.status === "Booked"
            ? "bg-red-100 text-red-600"
            : table.status === "Available"
            ? "bg-green-100 text-green-600"
            : "bg-yellow-100 text-yellow-600";

        return (
          <div
            onClick={()=>{handleOrderCreation(table)}}
            key={table._id}
            className="w-72 h-44 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between border border-blue-100"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 font-medium">
                Table {table.tableNo}
              </p>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyle}`}
              >
                {table.tableStatus}
              </span>
            </div>

            {/* Customer */}
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                {table.tableName || "No Customer"}
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