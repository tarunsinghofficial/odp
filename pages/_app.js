import "../styles/globals.css";
import Navbar from "../components/Navbar";
import MainComponent from "./MainComponent";
import Footer from "../components/Footer";
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps  }) {

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA('G-T6BF8XDL38'); // Replace with your actual Measurement ID
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4351046681656198"
     crossorigin="anonymous"></Script>
      <header>
        <Navbar />
      </header>
      <div className="mt-16 md:mt-18 lg:mt-[80px]">
        <Component {...pageProps}  />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}


export default MyApp;




