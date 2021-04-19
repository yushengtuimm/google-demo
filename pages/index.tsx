import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Google from "../components/Google";
import Header from "../components/Header";
import Footer from "../components/Footer";

// const Canvas = dynamic(() => import("../components/Canvas/Canvas"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <Header />
      <Head>
        <title>Google-clone</title>
      </Head>

      <Google />
    </div>
  );
}
