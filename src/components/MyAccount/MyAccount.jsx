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
  const [sidenav, setsidenav] = useState(true);
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
            <p className="text-center 2xl:text-base xl:text-base md:text-base lg:text-base text-xs p-8">
              Welcome to your personal account page for our ecommerce store!
              Here, you have complete <br /> control over your shopping
              experience.
            </p>
          </div>
          <button className="2xl:hidden xl:hidden absolute right-2 top-3" onClick={() => setsidenav(!sidenav)}>
            <Image src={assets.menu__bar} alt="" className="w-6 h-6" />
          </button>
          <div className="2xl:flex xl:flex md:flex lg:flex block 2xl:justify-center xl:justify-center md:justify-center lg:justify-center gap-10 mt-10 w-full">
            {sidenav ?
            <div className="tabs__side 2xl:block xl:block md:block lg:block 2xl:relative xl:relative md:relative lg:relative absolute 2xl:top-0 2xl:left-0 xl:top-0 xl:left-0 md:top-0 md:left-0 lg:top-0 lg:left-0 top-0 bg-white z-20 left-0">
              <div className="max-w-sm 2xl:w-72 xl:w-72 md:w-12 lg:w-12 w-10 h-screen">
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
                            ? "flex 2xl:justify-start xl:justify-start justify-center items-center gap-2 cursor-pointer bg-[#5636C9] text-white p-3 2xl:px-8 xl:px-8 md:px-0 lg:px-0 w-full rounded-md"
                            : "flex 2xl:justify-start xl:justify-start justify-center  items-center w-full gap-2 cursor-pointer p-3 2xl:px-8 xl:px-8 md:px-0 lg:px-8 rounded-md"
                        }`}
                      >
                        <Image
                          src={items.icon}
                          alt=""
                          style={{ filter: state === index ? "invert(1)" : "none" }}
                        />

                        <span className="2xl:block xl:block hidden">
                        {items.title}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div> : null
            }
            <div className="tabs__side 2xl:p-0 xl:-0 md:p-0 lg:p-0 p-4">
              <div className="max-w-2xl 2xl:w-[980px] xl:w-[980px] md:w-[980px] lg:w-[980px] w-full">{tabs[state].content}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
