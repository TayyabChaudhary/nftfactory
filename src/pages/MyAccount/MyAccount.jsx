import Head from "next/head";
import MyAccounts from "@/components/MyAccount/MyAccount";

export default function MyAccount() {

  return (
    <>
      <Head>
        <title>My Account | NFT Factory</title>
      </Head>

    <MyAccounts />
    </>
  );
}
