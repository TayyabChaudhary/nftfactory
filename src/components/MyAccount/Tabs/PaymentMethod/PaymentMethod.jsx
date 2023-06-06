import assets from "@/assets";
import Image from "next/image";
import React from "react";

export default function PaymentMethod() {
  return (
    <>
      <p className="text-sm">
        The following Payment Method will be used on the checkout page by
        default.
      </p>
      <div className="bg-white w-full max-w-full p-9 mt-10">
        <h1 className="2xl:text-2xl xl:text-2xl font-medium">Payment Method</h1>
        <p className="text-sm text-gray-400 mt-2">
          You have not set up any payment method yet.
        </p>
        <button className="flex gap-2 items-center border-2 px-4 py-1.5 text-sm mt-4 border-solid border-[#6B43FB] rounded">
          <Image src={assets.add__icon} alt="" className="w-3 h-3" />
            Payment Method
          </button>
      </div>
    </>
  );
}
