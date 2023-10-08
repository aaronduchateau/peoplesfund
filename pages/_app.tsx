import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
import { Chain, Network } from 'mintbase'

import { getClient } from "../services/providers/apollo";
import { MenuProvider } from "../services/providers/MenuProvider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import PageLoader from "../containers/Marketplace/components/PageLoader";




function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(false));
    router.events.on("routeChangeComplete", (e) => setTimeout(() => {setLoading(true)}, 3000));

  }, [router.events]);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  
  const mjsKey = process.env.NEXT_PUBLIC_MBJS_KEY || "";
  return (
    <ThemeProvider theme={darkTheme}>
        <MenuProvider>
        <Head>
          <title>Tree Builder</title>
          <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" key="custom-sheet"/>
          <link href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.3.0/mapbox-gl-draw.css" rel="stylesheet" key="custom-sheet-2"/>
          <link href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" rel="stylesheet" key="custom-sheet-3"/>
        </Head>
          {loading ? (<Component {...pageProps} />) : <PageLoader />}
        </MenuProvider>
    </ThemeProvider>
  );
}

export default MyApp;
