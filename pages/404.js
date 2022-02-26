import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import TabsRender from "../components/ReactNewsLayer/Tabs";

export default function NotFound() {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;

      formData[field.name] = field.value;
    });

    fetch("api/feature", {
      method: "post",
      body: JSON.stringify(formData),
    });
    // console.log(formData)
  }

  return (
    <div className="flex flex-col justify-center min-h-screen py-2 md:mx-4">
      <Head>
        <title>Not Found | HelloReact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1 md:px-20 xl:px-96 text-center">
         <h2 className="my-5 text-xl md:text-2xl bg-helloblue-500 text-white p-3 rounded-sm font-semibold">
            Not Found, my Friend 😃
          </h2>

          <Link href="/sponsors">
            <a className="p-2 text-white bg-gray-700 mx-auto"> Go Back </a>
          </Link>

      </main>
    </div>
  );
}
