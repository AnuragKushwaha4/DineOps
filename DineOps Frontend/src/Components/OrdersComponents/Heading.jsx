import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Heading = ({ setCategory }) => {

  const navigate = useNavigate();
  const [active, setActive] = useState("All");

  const handleClick = (category) => {
    setActive(category);
    setCategory(category);
  };

  const getClass = (category) =>
    active === category
      ? "bg-blue-600 text-white"
      : "bg-blue-50 text-blue-600 hover:bg-blue-100";

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm border-b">

      
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 transition"
      >
        <ArrowLeft size={18} className="text-blue-600" />
      </button>

      {/* Tabs */}
      <div className="flex gap-3">

        <button onClick={() => handleClick("All")} className={`px-4 py-2 rounded-full font-medium ${getClass("All")}`}>
          All
        </button>

        <button onClick={() => handleClick("In Progress")} className={`px-4 py-2 rounded-full font-medium ${getClass("In Progress")}`}>
          In Progress
        </button>

        <button onClick={() => handleClick("Ready")} className={`px-4 py-2 rounded-full font-medium ${getClass("Ready")}`}>
          Ready
        </button>

        <button onClick={() => handleClick("Completed")} className={`px-4 py-2 rounded-full font-medium ${getClass("Completed")}`}>
          Completed
        </button>

      </div>

    </div>
  );
};

export default Heading;