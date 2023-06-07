import assets from "@/assets";
import Image from "next/image";
import React, {useState} from "react";

export default function PaymentMethod() {
  const [showPaymentDetails, setshowPaymentDetails] = useState(false);
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
        <button className="flex gap-2 items-center border-2 px-4 py-1.5 text-sm mt-4 border-solid border-[#6B43FB] rounded" onClick={() => setshowPaymentDetails(!showPaymentDetails)}>
          <Image src={assets.add__icon} alt="" className="w-3 h-3" />
          Payment Method
        </button>
      </div>
      {showPaymentDetails ?
      <div>
        <h2 className="text-xl font-bold tracking-wider">
          Enter Payment Detail
        </h2>
        <h5 className="text-sm font-bold tracking-wider">PAYMENT METHOD</h5>
        <div className="mt-5">
          <div className="flex items-center">
            <Image src={assets.cradit__icon} alt="" />
            <label
            for="checked-checkbox"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Credit / Debit Card
          </label>
          </div>
        </div>
        <h5 className="mt-3">
        Credit / Debit Card
        </h5>
        <input type="text" className="border border-solid border-gray-200 outline-none w-80 h-10 mt-2 rounded pl-3 text-sm" placeholder="1234564789789" />
        <div className="flex pt-4 gap-3">
          <div className="flex flex-col">
          <label htmlFor="">Expiry Date</label>
          <input type="text" className="border border-solid border-gray-200 outline-none w-40 h-10 mt-2 rounded pl-3 text-sm" placeholder="MM/YYYY" />
          </div>
          <div className="flex flex-col">
          <label htmlFor="">CSV</label>
          <input type="text" className="border border-solid border-gray-200 outline-none w-40 h-10 mt-2 rounded pl-3 text-sm" placeholder="***" />
          </div>
        </div>
      </div> : null }
    </>
  );
}
