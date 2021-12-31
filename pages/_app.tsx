import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import store from "../Redux/store/store";
import { Global } from "../Utils/GlobalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Global />
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
