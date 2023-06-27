import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "../components/navbar";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <Navbar />
        <AnimatePresence  mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
