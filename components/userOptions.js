import React, { Fragment } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { supabase } from "../utils/supabaseClient";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const logout = async () => {
  const { error } = await supabase.auth.signOut();

  console.log("User logged out!");
};

const UserOptions = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full p-1 text-sm font-medium text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <BsThreeDotsVertical className="mx-auto" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-helloblue-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <FaUserEdit className="w-5 h-5 mr-2" aria-hidden="true" />
                  ) : (
                    <FaUserEdit className="w-5 h-5 mr-2" aria-hidden="true" />
                  )}
                  Edit Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logout}
                  className={`${
                    active ? "bg-helloblue-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <HiOutlineLogout
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  ) : (
                    <HiOutlineLogout
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  )}
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserOptions;
