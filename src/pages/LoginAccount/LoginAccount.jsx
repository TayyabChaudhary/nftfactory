import assets from "@/assets";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";

export default function LoginAccount() {
  const [password, setpassword] = useState('');
  const [showPassword, setshowPassword] = useState(false);


  const togglePasswordVisible = () => {
    setshowPassword(prev => !prev);
  }
  return (
    <>
      <Head>
        <title>Login Account | NFT Factory</title>
      </Head>

      {/* =========== Code Start Here ======= */}
      <section className="flex 2xl:flex-row xl:flex-row md:flex-col-reverse lg:flex-col-reverse  flex-col-reverse gap-6 w-full">
        <div className="w-full h-full">
          <Image
            src={assets.login__image}
            alt=""
            className="w-full 2xl:min-h-screen xl:min-h-screen md:h-[600px] lg:h-[600px] h-[300px] 2xl:object-cover xl:object-cover md:object-cover lg:object-cover object-cover"
          />
        </div>
        <div className="flex-grow w-full mt-5">
          <div className="flex justify-center">
            <div className="w-[150px] h-[60px] flex justify-center items-center rounded-full bg-white shadow-md border border-solid border-purple-300">
              <Image src={assets.person__image} alt="" className="w-10 h-10" />
              <span className="font-bold tracking-wide text-[#5636C9]">
                LOGIN
              </span>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <h1 className="2xl:text-4xl xl:text-4xl font-extrabold text-[#5636C9]">
              Welcome Back
            </h1>
          </div>
          <div className="flex justify-center pt-4">
            <h1 className="2xl:text-sm xl:text-sm font-normal">
              Welcome to our secure login page!
            </h1>
          </div>
          <form action="" className="p-4">
            <div className="relative mb-6">
              <label htmlFor="" className="text-[#333050]">
                Email
              </label>
              <div className="relative">
              <div className="absolute top-6 right-3">
                  <Image src={assets.message__icon} alt="" />
                </div>
              <input
                type="text"
                id="email"
                className="bg-gray-50 py-3 px-4 mt-3 w-full text-gray-900 text-sm rounded-lg outline-none border-none"
                placeholder="Your Email"
                required
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
                  <Image src={assets.eye__icon} alt="" onClick={togglePasswordVisible} />
                </div>
                <input
                  type={showPassword ?'text' :"password"}
                  className="w-full bg-gray-50 rounded h-11 outline-none text-sm pl-4 mt-1 border-none"
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
              <Link href={`/ForgotPassword/ForgotPassword`} className="text-sm text-[#6B43FB] cursor-pointer hover:underline">
                Forgot Password
              </Link>
            </div>
            <button className="w-full h-14 rounded-lg text-white mt-4 bg-[#151247]">
              SUBMIT
            </button>
          </form>

          <div className="flex justify-center items-center w-full mt-20">
            <span>
              Create an Account
              <Link
                href={`/SignUp/SignUp`}
                className="text-[#6B43FB] hover:underline pl-2"
              >
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
