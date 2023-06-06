import {useState} from "react"
import assets from "@/assets";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import OrderDetails from "./Tabs/OrderDetails/OrderDetails";
import Download from "./Tabs/Download/Download";
import Address from "./Tabs/Address/Address";
import PaymentMethod from "./Tabs/PaymentMethod/PaymentMethod";
import AccountSettings from "./Tabs/AccountSettings/AccountSettings";

const tabs = [
  {
    id: 1,
    icon: <Image src={assets.dash__icon} alt="" />,
    title: "Dashboard",
   
  },
  {
    id: 2,
    icon: <Image src={assets.orders__icon} alt="" />,
    title: "Orders",
    content: <OrderDetails />
  },
  {
    id: 3,
    icon: <Image src={assets.downloadIcon} alt="" />,
    title: "Download",
    content: <Download />
  },
  {
    id: 4,
    icon: <Image src={assets.location__icon} alt="" />,
    title: "Address",
    content: <Address />
  },
  {
    id: 5,
    icon: <Image src={assets.wallet__icon} alt="" />,
    title: "Payment Method",
    content: <PaymentMethod />
  },
  {
    id: 6,
    icon: <Image src={assets.user__icon} alt="" />,
    title: "Account Setting",
    content: <AccountSettings />
  },
  {
    id: 7,
    icon: <Image src={assets.logout__icon} alt="" />,
    title: "Logout",
  },
];

export default function MyAccount() {
    const [state, setstate] = useState(1);


    const handleTabClick = (index) => {
        setstate(index);
    }

 
  return (
    <>
      <Head>
        <title>My Account | NFT Factory</title>
      </Head>

      <section className="container mx-auto pt-10">
        <div className="flex justify-center">
          <div className="w-52 h-14 bg-white shadow rounded-full">
            <div className="flex justify-center items-center h-full">
              <Image src={assets.person__image} alt="" />
              <span className="font-bold text-[#5636C9] tracking-wider uppercase">
                My Account
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <h1 className="2xl:text-2xl xl:text-4xl font-[900] tracking-wider text-[#5636C9]">
            My Account
          </h1>
        </div>

        <div className="flex justify-center pt-3">
          <p className="text-center">
            Welcome to your personal account page for our ecommerce store! Here,
            you have complete <br /> control over your shopping experience.
          </p>
        </div>

        <div className="flex justify-center gap-10 mt-10 max-w-screen-2xl">
          <div className="tabs__side">
            <div className="max-w-sm w-72 h-20">
              {tabs.map((items, index) => {
                return (
                  <div key={index}>
                    <button onClick={() => handleTabClick(index)} className={`${state === index ? 'flex items-center gap-2 cursor-pointer bg-[#5636C9] text-white p-3 px-8 w-full rounded-md' : "flex items-center w-full gap-2 cursor-pointer p-3 px-8 rounded-md" }`}>
                      {items.icon}
                      {items.title}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tabs__side">
            <div className="max-w-2xl w-[980px] h-20">
                {tabs[state].content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
