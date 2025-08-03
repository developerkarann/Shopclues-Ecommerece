import React, { useState } from "react";

const PaymentPage = ({ total = 1596 }) => {
  const [selectedMethod, setSelectedMethod] = useState("UPI");

  const paymentMethods = [
    { name: "Cards" },
    { name: "UPI" },
    { name: "Net Banking", offer: true },
    { name: "Wallets", offer: true },
    { name: "Cash on Delivery", disabled: true }
  ];

  return (
    <div className="bg-white p-4 rounded shadow mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Left: Payment Modes */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Select Payment Mode</h3>
        <div className="space-y-2">
          {paymentMethods.map((method) => (
            <label
              key={method.name}
              className={`flex items-center justify-between p-2 rounded cursor-pointer ${
                selectedMethod === method.name ? "bg-gray-100 border-l-4 border-orange-500" : ""
              } ${method.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value={method.name}
                  disabled={method.disabled}
                  checked={selectedMethod === method.name}
                  onChange={() => setSelectedMethod(method.name)}
                  className="accent-orange-500"
                />
                <span>{method.name}</span>
              </div>
              {method.offer && (
                <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">OFFERS</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Center: UPI Info + Place Order */}
      <div className="flex flex-col items-center justify-center border-l border-r border-gray-200 px-4">
        <button className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded shadow text-lg">
          Place order for ₹{total}
        </button>
        <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0v1c0 1.104.896 2 2 2s2-.896 2-2v-1m-4 0v1c0 1.104.896 2 2 2s2-.896 2-2v-1"
            />
          </svg>
          Secure Payment, Easy Returns & Refunds
        </p>
      </div>

      {/* Right: Bank/Wallet Offers */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Bank/Wallet Offers</h3>
        <div className="border border-dashed border-green-400 p-3 space-y-3 text-sm text-gray-700">
          <div className="flex gap-2 items-start">
            <img
              src="https://static.mobikwik.com/assets/images/logo/logo_blue.png"
              alt="Mobikwik"
              className="w-6 h-6"
            />
            <p>
              Get up to ₹300 Cashback on Mobikwik, Minimum assured cashback is ₹35,
              Minimum transaction amount is ₹2499
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <img
              src="https://companieslogo.com/img/orig/AIRTELBANK.NS_BIG-05f457ac.png?t=1642833644"
              alt="Airtel"
              className="w-6 h-6"
            />
            <p>
              ₹159 Cashback* on your first order with Airtel Payments Bank,
              <span className="text-blue-600"> T&C Apply</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
