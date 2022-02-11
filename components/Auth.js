import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

export default function Auth() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="md:flex flex-row my-4 md:my-6 mx-auto p-4">
      <div className="items-center mx-auto justify-center rounded-lg py-5 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="my-3 text-center text-lg font-semibold text-gray-600">
            Get Access
          </h1>
          <div className="flex flex-col">
            {/* Github */}
            <button
              // onClick={handleLogin}
              className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg"
              style={{ background: "#211F1F" }}
            >
              <div className="flex flex-row text-white">
                <FaGithub className="my-auto text-3xl" />
                <h3 className=" text-md font-medium my-auto mx-2">
                  Login with Github{" "}
                  <span className="text-xs italic text-black bg-gray-300 px-1 rounded">
                    soon
                  </span>
                </h3>
              </div>
            </button>

            {/* Google */}
            <button className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg">
              <div className="flex flex-row ">
                <FcGoogle className="my-auto text-3xl" />
                <h3 className="text-gray-800 text-md font-medium my-auto mx-2">
                  Login with Google{" "}
                  <span className="text-xs italic text-black bg-gray-300 px-1 rounded">
                    soon
                  </span>
                </h3>
              </div>
            </button>

            {/* Twitter */}
            <button
              className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg"
              style={{ background: "#1DA1F2" }}
            >
              <div className="flex flex-row text-white ">
                <FaTwitter className="my-auto text-3xl" />
                <h3 className="text-md font-medium my-auto mx-2">
                  Login with Twitter{" "}
                  <span className="text-xs italic text-black bg-gray-300 px-1 rounded">
                    soon
                  </span>
                </h3>
              </div>
            </button>

            <a
              href="https://twitter.com/KennKibadi"
              target="__blank"
              className="flex flex-row my-6 mx-auto text-center text-lg font-medium hover:underline text-gray-600"
            >
              <div className="text-xl md:text-2xl">
                <IoLogoTwitter />
              </div>
              <h1 className="text-xs my-auto font-medium lg:text-sm">
                @KennKibadi
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
