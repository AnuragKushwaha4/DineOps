import React from "react";
import { FiX } from "react-icons/fi";

const TableCreation = ({ isTableCreation, setTableCreation }) => {

  if (isTableCreation === false) return null;

  const [formData,setformData]= useState({
    tableNo:"",
    seats:"",
  })

  function handleChange(e){
    const {name,value}=e.target;
    setformData({...formData,[name]:value})
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
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
            placeholder="Enter guest capacity"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
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