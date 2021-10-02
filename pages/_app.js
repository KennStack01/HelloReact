import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>HelloReact👋</title>
        <meta
          name="Description"
          content="Get all the Resources you need for your React js Journey! Happy React Coding!"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
