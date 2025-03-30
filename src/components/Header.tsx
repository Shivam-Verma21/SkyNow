// import React from "react";
import { Link } from "react-router";
import CitySearch from "./CitySearch";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-3 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to={"/"}>
          <img src="/logo.png" alt="SkyNow" className="h-20 rounded-full" />
        </Link>

        <div className="flex gap-4 items-center">
          <CitySearch />

          {/* <div
            title="Go to SkyNow github"
            className="h-6 w-6 hover:scale-120 ease-in-out duration-200"
          >
            <Link
              to={"https://github.com/Shivam-Verma21/SkyNow"}
              target="_blank"
            >
              <Github />
            </Link>
          </div> */}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
