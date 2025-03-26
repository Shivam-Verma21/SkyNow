// import React from "react";
import { Link } from "react-router";
import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-3 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to={"/"}>
          <img src="/logo.png" alt="SkyNow" className="h-20 rounded-full" />
        </Link>

        <div>
          {/* search */}
          
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500 
              ${isDark ? "rotate-180" : "rotate-0"}`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
