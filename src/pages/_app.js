import "@/styles/globals.css";
import AppProvider from "../contexts";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>;
}
