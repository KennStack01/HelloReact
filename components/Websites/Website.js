import React from "react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Website = ({ WebsiteURL }) => {
  return (
    <div className="mb-4 md:mb-6">
      <LinkPreview
        url={WebsiteURL}
        width="300px"
        className="text-sm font-medium"
      />
    </div>
  );
};

export default Website;
