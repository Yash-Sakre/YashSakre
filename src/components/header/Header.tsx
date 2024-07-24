import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import LightLogo from "../../assets/logo.svg";
import DarkLogo from "../../assets/logo.png";
import { ModeToggle } from "../mode-toggle";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../ui/button";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const menuItems = [
    { label: "Home", to: "/#main" },
    { label: "About", to: "/#about" },
    { label: "Projects", to: "/#projects" },
    { label: "Contact", to: "/#contact" },
  ];

  const { theme } = useTheme();

  return (
    <nav className="fixed top-0 z-20 w-[85%]  backdrop-blur-lg">
      <div className="flex flex-wrap items-center justify-between p-4 max-w-screen ">
        <a
          href="./"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={theme === "dark" ? LightLogo : DarkLogo}
            alt=""
            className="w-14 "
          />
        </a>
        <div className="flex gap-2 md:order-2 rtl:space-x-reverse">
          <ModeToggle />

          <Button
            variant="ghost"
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 "
            aria-controls="navbar-sticky"
            aria-expanded={nav ? "true" : "false"}
            onClick={handleClick}
          >
            <span className="sr-only">Open main menu</span>
            {nav ? (
              <RxCross2 className="w-5 h-5 text-foreground" />
            ) : (
              <CiMenuFries className="w-5 h-5 text-foreground" />
            )}
          </Button>
        </div>
        <div
          className={`${
            nav ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1 md:border border-0 border-foreground/20 px-3 py-2 rounded-full `}
          id="navbar-sticky"
        >
          <ul className="flex flex-col justify-center w-full gap-2 py-2 mt-4 font-medium border rounded-lg border-foreground/20 md:p-0 bg-background md:bg-transparent rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:justify-start">
            {menuItems.map((item) => (
              <li key={item.label} className="px-2 md:p-0">
                <a
                  href={item.to}
                  className="block px-3 py-2 border rounded-lg border-foreground/20 md:rounded-full hover:bg-foreground hover:text-background md:border-none "
                  onClick={handleClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
