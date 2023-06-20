import "../styles/globals.css";
import Navbar from "../components/Navbar";
import MainComponent from "./MainComponent";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
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




