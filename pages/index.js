import Head from "next/head";
import TabsRender from "../components/HelloReactLayer/Tabs";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen py-2 md:mx-4">
      <Head>
        <title>Welcome | HelloReact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1 md:px-20 text-center">
        {/* Tab and Search */}
        <div className="flex flex-row justify-between">
          <TabsRender />
        </div>
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t"></footer> */}
    </div>
  );
}
