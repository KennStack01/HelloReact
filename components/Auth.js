import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Auth() {
  const [loading, setLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    if (!isLoggedIn) {
      loginWithGithub();
    } else {
      logout();
      setIsLoggedIn(false);
    }
  };

  const loginWithGithub = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      // Provider can be 'github', 'twitter', 'google', 'facebook', 'bitbucket' or 'apple'
      provider: "github",
    });

    await console.log("User Info", user);
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  return (
    <div className="md:flex flex-row my-4 md:my-6 mx-auto p-4">
      <div className="items-center mx-auto justify-center rounded-lg py-5 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="my-3 text-center text-lg font-semibold text-gray-600">
            Login
          </h1>
          <div className="flex flex-col">
            {/* Github */}
            <button
              onClick={handleLogin}
              className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg"
              style={{ background: "#211F1F" }}
            >
              <div className="flex flex-row text-white">
                <FaGithub className="my-auto text-3xl" />
                <h3 className=" text-md font-medium my-auto mx-2">
                  Login with Github
                </h3>
              </div>
            </button>
            {/* Google */}
            <button className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg">
              <div className="flex flex-row ">
                <FcGoogle className="my-auto text-3xl" />
                <h3 className="text-gray-800 text-md font-medium my-auto mx-2">
                  Login with Google
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
                  Login with Twitter
                </h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
