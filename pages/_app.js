import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

import Layout from "../components/Layout/Layout";

import "../styles/external.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>

        <Component {...pageProps} />;
        <Analytics />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
