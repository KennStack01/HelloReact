import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import TabsRender from "../../components/ReactNewsLayer/Tabs";
import Form from "../../components/Sponsors/Form";
import { Dialog, Transition } from "@headlessui/react";

export default function Sponsors() {
  const [isSideBarHidden, setSideBarHidden] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);

  function closeModal() {
    setIsOpen(false);
    setSideBarHidden(false);
  }

  function openModal() {
    setIsOpen(true);
    setSideBarHidden(true);
  }

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
        <title>Sponsors | HelloReact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1 md:px-10 xl:px-48 text-center">
        {isSideBarHidden && (
          <div>
            <div>
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 z-50 overflow-y-auto"
                  onClose={closeModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-sm" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="inline-block z-50 w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl">
                        <Form />
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
        )}
        <div className="flex flex-col mx-2">
          <h2 className="my-5 text-xl md:text-2xl bg-helloblue-500 text-white p-3 rounded-sm font-semibold">
            OUR SPONSORS
          </h2>

          <div className="flex flex-col">
            <div className="flex flex-col bg-white p-4">
              <h2 className="my-5 text-xl text-helloblue-500 font-semibold">
                Top 3 Sponsors 😍🎉
              </h2>
              <div>List here</div>
              <div
                onClick={openModal}
                className="my-5 mx-auto font-medium bg-helloblue-500 text-white text-sm p-2 rounded-sm hover:bg-helloblue-600 hover:cursor-pointer"
              >
                Become a Sponsor
              </div>
            </div>
            <div className="flex flex-col bg-white p-4 mt-5">
              <h2 className="my-5 text-xl text-helloblue-700 font-semibold">
                Last Week Sponsors🎉
              </h2>

              <div>List here</div>
              <div
                onClick={openModal}
                className="my-5 mx-auto font-medium bg-helloblue-500 text-white text-sm p-2 rounded-sm hover:bg-helloblue-600 hover:cursor-pointer"
              >
                Claim your spot
              </div>
            </div>
            <div className="flex flex-col bg-white p-4 mt-5">
              <h2 className="my-5 text-xl text-helloblue-700 font-semibold">
                Last Month Sponsors🎉
              </h2>
              <div>List here</div>
              <div
                onClick={openModal}
                className="mt-5 mx-auto font-medium bg-helloblue-500 text-white text-sm p-2 rounded-sm hover:bg-helloblue-600 hover:cursor-pointer"
              >
                Claim your spot
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white p-4 mt-5">
            <h2 className="my-5 text-xl text-helloblue-700 font-semibold">
              Lifetime🎉
            </h2>
            <div>List here</div>
            <div
              onClick={openModal}
              className="mt-5 mx-auto font-medium bg-helloblue-500 text-white text-sm p-2 rounded-sm hover:bg-helloblue-600 hover:cursor-pointer"
            >
              Claim your spot
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
