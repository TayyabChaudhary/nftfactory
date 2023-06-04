import Head from 'next/head'
import React from 'react'
import assets from "@/assets";
import Image from "next/image";
export default function NewPassword() {
  return (
    <>
        <Head>
            <title>
                New Password
            </title>
        </Head>

        <main className="forgot__pass bg-center bg-cover min-h-screen w-full bg-no-repeat">

        <div className="flex justify-center items-center min-h-screen">
          <div className="max-w-2xl p-16 bg-white rounded-2xl drop-shadow-lg">
            <div className="flex justify-center">
              <div className="w-64 h-14 bg-white shadow rounded-full">
                <div className="flex justify-center items-center h-full">
                  <Image src={assets.sheild__check} alt="" />
                  <span className="font-bold tracking-wider text-[#5636C9] uppercase">
                    new Password
                  </span>
                </div>
              </div>
            </div>
            <h5 className="mb-4 2xl:text-2xl xl:text-3xl tracking-wider font-bold text-[#5636C9] text-center mt-4">
              Enter Password
            </h5>
            <p className="mb-3 font-normal tracking-tight text-xl text-center text-gray-800">
            To reset your password, please enter a new password in the field below.
            </p>
            <form action="" className="relative">
                <label htmlFor="" className="text-gray-400 text-sm">New Pasword</label>
                <div className="realtive">
                    <div className="absolute top-12 right-3">
                    <Image src={assets.eye__icon} alt="" />
                    </div>
                    <input type="text" className="w-full bg-[#3330500D] rounded h-14 outline-none text-sm pl-4 mt-2" placeholder="Your Email" />
                </div>
                <div className='relative pt-3'>
                <label htmlFor="" className="text-gray-400 text-sm">Confirm Pasword</label>
                <div className="realtive">
                    <div className="absolute top-16 right-3">
                    <Image src={assets.eye__icon} alt="" />
                    </div>
                    <input type="text" className="w-full bg-[#3330500D] rounded h-14 outline-none text-sm pl-4 mt-2" placeholder="Your Email" />
                </div>
                </div>
                <button className="p-4 w-full rounded-md uppercase text-sm mt-8 bg-[#151247] text-white">
                    Reset Password now
                </button>
            </form>
          </div>
        </div>
        </main>
    </>
  )
}
