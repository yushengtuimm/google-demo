import "../styles/globals.css";
import { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
