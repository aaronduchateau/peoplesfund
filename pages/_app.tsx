import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Chain, Network } from 'mintbase'
import { ApolloProvider } from "@apollo/client";
import { getClient } from "../services/providers/apollo";
import { WalletProvider } from "../services/providers/WalletProvider";
import { MenuProvider } from "../services/providers/MenuProvider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import PageLoader from "../containers/Marketplace/components/PageLoader";




function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(false));
    router.events.on("routeChangeComplete", (e) => setTimeout(() => {setLoading(true)}, 3000));

  }, [router.events]);

  
  const mjsKey = process.env.NEXT_PUBLIC_MBJS_KEY || "";
  return (
    <WalletProvider
      network={Network.testnet as Network}
      chain={Chain.near as Chain}
      apiKey={mjsKey}
    >
      <ApolloProvider client={getClient({ network: Network.testnet })}>
        <MenuProvider>
          {loading ? (<Component {...pageProps} />) : <PageLoader />}
        </MenuProvider>
      </ApolloProvider>
    </WalletProvider>
  );
}

export default MyApp;
