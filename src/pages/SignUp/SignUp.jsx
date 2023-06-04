import assets from "@/assets";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign up Account | NFT Factory</title>
      </Head>

      {/* =========== Code Start Here ======= */}
      <section className="flex 2xl:flex-row xl:flex-row md:flex-row lg:flex-row flex-col gap-6 w-full">

        <div className="flex-grow w-full mt-5 p-5">
          <div className="flex justify-center">
            <div className="w-[150px] h-[60px] flex justify-center items-center rounded-full bg-white shadow-md border border-solid border-purple-300">
              <Image src={assets.person__image} alt="" className="w-10 h-10" />
              <span className="font-bold tracking-wider text-[#5636C9]">
                SIGN UP
              </span>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <h1 className="2xl:text-4xl xl:text-5xl text-center tracking-wide font-extrabold text-[#5636C9]">
            Get started by creating your account!
            </h1>
          </div>
          <div className="flex justify-center pt-4">
            <h1 className="2xl:text-lg xl:text-lg text-center font-normal">
            Get started by creating your account! Fill out the required information below to join our community.
            </h1>
          </div>
          <form action="" className="p-4">
            <div className="relative mb-6">
              <label htmlFor="" className="text-[#333050]">
                Full Name
              </label>
              <div className="realtive">
                <div className="absolute top-10 right-3">
                  <Image src={assets.user__icon} alt="" />
                </div>
                <input
                  type="password"
                  className="w-full bg-gray-50 rounded h-11 outline-none text-sm pl-4 mt-1"
                  placeholder="Enter Full Name"
                />
              </div>
            </div>
            <div className="relative mb-6">
              <label htmlFor="" className="text-[#333050]">
                Email
              </label>
              <div className="realtive">
                <div className="absolute top-10 right-3">
                  <Image src={assets.message__icon} alt="" />
                </div>
                <input
                  type="email"
                  className="w-full bg-gray-50 rounded h-11 outline-none text-sm pl-4 mt-1"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="relative mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
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
            <div className="relative mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
               Confirm Password
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
            <button className="w-full h-14 rounded-lg text-white mt-4 bg-[#151247]">
              SUBMIT
            </button>
          </form>

          <div className="flex justify-center items-center w-full mt-4">
            <span>
              Already have an Account
              <Link href={`/LoginAccount/LoginAccount`} className="text-[#6B43FB] hover:underline pl-2">
                Sign in
              </Link>
            </span>
          </div>
        </div>
        <div className="w-full h-full">
          <Image src={assets.login__image} alt="" className="w-full min-h-screen object-cover" />
        </div>
      </section>
    </>
  );
}
