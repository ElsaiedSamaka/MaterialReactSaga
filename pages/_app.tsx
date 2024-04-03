import "@fontsource/inter";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { CssVarsProvider, StyledEngineProvider,ThemeProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

function MyApp({ Component, pageProps }: AppProps) {
  // If page layout is available, use it. Else return the page
  const getLayout = (Component as any).getLayout || ((page: any) => page);
  // if it does we call it with the page and if it not then we return the page as it is
  return (
    <StyledEngineProvider>
      <ThemeProvider>
        <CssVarsProvider>
          <CssBaseline />

          {/* <Layout> */}
          {getLayout(<Component {...pageProps} />)}

          {/* </Layout> */}
        </CssVarsProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
