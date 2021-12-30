import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../Redux/store/store";
import { Global } from "../Utils/GlobalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Global />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
