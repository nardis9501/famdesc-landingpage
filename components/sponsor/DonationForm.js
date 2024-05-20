import Transition from "@/components/Transition/Transition";
import { useState } from "react";

export default function DonationForm() {
  const [name, setName] = useState("");
  const [testimony, setTestimony] = useState("");
  const [donationMethod, setDonationMethod] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Manejar la lógica de la donación aquí
  };

  return (
    <>
      <Transition />
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 m-4 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Support Famdesc
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our donation page is not yet ready to receive donations. Please check
          back later. Thank you for your support!
        </p>
        <form onSubmit={handleFormSubmit}>
          {!isAnonymous && (
            <>
              <div className="mb-5">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-gray-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Testimony
                </label>
                <textarea
                  className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-gray-500"
                  value={testimony}
                  onChange={(e) => setTestimony(e.target.value)}
                ></textarea>
              </div>
            </>
          )}
          <div className="mb-5">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Donation Method
            </label>
            <select
              className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-gray-500"
              value={donationMethod}
              onChange={(e) => setDonationMethod(e.target.value)}
            >
              <option value="" disabled>
                Select a method
              </option>
              <option value="paypal">PayPal</option>
              <option value="stripe">Stripe</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-gray-500"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
            <label className="ml-3 block text-gray-700 dark:text-gray-300">
              Donate Anonymously
            </label>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white dark:text-gray-900 bg-blue-600 dark:bg-gray-300 hover:bg-blue-700 dark:hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-gray-500"
          >
            Donate Now
          </button>
        </form>
      </div>
    </>
  );
}
