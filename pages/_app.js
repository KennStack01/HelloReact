import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/global.css";
import { supabase } from "../utils/supabaseClient";

function MyApp({ Component, pageProps }) {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(async () =>
  //     checkUser()
  //   );
  //   checkUser();
  //   return () => {
  //     authListener?.unsubscribe();
  //   };
  // }, []);

  // async function checkUser() {
  //   const user = supabase.auth.user();
  //   setUser(user);
  // }

  // console.log(user?.user_metadata);

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
