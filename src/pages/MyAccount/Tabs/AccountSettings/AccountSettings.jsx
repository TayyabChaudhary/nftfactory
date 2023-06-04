import assets from "@/assets";
import Image from "next/image";
import React from "react";

export default function AccountSettings() {
  return (
    <div>
      <h1 className="text-2xl">Profile Settings</h1>

      <form autoComplete="off">
        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 outline-none"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="password"
            className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
            placeholder="Phone Number"
            required
          />
        </div>
        <h1 className="text-xl">Change Password</h1>

        <form className="mt-3 relative border border-solid border-gray-100 p-5">
            <div className="relative">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Old password
          </label>
          <div className="realtive">
            <div className="absolute top-11 right-3">
              <Image src={assets.eye__icon} alt="" />
            </div>
            <input
              type="password"
              className="w-full bg-gray-50 rounded h-11 outline-none text-sm pl-4 mt-1"
              placeholder="********"
            />
          </div>
          </div>
          <div class="mb-6 relative mt-4">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              New password
            </label>
            <div className="realtive">
              <div className="absolute top-11 right-3">
                <Image src={assets.eye__icon} alt="" />
              </div>
              <input
                type="password"
                className="w-full bg-gray-50 rounded h-11 outline-none text-sm pl-4 mt-1"
                placeholder="********"
              />
            </div>
          </div>
          <div class="mb-6 relative mt-4">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Confirm password
            </label>
            <div className="realtive">
              <div className="absolute top-11 right-3">
                <Image src={assets.eye__icon} alt="" />
              </div>
              <input
                type="password"
                className="w-full bg-gray-50 rounded h-11 outline-none text-sm pl-4 mt-1"
                placeholder="********"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-300"
              >
                Remember me
              </label>
            </div>
            <span className="text-sm text-[#6B43FB] cursor-pointer hover:underline">
              Forgot Password
            </span>
          </div>
        </form>

        <button
          type="submit"
          className="text-white bg-[#6B43FB] mt-10 hover:bg-[#6B43FB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-16 py-4 text-center"
        >
          Save
        </button>
      </form>
    </div>
  );
}
