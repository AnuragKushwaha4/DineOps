import React, { useState } from "react";
import {
  FiGrid,
  FiLayers,
  FiCoffee,
  FiDollarSign,
  FiShoppingBag,
  FiCreditCard,
} from "react-icons/fi";

import FinanceInfo from "./AdminComponents/FinanceInfo"
import OrderInfo from "./AdminComponents/OrderInfo"
import PaymentInfo from "./AdminComponents/PaymentInfo"
import TableCreation from "./AdminComponents/TableCreation";

const AdminDashboard = () => {

  const [activeTab, setActiveTab] = useState("finances");
  const [isTableCreation,setTableCreation] = useState(false)

  /* ---------------- ACTION HANDLERS ---------------- */

  function handleAddTable() {
    setTableCreation(true)
  }

  function handleAddCategory() {
    console.log("Add Category clicked");
  }

  function handleAddDish() {
    console.log("Add Dish clicked");
  }

  /* ---------------- TAB HANDLER ---------------- */

  function handleTabChange(tab) {
    setActiveTab(tab);
  }

  /* ---------------- BUTTON STYLE ---------------- */

  const tabStyle = (name) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
    ${
      activeTab === name
        ? "bg-blue-600 text-white shadow-md"
        : "text-blue-600 hover:bg-blue-100"
    }`;

  const actionStyle =
    "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200 transition";

  /* ---------------- BODY RENDER ---------------- */

  function renderContent() {
    switch (activeTab) {
      case "finances":
        return <div className="text-xl font-semibold"><FinanceInfo/> </div>;

      case "orders":
        return <div className="text-xl font-semibold"><OrderInfo/></div>;

      case "payments":
        return <div className="text-xl font-semibold"><PaymentInfo/></div>;

      default:
        return null;
    }
  }

  return (
    <div className="p-6 space-y-6">

      {/* TOP CONTROL BAR */}
      <div className="flex justify-between bg-white  rounded-xl p-4">

        {/* LEFT ACTION BUTTONS */}
        <div className="flex gap-3">
          <button onClick={handleAddTable} className={actionStyle}>
            <FiGrid />
            Add Table
          </button>

          <button onClick={handleAddCategory} className={actionStyle}>
            <FiLayers />
            Add Category
          </button>

          <button onClick={handleAddDish} className={actionStyle}>
            <FiCoffee />
            Add Dishes
          </button>
        </div>

        {/* RIGHT NAVIGATION TABS */}
        <div className="flex gap-3">
          <button
            onClick={() => handleTabChange("finances")}
            className={tabStyle("finances")}
          >
            <FiDollarSign />
            Finances
          </button>

          <button
            onClick={() => handleTabChange("orders")}
            className={tabStyle("orders")}
          >
            <FiShoppingBag />
            Orders
          </button>

          <button
            onClick={() => handleTabChange("payments")}
            className={tabStyle("payments")}
          >
            <FiCreditCard />
            Payments
          </button>
        </div>

      </div>

      {/* BODY */}
      <div className="bg-white  rounded-xl p-6 min-h-[300px]">
        {renderContent()}
      </div>

    {isTableCreation && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
    <TableCreation
      isTableCreation={isTableCreation}
      setTableCreation={setTableCreation}
    />
  </div>
)}
    </div>
  );
};

export default AdminDashboard;