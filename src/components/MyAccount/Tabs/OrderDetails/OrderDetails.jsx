import assets from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

export default function OrderDetails() {
  const [first, setfirst] = useState(true);
  const [showDetails, setshowDetails] = useState(false);

  const showOrderDetails = () => {
    setfirst(false);
    setshowDetails(true);
  };
  return (
    <>
      <h2 className="text-2xl mb-6">Order Details</h2>
      {first ? (
        <div className="bg-[#3330500D] h-16 pr-4">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center pl-4 gap-3">
              <Image
                src={assets.second__box__icon}
                alt=""
                className="w-8 h-8"
              />
              <h1>No Order has been made yet.</h1>
            </div>

            <button
              onClick={showOrderDetails}
              className="bg-[#6B43FB] text-white text-sm px-4 py-3 font-medium tracking-wider rounded-md"
            >
              Browse Product
            </button>
          </div>
        </div>
      ) : null}
      {showDetails ? (
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Order
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-[#6B43FB] whitespace-nowrap"
                >
                  #678
                </th>
                <td class="px-6 py-4">24-Sep</td>
                <td class="px-6 py-4 text-red-600">Cancelled</td>
                <td class="px-6 py-4">$125</td>
                <td class="px-6 py-4">
                  <button className="text-white text-sm bg-[#6B43FB] rounded-lg px-4 py-2 tracking-wider">
                    View Details
                  </button>
                </td>
              </tr>
              <tr class="bg-white">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-[#6B43FB] whitespace-nowrap"
                >
                  #678
                </th>
                <td class="px-6 py-4">24-Sep</td>
                <td class="px-6 py-4 text-green-500">Completed</td>
                <td class="px-6 py-4">$125</td>
                <td class="px-6 py-4">
                  <button className="text-white text-sm bg-[#6B43FB] rounded-lg px-4 py-2 tracking-wider">
                    View Details
                  </button>
                </td>
              </tr>
              <tr class="bg-white">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-[#6B43FB] whitespace-nowrap"
                >
                  #678
                </th>
                <td class="px-6 py-4">24-Sep</td>
                <td class="px-6 py-4 text-yellow-400">Processsing</td>
                <td class="px-6 py-4">$125</td>
                <td class="px-6 py-4">
                  <button className="text-white text-sm bg-[#6B43FB] rounded-lg px-4 py-2 tracking-wider">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
}
