import React from "react";
import { Trash2, User, Phone, Table,Hash } from "lucide-react";
import {useDispatch, useSelector} from "react-redux"
import { deleteItem } from "../../Redux/Slice/MenuCartSlice";
const CartDetails = () => {

  const customerInfo = useSelector(state=>state.customer)
  const CartInfo = useSelector(state=>state.cart)
  const dispatch = useDispatch()

  function handleDeletion(item){
    dispatch(deleteItem(item.id))
  }
  
  console.log(customerInfo.table)
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col h-full border border-gray-200 overflow-hidden">

      {/* Customer Info */}
      <div className="p-4 bg-gray-50 border-b">

        <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
          Customer Info
        </h2>

        <div className="flex flex-col gap-2 text-sm">

          <div className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100">
            <div className="flex items-center gap-2 text-gray-700">
              <User size={16} className="text-blue-500"/>
              <span>Customer</span>
            </div>
            <span className="font-medium text-gray-800">{customerInfo.customerName}</span>
          </div>

          <div className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone size={16} className="text-green-500"/>
              <span>Phone</span>
            </div>
            <span className="font-medium text-gray-800">{customerInfo.customerPhone}</span>
          </div>

          <div className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100">
            <div className="flex items-center gap-2 text-gray-700">
              <Table size={16} className="text-purple-500"/>
              <span>Table</span>
            </div>
            <span className="font-medium text-gray-800">No {customerInfo.table?.tableNo}</span>
          </div>

          <div className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100">
            <div className="flex items-center gap-2 text-gray-700">
              <Hash size={16} className="text-indigo-500"/>
              <span>Order ID</span>
            </div>
            <span className="font-medium text-gray-800">{customerInfo.orderID}</span>
          </div>

        </div>

      </div>

      {/* Order Heading */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <h1 className="text-md font-semibold text-gray-800">
          Order Details
        </h1>

        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {CartInfo.length} Items
        </span>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-3 p-4 overflow-y-auto">
        
        {CartInfo.length ===0 ?(
          <p  className="text-gray-500 text-sm mt-1 max-w-md">Your Cart is Empty</p>
        ):CartInfo.map((item,index)=>(
          <div
            key={index}
            className="flex items-center justify-between bg-blue-50 border border-blue-100 rounded-lg p-3 hover:shadow-sm transition"
          >

            {/* Item Info */}
            <div>
              <h1 className="text-sm font-semibold text-gray-800">
                {item.name}
              </h1>

              <p className="text-xs text-gray-500">
                x{item.count}
              </p>
            </div>

            {/* Price + Delete */}
            <div className="flex items-center gap-4">

              <p className="text-sm font-semibold text-gray-700">
                ₹{item.price*item.count}
              </p>

              <button onClick={()=>{handleDeletion(item)}} className="text-red-500 hover:text-red-600 transition">
                <Trash2 size={18}/>
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CartDetails;