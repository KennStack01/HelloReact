import React, {useState} from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import Layout from "../../components/layout";
import TabsRender from "../../components/ReactNewsLayer/Tabs";
// import ReCAPTCHA from 'react-google-recaptcha';



export default function Feature() {


  //  function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     "service_djz3wgw",
  //     "template_y0zb5bp",
  //     e.target,
  //     // process.env.RECAPTCHA_SECRET_KEY,
  //     "jqaJtakdakuKIY052"
  //   ).then(res=>{
  //       console.log(res);
  //   }).catch(err=> console.log(err));
  // }

  // async function handleOnSubmit(e) {
  //   e.preventDefault();

  //   const formData = {};

  //   Array.from(e.currentTarget.elements).forEach((field) => {
  //     if (!field.name) return;

  //     formData[field.name] = field.value;
  //   });

  //   fetch("api/feature", {
  //     method: "post",
  //     body: JSON.stringify(formData),
  //   });
  //   // console.log(formData)
  // }

  return (
    <div className="flex flex-col justify-center min-h-screen py-2 md:mx-4">
      <Head>
        <title>Add Resource | HelloReact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1 md:px-20 xl:px-96 text-center">
        <div className="flex flex-col mx-2 md:mx-10">
          <h2 className="my-5 text-2xl text-helloblue-700 font-semibold">
            New Resource
          </h2>
          <div className="mt-5 md:mt-0 ">
            {/* <form onSubmit={sendEmail}> */}
            <form action="https://formsubmit.co/560d47194bcb65da44c8f2387e83989b" method="POST">
              <div className="flex flex-col mx-4 md:mx-10 text-left shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="flex flex-col">
                  <input type="hidden" name="_subject" value="New Resource!" />
                  <input type="hidden" name="_next" value="https://helloreact-beta.vercel.app/thankyou" />
                    <div className="my-2">
                      <label
                        htmlFor="Category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <select
                        id="Category"
                        name="Category"
                        autoComplete="category"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Blog</option>
                        <option>Youtube Channel</option>
                        <option>E-Book</option>
                        <option>Conference</option>
                        <option>Website</option>
                      </select>
                    </div>
                    <div className="">
                      <label
                        htmlFor="Name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="Name"
                        id="Name"
                        autoComplete="given-name"
                        required
                        className="mt-1 focus:ring-helloblue-500 focus:border-helloblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="my-2">
                      <label
                        htmlFor="Email Address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        name="Email Address"
                        id="email-address"
                        autoComplete="email"
                        required
                        className="mt-1 focus:ring-helloblue-500 focus:border-helloblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="">
                      <label
                        htmlFor="URL"
                        className="block text-sm font-medium text-gray-700"
                      >
                        URL Address
                      </label>
                      <input
                        type="text"
                        name="URL"
                        id="URL"
                        autoComplete="given-url"
                        required
                        className="mt-1 focus:ring-helloblue-500 focus:border-helloblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-helloblue-600 hover:bg-helloblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-helloblue-500"
                  >
                    Add Resource
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
