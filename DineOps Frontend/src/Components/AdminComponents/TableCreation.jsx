import React from "react";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { Mutation, useMutation } from "@tanstack/react-query";
import { addTable } from "../../Https/index";
import {enqueueSnackbar} from "notistack"

const TableCreation = ({ isTableCreation, setTableCreation }) => {

  if (isTableCreation === false) return null;

  const [formData,setformData]= useState({
    tableNo:"",
    seats:"",
    tableName:"",
  })

  function handleChange(e){
    const {name,value}=e.target;
    setformData({...formData,[name]:value})
  }


  const TableMutation = useMutation({
    mutationFn:(reqData)=>addTable(reqData),
    onSuccess:(res)=>{
      const {data}=res;
      enqueueSnackbar(data.message,{variant:"success"})
      setformData({tableNo:"",seats:"",tableName:""})

    },
    onError:(error)=>{
      const {response}=error;
      enqueueSnackbar(response.data.message,{variant:"error"})
       setformData({tableNo:"",seats:"",tableName:""})
    }
  })


  function handleSubmit(e) {
    e.preventDefault();
    TableMutation.mutate(formData)
    setTableCreation(false);
  }

  return (
    <div className="bg-white rounded-xl shadow-xl w-[420px] p-6 relative">

      {/* Close Button */}
      <button
        onClick={() => setTableCreation(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
      >
        <FiX size={20} />
      </button>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Create Table
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Table Number */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">
            Table Number
          </label>

          <input
            type="number"
            name="tableNo"
            value={formData.tableNo}
            onChange={handleChange}
            placeholder="Enter table number"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Guest Number */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">
            Guest Capacity
          </label>

          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            placeholder="Enter guest capacity"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Table Category */}
<div className="flex flex-col">
  <label className="text-sm text-gray-500 mb-1">
    Table Category
  </label>

  <select
    name="tableName"
    value={formData.tableName}
    onChange={handleChange}
    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option  disabled hidden value="">Select table category</option>
    <option value="Couple Table">Couple Table</option>
    <option value="Family Table">Family Table</option>
    <option value="Party Table">Party Table</option>
  </select>
</div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-3">

          <button
            type="button"
            onClick={() => setTableCreation(false)}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Create Table
          </button>

        </div>

      </form>
    </div>
  );
};

export default TableCreation;