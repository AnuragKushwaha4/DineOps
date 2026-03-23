import React from "react";
import { useSelector } from "react-redux";
import { getTotal } from "../../Redux/Slice/MenuCartSlice";

const BillingDetails = () => {

  const total = useSelector(getTotal)
  const tax = total*0.05;
  const grandTotal = total+tax

  return (
    <div className="flex flex-col gap-5 bg-white rounded-xl shadow-md p-4">

      {/* Price Section */}
      <div className="flex flex-col gap-2 text-sm">

        <div className="flex justify-between text-gray-600">
          <p>Price</p>
          <p>₹{total}</p>
        </div>

        <div className="flex justify-between text-gray-600">
          <p>Tax</p>
          <p>₹{tax}</p>
        </div>

        <div className="border-t pt-2 flex justify-between font-semibold text-gray-800">
          <p>Total</p>
          <p>₹{grandTotal}</p>
        </div>

      </div>

      {/* Payment */}
      <div className="flex flex-col gap-2">
        <h1 className="text-sm font-semibold text-gray-700">Payment</h1>

        <div className="flex gap-3">
          <button className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition">
            Cash
          </button>

          <button className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition">
            Online
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">

        <button className="w-full py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          Print Receipt
        </button>

        <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow">
          Place Order
        </button>

      </div>

    </div>
  );
};

export default BillingDetails;