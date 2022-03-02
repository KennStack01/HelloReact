import Head from "next/head";
import TabsRender from "../components/HelloReactLayer/Tabs";

export default function ThankYou() {
  return (
    <div className="flex flex-col justify-center min-h-screen py-2 md:mx-4">
      <Head>
        <title>Thank You | HelloReact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1 md:px-20 text-center">
        <div className="flex flex-row mx-auto my-auto md:my-20 text-center text-helloblue-700 text-2xl font-semibold justify-between">
          Thanks for Submitting! <br/>
          See you very soon ⌚🤙
        </div>
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t"></footer> */}
    </div>
  );
}
