import React from "react";

export default function QuoteBanner({ phrase }) {
  if (!phrase) {
    return;
  }
  return (
    <>
      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden mx-4 transform transition duration-500 hover:scale-105">
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">{phrase}</p>
        </div>
      </div>
    </>
  );
}
