import React from "react";
import SponsorButton from "./SponsorButton";

export default function DonationCard(props) {
  return (
    <>
      <div className="bg-white/50 backdrop-blur-md dark:bg-gray-800/30 shadow-lg rounded-lg overflow-hidden m-4 transform transition duration-500 hover:scale-105">
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Support Famdesc
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Did you know that Famdesc relies on donations from users like you to
            continue development and maintenance?
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you value Famdesc and want to see it grow, consider making a
            donation today - your contribution makes a difference!
          </p>
          <SponsorButton />
        </div>
      </div>
    </>
  );
}
