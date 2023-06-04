import assets from "@/assets";
import Image from "next/image";
import React from "react";

export default function Download() {
  return (
    <div>
      <small>
        The following addresses will be used on the checkout page by default.
      </small>
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
          <button className="flex gap-2 items-center border-2 px-4 py-1.5 text-sm mt-4 border-solid border-[#6B43FB] rounded">
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
          <button className="flex gap-2 items-center border-2 px-4 py-1.5 text-sm mt-4 border-solid border-[#6B43FB] rounded">
          <Image src={assets.add__icon} alt="" className="w-3 h-3" />
            Add Address
          </button>
        </div>
      </div>
    </div>
  );
}
