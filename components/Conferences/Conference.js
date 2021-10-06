import React from "react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Conference = ({ conferenceURL }) => {
  return (
    <div className="md:mx-2 mx-auto my-3">
      <LinkPreview
        url={conferenceURL}
        // width="250px"
        height="300px"
        className="text-sm w-6/7 font-medium hover:border hover:border-l-2 shadow-sm hover:shadow-lg hover:border-red-400"
      />
    </div>
  );
};

export default Conference;
