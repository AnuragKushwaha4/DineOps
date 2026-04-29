import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getTotal } from "../../Redux/Slice/MenuCartSlice";
import { enqueueSnackbar } from "notistack";
import { createOrder } from "../../Https/index";
import {useNavigate} from "react-router-dom"


const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

const BillingDetails = () => {
  const customerData = useSelector((state) => state.customer);
  const total = useSelector(getTotal);
  const navigate = useNavigate();
  const tax = total * 0.05;
  const grandTotal = total + tax;

  const [paymentMethod, setPaymentMethod] = useState();

  async function handlePlaceOrder() {
    if (!paymentMethod) {
      enqueueSnackbar("Select Payment Method!!", { variant: "warning" });
      return;
    }

    // CASH PAYMENT
    if (paymentMethod === "CASH") {
      enqueueSnackbar("Order Placed (Cash)", { variant: "success" });
      //navigate("/")
      return;
    }

    // ONLINE PAYMENT
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        enqueueSnackbar("Razorpay SDK failed to load", { variant: "error" });
        //navigate("/")
        return;
      }

      const reqData = {
        amount: Math.round(grandTotal),
      };

      const { data } = await createOrder(reqData);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "RESTRO",
        description: "Secure Payment for Your Meal",
        order_id: data.order.id,

        handler: function (response) {
          console.log("Payment Response:", response);

          enqueueSnackbar("Payment Successful!", {
            variant: "success",
          });

          // Later you will call verify API here
        },

        prefill: {
          name: customerData.customerName,
          email: "",
          contact: customerData.customerPhone,
        },

        theme: {
          color: "#025cca",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Payment Failed", { variant: "error" });
    }
  }

  return (
    <div className="flex flex-col gap-5 bg-white rounded-xl shadow-md p-4 h-full pb-14">
      {/* Price Section */}
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between text-gray-600">
          <p>Price</p>
          <p>₹{total}</p>
        </div>

        <div className="flex justify-between text-gray-600">
          <p>Tax</p>
          <p>₹{tax.toFixed(2)}</p>
        </div>

        <div className="border-t pt-2 flex justify-between font-semibold text-gray-800">
          <p>Total</p>
          <p>₹{grandTotal.toFixed(2)}</p>
        </div>
      </div>

      {/* Payment */}
      <div className="flex flex-col gap-2">
        <h1 className="text-sm font-semibold text-gray-700">Payment</h1>

        <div className="flex gap-3">
          <button
            onClick={() => setPaymentMethod("CASH")}
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              paymentMethod === "CASH"
                ? "bg-blue-600 text-white"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`}
          >
            Cash
          </button>

          <button
            onClick={() => setPaymentMethod("ONLINE")}
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              paymentMethod === "ONLINE"
                ? "bg-blue-600 text-white"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`}
          >
            Online
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-auto">
        <button className="w-full py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          Print Receipt
        </button>

        <button
          onClick={handlePlaceOrder}
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BillingDetails;