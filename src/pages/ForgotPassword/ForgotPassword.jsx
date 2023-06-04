import assets from "@/assets";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <section className="forgot__pass bg-center bg-cover min-h-screen w-full bg-no-repeat">
        <div className="flex justify-center items-center min-h-screen">
          <div class="max-w-2xl p-8 bg-white rounded-2xl drop-shadow-lg">
            <div className="flex justify-center">
              <div className="w-72 h-14 bg-white shadow rounded-full">
                <div className="flex justify-center items-center h-full">
                  <Image src={assets.sheild__check} alt="" />
                  <span className="font-bold text-[#5636C9] uppercase">
                    Forgot Password
                  </span>
                </div>
              </div>
            </div>
            <h5 class="mb-4 2xl:text-2xl xl:text-4xl font-bold tracking-tight text-[#5636C9] text-center mt-4">
              Recover Password
            </h5>
            <p class="mb-3 font-normal text-lg text-center text-gray-700">
              Enter your registered email address below, and we'll send you
              instructions on how to reset your password.
            </p>
            <form action="" className="relative">
                <label htmlFor="" className="text-gray-500">Email</label>
                <div className="realtive">
                    <div className="absolute top-14 right-3">
                    <Image src={assets.message__icon} alt="" />
                    </div>
                    <input type="text" className="w-full bg-[#3330500D] rounded h-14 outline-none text-sm pl-4 mt-3" placeholder="Your Email" />
                </div>
                <button className="p-4 w-full rounded-md uppercase text-sm mt-8 bg-[#151247] text-white">
                    Reset Password now
                </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
