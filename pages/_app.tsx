import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Global } from "utils/GlobalStyles";
import { PersistGate } from "redux-persist/integration/react";
import store from "../Redux/store/store";
import * as _ from "styled-components/cssprop";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Global />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
