import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">

      <div className="flex flex-col items-center gap-8">

        {/* Bouncing Wave */}
        <div className="flex items-end space-x-3">

          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-duration:0.7s]"></div>

          <div className="w-5 h-5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.1s] [animation-duration:0.7s]"></div>

          <div className="w-6 h-6 bg-blue-300 rounded-full animate-bounce [animation-delay:0.2s] [animation-duration:0.7s]"></div>

          <div className="w-5 h-5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.3s] [animation-duration:0.7s]"></div>

          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s] [animation-duration:0.7s]"></div>

        </div>

        {/* Text */}
        <p className="text-blue-600 font-semibold tracking-wide animate-pulse">
          Loading DineOps...
        </p>

      </div>

    </div>
  );
};

export default Loader;