import React, { useRef } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { MdTableRestaurant } from "react-icons/md";

const Invoice = ({ orderInfo, setShowInvoice,navigate }) => {

  const invoiceRef = useRef(null);

  if (!orderInfo) return null;

  
  const handlePrint = () => {

    const printContent = invoiceRef.current.innerHTML;

    const WinPrint = window.open("", "", "width=900,height=650");

    WinPrint.document.write(`
      <html>
        <head>
          <title>DineOps Invoice</title>

          <style>

            body{
              font-family: Arial, sans-serif;
              background:#f4f7fb;
              padding:30px;
            }

            .invoice{
              max-width:380px;
              margin:auto;
              background:white;
              border-radius:18px;
              padding:25px;
              box-shadow:0 0 10px rgba(0,0,0,0.1);
            }

            .center{
              text-align:center;
            }

            .success{
              width:65px;
              height:65px;
              background:linear-gradient(to right,#2563eb,#60a5fa);
              border-radius:50%;
              display:flex;
              align-items:center;
              justify-content:center;
              color:white;
              font-size:28px;
              margin:auto;
            }

            .title{
              font-size:24px;
              font-weight:bold;
              margin-top:15px;
            }

            .subtitle{
              color:#666;
              font-size:13px;
              margin-top:5px;
            }

            .section{
              margin-top:20px;
              border-top:1px dashed #ddd;
              padding-top:15px;
            }

            .row{
              display:flex;
              justify-content:space-between;
              margin-bottom:10px;
              font-size:14px;
            }

            .total{
              font-size:18px;
              font-weight:bold;
              color:#2563eb;
            }

            .item{
              background:#f8fafc;
              padding:10px;
              border-radius:10px;
              margin-bottom:8px;
            }

          </style>
        </head>

        <body>
          ${printContent}
        </body>
      </html>
    `);

    WinPrint.document.close();

    setTimeout(() => {
      WinPrint.print();
      WinPrint.close();
    }, 800);
  };

  return (

    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-white w-[420px] rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-600 to-sky-400 p-6 text-white relative">

          <button
            onClick={() => setShowInvoice(false)}
            className="absolute right-4 top-4 text-white"
          >
            <FaXmark size={20}/>
          </button>

          <div className="flex flex-col items-center">

            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
              <FaCheck size={28}/>
            </div>

            <h1 className="text-2xl font-bold mt-4">
              Payment Successful
            </h1>

            <p className="text-sm text-blue-100 mt-1">
              Invoice Generated Successfully
            </p>
          </div>
        </div>

        {/* Invoice Body */}

        <div
          ref={invoiceRef}
          className="p-6 bg-white"
        >

          {/* Customer Info */}

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="font-semibold text-lg">
                {orderInfo.customerDetails?.name}
              </h2>

              <p className="text-sm text-gray-500">
                {orderInfo.customerDetails?.phone}
              </p>
            </div>

            <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-2 rounded-xl">
              <MdTableRestaurant />
              <span className="text-sm">
                Table {orderInfo.table}
              </span>
            </div>
          </div>

          {/* Items */}

          <div className="space-y-3">

            {orderInfo.items?.map((item,index)=>(

              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-3 flex justify-between items-center"
              >

                <div>
                  <h1 className="font-medium text-sm">
                    {item.name}
                  </h1>
                </div>

                <h1 className="font-semibold text-sm">
                  ₹{((Number(item.price) || 0) * (Number(item.count) || 0)).toFixed(2)}
                </h1>

              </div>
            ))}

          </div>

          {/* Billing */}

          <div className="border-t mt-6 pt-4 space-y-2">

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span>₹{orderInfo.bills?.total?.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tax</span>
              <span>₹{orderInfo.bills?.tax?.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-blue-600 pt-2">
              <span>Total</span>
              <span>
                ₹{orderInfo.bills?.totalwithTax?.toFixed(2)}
              </span>
            </div>

          </div>

          {/* Payment */}

          <div className="mt-5 bg-green-50 rounded-2xl p-4">

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                Payment Method
              </span>

              <span className="font-semibold">
                {orderInfo.paymentMethod}
              </span>
            </div>

            {
              orderInfo.paymentMethod === "ONLINE" && (
                <div className="mt-2 text-xs text-gray-500 break-all">
                  {orderInfo.paymentData?.razorpay_payment_id}
                </div>
              )
            }

          </div>

        </div>

        {/* Footer Buttons */}

        <div className="p-5 border-t bg-slate-50 flex gap-3">

          <button
            onClick={handlePrint}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition"
          >
            Print Invoice
          </button>

          <button
            onClick={() => {
                setShowInvoice(false)
                navigate("/")
            }}
            className="px-5 bg-white border rounded-2xl hover:bg-gray-100 transition"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default Invoice;