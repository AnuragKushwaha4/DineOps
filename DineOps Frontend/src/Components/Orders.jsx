import React from "react";
import Heading from "./OrdersComponents/Heading";
import OrderList from "./OrdersComponents/OrdersList";

const Orders = () => {
  return (
    <div className="min-h-screen bg-blue-50 pb-24 flex flex-col">

      {/* Heading Section */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <Heading />
      </div>

      {/* Orders List */}
      <div className="flex-1 overflow-y-auto">
        <OrderList />
      </div>

    </div>
  );
};

export default Orders;