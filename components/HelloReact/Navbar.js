import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row justify-between text-gray-700">
        <div className="mx-5 font-semibold">
          <Link href="/helloReact/Websites">
            <a>
              <h2>Websites</h2>
            </a>
          </Link>
        </div>
        <div className="mx-5 font-semibold">
          <Link href="/">
            <a>
              <h2>Docs</h2>
            </a>
          </Link>
        </div>
        <div className="mx-5 font-semibold">
          <Link href="/">
            <a>
              <h2>Articles</h2>
            </a>
          </Link>
        </div>
        <div className="mx-5 font-semibold">
          <Link href="/">
            <a>
              <h2>Videos</h2>
            </a>
          </Link>
        </div>
        <div className="mx-5 font-semibold">
          <Link href="/">
            <a>
              <h2>E-Books</h2>
            </a>
          </Link>
        </div>
      </div>
      {/* Search */}
      <div>Search</div>
    </div>
  );
};

export default Navbar;
