// VerifyOTPPage.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Config from "../../../constants/Config";

const VerifyOTPPage = () => {
  const router = useRouter();
  const [enteredOTP, setEnteredOTP] = useState("");
  const [error, setError] = useState("");

  const validateOTP = () => {
    const otpRegex = /^\d{1,5}$/; // Regex for up to 5 digits
    if (!enteredOTP) {
      setError("OTP cannot be empty");
      return false;
    } else if (!enteredOTP.match(otpRegex)) {
      setError("Invalid OTP format. Must be up to 5 digits");
      return false;
    }
    return true;
  };

  const handleVerifyOTP = async () => {
    if (!validateOTP()) {
      return; // Don't proceed with OTP verification if OTP is invalid
    }
    try {
      const response = await fetch(`${Config.baseUrl}/auth/verify/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: Cookies.get("phone"),
          otp: enteredOTP,
        }),
      });
      const data = await response.json();
      Cookies.set("token", data.access_token);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Verify OTP
        </h2>
        <h3 className="mt-6 text-center text-3xl font-extrabold text-white">
          {Cookies.get("otp")}
        </h3>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-white"
              >
                Enter OTP
              </label>
              <div className="mt-1">
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  value={enteredOTP}
                  onChange={(e) => setEnteredOTP(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>

            <div>
              <button
                onClick={handleVerifyOTP}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 space-y-6"
              >
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPPage;
