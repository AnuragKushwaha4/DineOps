import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { MdHome } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import OrderCreation from './OrderCreation';
 import { FiUser, FiPhone } from "react-icons/fi";
import { MdPeople } from "react-icons/md";
import {useDispatch} from "react-redux"
import { createCustomer } from '../../Redux/Slice/CustomerSlice';
const NavigationBar = () => {
  const navigate = useNavigate();
  const [isOrderCreation, setOrderCreation] = useState(false);
  const [liveTab,setLiveTab]=useState("/")
  const [name,setname]=useState("")
  const [phone,setphone]=useState()
  const [customercount,setcustomercount] = useState();
  const dispatch = useDispatch();


  function TabActive(tab){
    if(tab===liveTab)return true;
    return false;
  }
  function handleHome(){
    setLiveTab("/")
    navigate("/")
  }
  function handleOrder(){
    setLiveTab("/order")
    navigate("/order")
  }
  function handleTables(){
    setLiveTab("/tables")
    navigate("/tables")
  }

  function handleCreateOrder(){
    dispatch(createCustomer({name,phone,customercount}))
    navigate("/tables")
    setOrderCreation(false)
  }
  return (
    <>
      {/* NAVBAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] border-t border-gray-100 flex justify-between items-center px-6 py-2 z-40">

        {/* Home */}
        <button 
          onClick={handleHome} 
          className="flex flex-col items-center text-gray-500 hover:text-blue-500 transition"
        >
          <MdHome className="text-2xl"/>
          <span className="text-[10px] mt-1">Home</span>
        </button>

        
        <button 
          onClick={handleOrder} 
          className="flex flex-col items-center text-gray-500 hover:text-blue-500 transition"
        >
          <FaClipboardList className="text-2xl"/>
          <span className="text-[10px] mt-1">Orders</span>
        </button>

        {/* Center FAB */}
        <div className="relative -mt-10">
          <button 
            onClick={() => setOrderCreation(true)} disabled={TabActive("/tables") || TabActive("/menu")}
            className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full shadow-lg hover:scale-110 active:scale-95 transition"
          >
            <IoAdd className="text-3xl"/>
          </button>
        </div>

        {/* Tables */}
        <button 
          onClick={handleTables} 
          className="flex flex-col items-center text-gray-500 hover:text-blue-500 transition"
        >
          <MdTableRestaurant className="text-2xl"/>
          <span className="text-[10px] mt-1">Tables</span>
        </button>

        {/* More */}
        <button className="flex flex-col items-center text-gray-500 hover:text-blue-500 transition">
          <FiMoreHorizontal className="text-2xl"/>
          <span className="text-[10px] mt-1">More</span>
        </button>

      </div>

      {/* POPUP */}
     

<OrderCreation 
  Title="Create Order" 
  isOrderCreation={isOrderCreation} 
  Close={() => setOrderCreation(false)}
>
  <div className="space-y-5">

    {/* Section Title */}
    <div>
      <h2 className="text-sm text-gray-500">Customer Details</h2>
    </div>

    {/* Card */}
    <div className="bg-gray-50 p-4 rounded-2xl shadow-sm space-y-4">

      {/* Name */}
      <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400 transition">
        <FiUser className="text-gray-400 text-lg"/>
        <input 
          value={name}
          onChange={(e)=>{setname(e.target.value)}}
          type="text"
          placeholder="Customer Name"
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400 transition">
        <FiPhone className="text-gray-400 text-lg"/>
        <input 
          value={phone}
          onChange={(e)=>{setphone(e.target.value)}}
          type="text"
          placeholder="Phone Number"
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Guests */}
      <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400 transition">
        <MdPeople className="text-gray-400 text-lg"/>
        <input 
          value={customercount}
          onChange={(e)=>{setcustomercount(e.target.value)}}
          type="number"
          placeholder="Number of Guests"
          className="w-full outline-none text-sm"
        />
      </div>

    </div>

    {/* Action Button */}
    <button onClick={handleCreateOrder} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition">
      Create Order
    </button>

  </div>
</OrderCreation>
    </>
  )
}

export default NavigationBar