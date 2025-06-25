"use client";
import { useState } from "react";
import Script from "next/script";

export default function DonateButton({ toggleModal }) {
  const [amount, setAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [phone, setPhone] = useState("");

  const handleDonate = () => {
    const amountInPaise = parseInt(amount, 10) * 100;

    if (!amountInPaise || amountInPaise <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const options = {
      key: "rzp_live_Xewv3Fb3K3nnJ8", // Replace with your Razorpay key
      amount: amountInPaise,
      currency: "INR",
      name: "NGO",
      description: "Support our mission",
      image: "https://example.com/logo.png",
      handler: function (response) {
        alert(`Thank you, ${donorName}! Donation successful. Payment ID: ${response.razorpay_payment_id}`);
        setShowModal(false);
      },
      prefill: {
        name: donorName,
        contact: phone
      },
      theme: {
        color: "#0d9488",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      {/* Razorpay Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      {/* Modal */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
            Support Our Cause
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Your donation helps us provide essential services to those in need.
          </p>


          <input
  type="text"
  placeholder="Full Name"
  className="w-full p-3 border border-gray-300 rounded-lg text-lg mb-4 focus:ring-2 focus:ring-green-500"
  value={donorName}
  onChange={(e) => setDonorName(e.target.value)}
/>

<input
  type="tel"
  placeholder="Phone Number"
  className="w-full p-3 border border-gray-300 rounded-lg text-lg mb-4 focus:ring-2 focus:ring-green-500"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
/>

          {/* Predefined Amount Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            {[100, 250, 500, 1000].map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`px-4 py-3 rounded-full text-lg border border-transparent transition-all duration-300 ease-in-out cursor-pointer ${
                  amount == amt
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-200 hover:bg-emerald-100"
                }`}
              >
                ₹{amt}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="mb-6">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-emerald-500"
              placeholder="Or enter custom amount"
              min="1"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            {/* Top Cancel Button */}
<button
  onClick={toggleModal}
  className="absolute top-3 right-4 text-gray-400 hover:text-red-600 text-2xl font-bold cursor-pointer"
>
  &times;
</button>

{/* Donate Button Only */}
<button
  onClick={handleDonate}
  className="w-full py-3 mt-4 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 cursor-pointer"
>
  Donate ₹{amount || "0"}
</button>

          </div>
        </div>
      </div>
    </>
  );
}