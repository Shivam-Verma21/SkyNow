// import React from "react";
import { Link } from "react-router";
import CitySearch from "./CitySearch";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/context/theme-provider";
import { Github } from "lucide-react";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-3 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to={"/"}>
          {/* <img src="/logo.png" alt="SkyNow" className="h-20 rounded-full" /> */}
          <img
            src={theme === "dark" ? "/dark-logo.png" : "/light-logo.png"}
            alt="SkyNow Logo"
            className="h-20 rounded-full"
          />
        </Link>

        <div className="flex sm:gap-5 gap-2 items-center">
          <CitySearch />

          <div
            title="Go to SkyNow github"
            className="h-6 w-6 hover:scale-120 ease-in-out duration-200"
          >
            <Link
              to={"https://github.com/Shivam-Verma21/SkyNow"}
              target="_blank"
            >
              <Github />
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
