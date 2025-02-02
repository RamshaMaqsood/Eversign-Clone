
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the type for form data
interface ForgotPasswordFormInputs {
  email: string;
}

// Validation Schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
});

export default function ForgotPasswordPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will ensure the router is accessed only on the client side
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputs>({
    resolver: yupResolver(schema),
  });

  const onForgotPassword = (data: ForgotPasswordFormInputs) => {
    console.log("Password Reset Request Sent:", data);
  };

  const handleClose = () => {
    if (isClient) {
      window.history.back(); // This will take the user back to the previous page
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="relative bg-white p-8 rounded-2xl shadow-lg w-96">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-white focus:outline-none bg-gray-200 hover:bg-gray-400 rounded-full p-2 py-1 transition ease-in-out duration-200 border-2"
        >
          &times; {/* Close icon (X) */}
        </button>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Forgot Password</h1>

        <form onSubmit={handleSubmit(onForgotPassword)} className="flex flex-col space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Submit
          </button>

          {/* Link to Login Page */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>
              Remember your password?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
