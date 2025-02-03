"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlineChevronDown,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineUser,
  HiOutlineLogout,
} from "react-icons/hi";

const Dashboard: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg rounded-lg p-6 my-6 mx-4">
        <h2 className="text-2xl font-semibold mb-10 text-blue-600">
          Dashboard
        </h2>

        <ul className="space-y-6">
          <li className="hover:bg-blue-100 p-3 rounded-xl cursor-pointer">
            <Link
              href=""
              className="flex items-center text-gray-800 hover:text-blue-600"
            >
              <HiOutlineHome className="mr-3" />
              Overview
            </Link>
          </li>
          <li className="hover:bg-blue-100 p-3 rounded-xl cursor-pointer">
            <Link
              href=""
              className="flex items-center text-gray-800 hover:text-blue-600"
            >
              <HiOutlineCog className="mr-3" />
              Settings
            </Link>
          </li>
          <li className="hover:bg-blue-100 p-3 rounded-xl cursor-pointer">
            <Link
              href=""
              className="flex items-center text-gray-800 hover:text-blue-600"
            >
              <HiOutlineUser className="mr-3" />
              Profile
            </Link>
          </li>
          <li className="hover:bg-blue-100 p-3 rounded-xl cursor-pointer">
            <Link
              href=""
              className="flex items-center text-gray-800 hover:text-blue-600"
            >
              <HiOutlineLogout className="mr-3" />
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8 my-6 mx-4 rounded-lg shadow-xl">
        <header className="bg-blue-600 text-white p-6 rounded-xl mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">
              Welcome to your Dashboard
            </h1>
            <p className="text-lg mt-2">
              You're doing great! Here’s your activity overview.
            </p>
          </div>

         
          {/* Quick Actions Button and Dropdown */}


          {/* Quick Actions Button and Dropdown */}
<div className="flex">
  <HiOutlineBell className="text-white text-2xl cursor-pointer mr-4 mt-2" />
  <div className="relative inline-block">
    <button
      onClick={toggleDropdown}
      className="flex items-center space-x-3 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-lg text-gray-800 hover:bg-blue-100 focus:outline-none"
    >
      <span>Quick Actions</span>
      <HiOutlineChevronDown className="text-gray-500" />
    </button>

    {isDropdownOpen && (
      <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
        <Link
          href=""
          className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
        >
          Sign
        </Link>
        <Link
          href=""
          className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
        >
          New Templates
        </Link>
        <Link
          href=""
          className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
        >
          New Contacts
        </Link>
      </div>
    )}
  </div>
</div>

        </header>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Overview
            </h2>
            <p className="text-gray-600">
              Some data about user activity goes here.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Activity
            </h2>
            <p className="text-gray-600">List of recent activities...</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Performance
            </h2>
            <p className="text-gray-600">Data about performance metrics...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
