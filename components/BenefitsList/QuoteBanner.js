import React from "react";

export default function QuoteBanner({ phrase }) {
  if (!phrase) {
    return;
  }
  return (
    <>
      <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden mx-6 transform transition duration-500 hover:scale-105">
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">{phrase}</p>
        </div>
      </div>
    </>
  );
}
