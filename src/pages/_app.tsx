// Import necessary modules
// import "@/styles/globals.css";
import "@/styles/webCSS.css";


import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

import {Poppins} from '@next/font/google'

const poppins = Poppins({
  subsets:['latin'],
  weight:'300'
})

export default function App({ Component, pageProps }: AppProps) {




  return (<>

  <Head>
    <title>Price Tracker</title>
    <meta name="description" content="Track prices effortlessly, save money smartly, with real-time notifications " />
  </Head>
  <main className={poppins.className}>
  <div>
      <Navbar/> 
      <Component {...pageProps} /> 

       
    </div>

  </main>
    
  </>

  );
}
