import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { GoSettings } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiCodeCurly } from "react-icons/bi";

import { Dialog, Transition } from "@headlessui/react";

import Developer from "./Developer";

const Sidebar = () => {
  const [isSideBarHidden, setSideBarHidden] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {isSideBarHidden && (
        <div
          className={`flex flex-col justify-between text-white bg-hellosidebarblue-500 w-3/5 md:w-1/6 lg:w-0.5/6 h-screen max-h-screen md:sticky fixed z-40 md:z-0 left-0 bottom-0 top-0 transition-all duration-300 ease-linear`}
        >
          {/* user info, this shows based on User Auth */}
          <div>
            <div>
              {/* <div className="fixed inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={openModal}
                  className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  Open dialog
                </button>
              </div> */}

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
                        <Developer />
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>

            <div onClick={openModal}>
              <div className="flex flex-row justify-center font-medium text-md mx-7 my-2 hover:shadow p-3 hover:bg-hellosidebarblue-400 rounded cursor-pointer">
                <h2 className="mx-2">The Builder</h2>
                <div className="my-auto text-2xl">
                  <BiCodeCurly />
                </div>
              </div>
            </div>
          </div>
          <div className="my-auto">
            <div className="px-2 mx-1 my-auto">
              <Navbar />
            </div>
            <div
              onClick={() => setSideBarHidden(false)}
              className="absolute bg-hellosidebarblue-400 hover:bg-hellosidebarblue-500 shadow-md text-3xl px-3 py-2 ml-52 md:ml-48 -mt-56 rounded cursor-pointer"
            >
              <IoIosArrowBack />
            </div>
          </div>
        </div>
      )}

      {!isSideBarHidden && (
        <div
          onClick={() => setSideBarHidden(true)}
          className="fixed z-50 top-60 left-0 text-white bg-hellosidebarblue-400 hover:bg-hellosidebarblue-500 shadow-md text-3xl px-3 py-2 rounded-r cursor-pointer"
        >
          <IoIosArrowForward />
        </div>
      )}
    </>
  );
};

export default Sidebar;
