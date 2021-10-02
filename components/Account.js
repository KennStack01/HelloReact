import React, { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "../public/userPhoto.jpg";
import { supabase } from "../utils/supabaseClient";
import UserOptions from "./UserOptions";

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () =>
      checkUser()
    );
    checkUser();
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
    console.log(user);
  }

  // console.log(user?.user_metadata?.avatar_url);
  // console.log(user?.user_metadata.user_name);
  const developer = {
    name: user?.user_metadata?.user_name,
    avatar: user?.user_metadata?.avatar_url || profilePic,
  };

  return (
    <div className="flex flex-row mx-4 my-2">
      <img
        src={developer.avatar}
        alt="avatar"
        width={50}
        height={50}
        placeholder="blur"
        className="rounded-full text-xs my-auto"
      />
      {/* <Image
        src={developer.avatar || profilePic}
        alt="Picture of the author"
        placeholder="blur"
        placeholderstyle={{ rounded: "100%" }}
        width={50}
        height={50}
        className="rounded-full"
      /> */}
      <div className="flex flex-col mx-auto my-auto">
        <h3 className="font-medium text-sm md:text-xs">{`@${developer.name}`}</h3>
        {/* <p className="text-xs font-light">Software Engineer</p> */}
      </div>
      <div className="my-auto">
        <UserOptions />
      </div>
    </div>
  );
};

export default UserInfo;
