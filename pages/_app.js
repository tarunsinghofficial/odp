import "../styles/globals.css";
import Navbar from "../components/Navbar";
import MainComponent from "./MainComponent";
import Footer from "../components/Footer";
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA('G-T6BF8XDL38'); // Replace with your actual Measurement ID
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;




