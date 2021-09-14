import Head from "next/head";
import Navbar from "../components/HelloReact/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen py-2 md:mx-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"></main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t"></footer> */}
    </div>
  );
}
