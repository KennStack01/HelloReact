import React from "react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Website = ({ WebsiteURL }) => {
  return (
    <div className="md:mx-2 mx-auto my-3">
      <LinkPreview
        url={WebsiteURL}
        width="250px"
        height="300px"
        className="text-sm font-medium hover:border hover:border-l-2 shadow-sm hover:shadow-lg hover:border-red-400"
      />
    </div>
  );
};

export default Website;
