import { useState } from "react";
import assets from "@/assets";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import OrderDetails from "./Tabs/OrderDetails/OrderDetails";
import Download from "./Tabs/Download/Download";
import Address from "./Tabs/Address/Address";
import PaymentMethod from "./Tabs/PaymentMethod/PaymentMethod";
import AccountSettings from "./Tabs/AccountSettings/AccountSettings";

export default function MyAccount() {
  const [state, setstate] = useState(1);

  const handleTabClick = (index) => {
    setstate(index);
  };

  /* ================== Sidebar Data In Array Of List =============== */
  const tabs = [
    {
      id: 1,
      icon: assets.dash__icon,
      title: "Dashboard",
    },
    {
      id: 2,
      icon: assets.orders__icon,
      title: "Orders",
      content: <OrderDetails />,
    },
    {
      id: 3,
      icon: assets.downloadIcon,
      title: "Download",
      content: <Download />,
    },
    {
      id: 4,
      icon: assets.location__icon,
      title: "Address",
      content: <Address />,
    },
    {
      id: 5,
      icon: assets.wallet__icon,
      title: "Payment Method",
      content: <PaymentMethod />,
    },
    {
      id: 6,
      icon: assets.user__icon,
      title: "Account Setting",
      content: <AccountSettings />,
    },
    {
      id: 7,
      icon: assets.logout__icon,
      title: "Logout",
    },
  ];

  return (
    <>
      <Head>
        <title>My Account | NFT Factory</title>
      </Head>

      <section className="pt-10 w-[calc(100vw-20px)] flex justify-center">
        <div className="container">
          <div className="flex justify-center w-full">
            <div className="w-52 h-14 bg-white shadow rounded-full">
              <div className="flex justify-center items-center h-full">
                <Image src={assets.person__image} alt="" />
                <span className="font-bold text-[#5636C9] tracking-wider uppercase">
                  My Account
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-3">
            <p className="text-center">
              Welcome to your personal account page for our ecommerce store!
              Here, you have complete <br /> control over your shopping
              experience.
            </p>
          </div>

          <div className="flex justify-center gap-10 mt-10 max-w-screen-2xl">
            <div className="tabs__side">
              <div className="max-w-sm w-72 h-20">
                {tabs.map((items, index) => {
                  const isAddClassElement = index === 6;
                  const classNames = isAddClassElement
                    ? "text-[#F23939] cursor-pointer"
                    : null;
                  return (
                    <div key={index} className={classNames}>
                      <button
                        onClick={() => handleTabClick(index)}
                        className={`${
                          state === index
                            ? "flex items-center gap-2 cursor-pointer bg-[#5636C9] text-white p-3 px-8 w-full rounded-md"
                            : "flex items-center w-full gap-2 cursor-pointer p-3 px-8 rounded-md"
                        }`}
                      >
                        <Image
                          src={items.icon}
                          alt=""
                          style={{ filter: state === index ? "invert(1)" : "none" }}
                        />

                        {items.title}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="tabs__side">
              <div className="max-w-2xl w-[980px]">{tabs[state].content}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
