import React, { useState } from "react";
import ShippingAddress from "./ShippingAddress";
import assets from "@/assets";
import Image from "next/image";

export default function Address() {
  const [first, setfirst] = useState(false);
  const [showDownload, setshowDownload] = useState(false);
  const [address, setaddress] = useState(true);
  const [showShippingAddress, setshowShippingAddress] = useState(false);

  const showShipping = () => {
    setaddress(false);
    setshowShippingAddress(true)
  };

  const showBillingAddress = () => {
    setfirst(true);
    setaddress(false);
  };
  return (
    <>
         {address ? (
        <div className="flex 2xl:flex-row xl:flex-row gap-4 mt-4 md:flex-row lg:flex-row flex-col">
          <div class="w-[400px] p-6 bg-white rounded-lg">
            <a href="#">
              <h5 class="mb-2 2xl:text-2xl xl:text-3xl font-bold tracking-wide text-gray-900">
                Billing Address
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              You have not set up this type of address yet.
            </p>
            <button
              className="flex gap-2 items-center border-2 px-4 py-1.5 text-sm mt-4 border-solid border-[#6B43FB] rounded"
              onClick={showBillingAddress}
            >
              <Image src={assets.add__icon} alt="" className="w-3 h-3" />
              Add Address
            </button>
          </div>
          <div class="w-[400px] p-6 bg-white rounded-lg">
            <a href="#">
              <h5 class="mb-2 2xl:text-2xl xl:text-3xl font-bold tracking-wide text-gray-900">
                Shipping Address
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              You have not set up this type of address yet.
            </p>
            <button className="flex gap-2 items-center border-2 px-4 py-1.5 text-sm mt-4 border-solid border-[#6B43FB] rounded" onClick={showShipping}>
              <Image src={assets.add__icon} alt="" className="w-3 h-3" />
              Add Address
            </button>
          </div>
        </div>
      ) : null}
     
      {showShippingAddress ? (
         <><h1 className="text-2xl mt-3">Shipping Address</h1><form autoComplete="off">
          <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
            <div>
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 outline-none w-full"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
                placeholder="First Name"
                required />
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
                required />
            </div>
            <div>
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
                placeholder="Your Eamil"
                required />
            </div>
            <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
                placeholder="Phone Number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required />
            </div>
            <div>
              <label
                for="website"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Country
              </label>
              <input
                type="url"
                id="website"
                className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
                placeholder="Enter Country"
                required />
            </div>
            <div>
              <label
                for="visitors"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <input
                type="number"
                id="visitors"
                className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
                placeholder="Phone Number"
                required />
            </div>
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address (optional)
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="Phone Number"
              required />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="password"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="Postal Code"
              required />
          </div>
          <div className="mb-6">
            <label
              for="confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              State
            </label>
            <input
              type="text"
              id="confirm_password"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="State"
              required />
          </div>

          <button
            type="submit"
            className="text-white bg-[#6B43FB] hover:bg-[#6B43FB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-16 py-4 text-center"
          >
            Save
          </button>
        </form></>
      ) : null}

      {first ? <ShippingAddress /> : null}
    </>
  );
}
