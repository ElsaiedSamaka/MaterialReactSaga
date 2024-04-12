import "@fontsource/inter";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssVarsProvider, StyledEngineProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor  } from "../core/store/configureStore";
import { ThemeProvider, createTheme } from "@mui/material";

// Create a theme instance
const theme = createTheme({
  zIndex: {
    drawer: 1200, // Example value
  },
  // Other theme configurations...
});

function MyApp({ Component, pageProps }: AppProps) {
  // If page layout is available, use it. Else return the page
  const getLayout = (Component as any).getLayout || ((page: any) => page);
  // if it does we call it with the page and if it not then we return the page as it is
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssVarsProvider>
          <CssBaseline />
          <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            {/* <Layout> */}
            {getLayout(<Component {...pageProps} />)}
            {/* </Layout> */}
          </Provider>
          </PersistGate>
        </CssVarsProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
