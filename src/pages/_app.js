import "@/styles/globals.css";
import AppProvider from "../contexts";

// export default function App({ Component, pageProps }) {
//   const getLayout = Component.getLayout ?? ((page) => page);
//   return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>;
// }

import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import API from "@/apis/API";
import { Fragment, useEffect, useState } from "react";
import {
  AppStateContext,
  loadStateContext,
  saveStateContext,
} from "@/common/context/app/app-context";
import { isEmpty } from "lodash";
import { wrapper } from "@/store/store";
import { CONFIG } from "@/configuration/AppConfig";
import LoadMetaComponent from "../components/containers/app/LoadMetaComponent";
import InitComponent from "../components/containers/app/content/InitComponent";

const initialOptions = {
  "client-id": CONFIG.PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
  // "data-client-token": "EIRtY98U_vi2XBwZJxGU9n4-f0cu-xOqVaTjsqwouFCJAsh9lgQoySt1BNMRX-hdGUOE3h0ftHoxz_ex",
};

function App({ Component, pageProps }) {
  const Layout = Component.Layout;
  const [metaData, setMetaData] = useState([]);
  const [userCart, setUserCart] = useState({});
  const [activeOrder, setActiveOrder] = useState({});
  const [openSelectCountry, setOpenSelectCountry] = useState({});

  useEffect(() => {
    const preloader = document.querySelector(".site-preloader");

    if (!preloader) {
      return;
    }

    setTimeout(() => {
      const onTransitionEnd = (event) => {
        if (
          event instanceof TransitionEvent &&
          event.propertyName === "opacity" &&
          preloader.parentNode
        ) {
          preloader.parentNode.removeChild(preloader);
        }
      };

      preloader.addEventListener("transitionend", onTransitionEnd);
      preloader.classList.add("site-preloader__fade");

      if (getComputedStyle(preloader).opacity === "0" && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }, 100);
  }, []);

  useEffect(() => {
    const appStateContext = loadStateContext();
    if (appStateContext && !isEmpty(appStateContext?.cart)) {
      setUserCart({ ...(appStateContext?.cart ?? {}) });
    }
  }, []);

  useEffect(() => {
    const appStateContext = loadStateContext();
    saveStateContext({ ...appStateContext, cart: userCart });
  }, [userCart]);

  const renderMainContent = () => {
    const getLayout = Component.getLayout;

    const content = (
      <Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    );
    if (getLayout) {
      return getLayout(content);
    }

    return (
      //@ts-ignore
      <Layout>{content}</Layout>
    );
  };

  return (
    <SessionProvider session={pageProps?.session}>
      <PayPalScriptProvider options={initialOptions}>
        <ApolloProvider client={API.instance}>
          <AppProvider>
            <AppStateContext.Provider
              value={{
                metaData,
                setMetaData,
                userCart,
                setUserCart,
                activeOrder,
                setActiveOrder,
                openSelectCountry,
                setOpenSelectCountry,
              }}
            >
              <LoadMetaComponent />
              <InitComponent />
              {renderMainContent()}
            </AppStateContext.Provider>
          </AppProvider>
        </ApolloProvider>
      </PayPalScriptProvider>
    </SessionProvider>
  );
}

export default wrapper.withRedux(App);
