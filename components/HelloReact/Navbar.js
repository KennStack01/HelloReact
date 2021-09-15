import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="">
        <div className="mx-5 font-semibold">
          <Link href="/helloReact/Websites">
            <a>
              <h2>Websites</h2>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
