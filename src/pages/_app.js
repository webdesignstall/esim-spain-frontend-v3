import "@/styles/globals.css";
import AppProvider from "../contexts";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
