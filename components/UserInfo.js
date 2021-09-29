import React from "react";
import Image from "next/image";
import profilePic from "../public/userPhoto.jpg";

const UserInfo = () => {
  return (
    <div className="flex flex-row mx-4 my-2">
      <Image
        src={profilePic}
        alt="Picture of the author"
        placeholder="blur"
        placeholderstyle={{ rounded: "100%" }}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-col mx-auto my-auto">
        <h3 className="font-medium text-sm">Kenn Kibadi</h3>
        <p className="text-xs font-light">Software Engineer</p>
      </div>
    </div>
  );
};

export default UserInfo;
