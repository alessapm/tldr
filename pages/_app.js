import "../styles/globals.css";
import { Navbar } from "../components/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
