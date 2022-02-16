import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

export default function Developer() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="md:flex flex-row my-4 md:my-6 mx-auto p-4">
      <div className="items-center mx-auto justify-center rounded-lg py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-center">
          {/* <div>
            <img
              src="https://avatars.githubusercontent.com/u/67477516?v=4"
              alt="Developer Profile Picture"
              className="rounded-full "
            />
          </div> */}
          <div className="flex flex-col justify-center mx-3">
            <h1 className="my-3 text-lg text-center font-semibold text-gray-700">
              Kenn Kibadi <br />
              HelloReact Developer 👋
            </h1>
          </div>
        </div>
        <div className="mx-auto flex flex-col my-2">
          <h4 className="text-sm text-center italic">Contact me at anytime</h4>

          <a
            href="https://twitter.com/KennKibadi"
            target="__blank"
            className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-1 rounded-lg"
            style={{ background: "#1DA1F2" }}
          >
            <div className="flex flex-row text-white ">
              <FaTwitter className="my-auto text-3xl" />
              <h3 className="text-md font-medium my-auto mx-2">
                follow on twitter{" "}
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
