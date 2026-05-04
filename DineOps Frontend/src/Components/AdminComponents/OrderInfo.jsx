import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getOrders,
  updateOrder,
  updateTable,
} from "../../Https/index";
import { enqueueSnackbar } from "notistack";
import Loader from "../CommanComponents/Loader";

const OrdersInfo = () => {
  const queryClient = useQueryClient();

  const { data: orderData, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: getOrders,
    onError: () => {
      enqueueSnackbar("Something went wrong", { variant: "error" });
    },
  });


  const tableUpdateMutation = useMutation({
    mutationFn: (tableDetails) => updateTable(tableDetails),
    onSuccess: (resData) => {
      enqueueSnackbar(resData?.data?.message, {
        variant: "success",
      });
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response?.data?.message, {
        variant: "error",
      });
    },
  });


  const orderUpdateMutation = useMutation({
    mutationFn: (updationData) => updateOrder(updationData),

    onSuccess: (resData) => {
      enqueueSnackbar(resData?.data?.message, {
        variant: "success",
      });


      queryClient.invalidateQueries(["order"]);

      if (resData?.data?.data.orderStatus === "Completed") {
        const tableDetails = {
          tableID: resData?.data?.data.table,
          tableStatus: "Available",
          orderID: null,
        };

        tableUpdateMutation.mutate(tableDetails);
      }
    },

    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response?.data?.message, {
        variant: "error",
      });
    },
  });

 
  function handleStatusChange(id, newStatus) {
    const updationData = {
      id,
      orderStatus: newStatus,
    };

    orderUpdateMutation.mutate(updationData);
  }


  function formatDateTime(dateString) {
    const date = new Date(dateString);

    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  
  function statusStyle(status) {
    if (status === "Ready")
      return "bg-green-100 text-green-700";
    if (status === "In Progress")
      return "bg-yellow-100 text-yellow-700";
    if (status === "Completed")
      return "bg-gray-200 text-gray-700";
    return "";
  }


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Orders
      </h2>

      <div className="space-y-4">
        {orderData?.data?.data.map((order, index) => (
          <div
            key={order._id}
            className={`flex items-center justify-between rounded-lg px-5 py-4 
            ${
              order.orderStatus === "Completed"
                ? "bg-gray-100 opacity-60 cursor-not-allowed"
                : "bg-gray-50"
            }`}
          >
            {/* LEFT */}
            <div className="flex flex-col">
              <span
                className={`font-semibold ${
                  order.orderStatus === "Completed"
                    ? "line-through"
                    : ""
                }`}
              >
                Order #{index + 1}
              </span>

              <span className="text-sm text-gray-500">
                {order.customerDetails.name} • Table{" "}
                {order.table.tableNo}
              </span>

              <span className="text-xs text-gray-400">
                {formatDateTime(order.updatedAt)}
              </span>
            </div>

            {/* MIDDLE */}
            <div className="flex items-center gap-10">
              <div className="text-sm">
                <p className="text-gray-400">Items</p>
                <p className="font-medium">
                  {order.items.length}
                </p>
              </div>

              <div className="text-sm">
                <p className="text-gray-400">Total</p>
                <p className="font-semibold text-blue-600">
                  ₹{order.bills.totalwithTax}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 text-xs rounded-full font-medium 
                ${statusStyle(order.orderStatus)}
                ${
                  order.orderStatus === "Completed"
                    ? "opacity-70"
                    : ""
                }`}
              >
                {order.orderStatus}
              </span>

              <select
                value={order.orderStatus}
                disabled={order.orderStatus === "Completed"}
                onChange={(e) =>
                  handleStatusChange(
                    order._id,
                    e.target.value
                  )
                }
                className="border rounded-md px-2 py-1 text-sm focus:outline-none 
                disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option>In Progress</option>
                <option>Ready</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersInfo;