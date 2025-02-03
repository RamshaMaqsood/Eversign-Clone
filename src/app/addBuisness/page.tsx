"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define form data type
interface AddBusinessFormInputs {
  businessName: string;
  businessEmail: string;
  termsAccepted: boolean;
}

// Validation Schema

const schema = yup.object().shape({
  businessName: yup.string().required("Business name is required"),
  businessEmail: yup.string().email("Invalid email format").required("Business email is required"),
  termsAccepted: yup.boolean().oneOf([true], "You must accept the terms").required(),
});



export default function AddBusinessPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBusinessFormInputs>({
    resolver: yupResolver(schema),
  });

  const onAddBusiness = (data: AddBusinessFormInputs) => {
    console.log("Business Added:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 relative">
        {/* Close Button */}
        <Link href="/" className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl">✕</Link>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add Business</h1>

        <form onSubmit={handleSubmit(onAddBusiness)} className="flex flex-col space-y-4">
          {/* Business Name Field */}
          <div>
            <label htmlFor="businessName" className="block text-gray-700 font-semibold">
              Business Name:
            </label>
            <input
              type="text"
              id="businessName"
              {...register("businessName")}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.businessName ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
              }`}
              placeholder="Enter business name"
            />
            {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>}
          </div>

          {/* Business Email Field */}
          <div>
            <label htmlFor="businessEmail" className="block text-gray-700 font-semibold">
              Business Email:
            </label>
            <input
              type="email"
              id="businessEmail"
              {...register("businessEmail")}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.businessEmail ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
              }`}
              placeholder="Enter business email"
            />
            {errors.businessEmail && <p className="text-red-500 text-sm mt-1">{errors.businessEmail.message}</p>}
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="termsAccepted" {...register("termsAccepted")} className="w-4 h-4" />
            <label htmlFor="termsAccepted" className="text-gray-700 text-sm">
              I accept the <Link href="/terms" className="text-blue-500 hover:underline">terms and conditions</Link>
            </label>
          </div>
          {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted.message}</p>}

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Add Business
            </button>
            <Link href="/" className="w-full bg-gray-300 text-gray-700 p-3 rounded-lg font-semibold text-center hover:bg-gray-400 transition">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
