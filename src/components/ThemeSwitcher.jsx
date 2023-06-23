import { useState,useEffect } from "react";
import { BsMoonFill} from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(null);

  

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitcher = () => {
    setTheme(theme === "dark" ? "Light" : "dark");
  }
  return (
    <button
            onClick={handleThemeSwitcher}
            id="dark-toggle"
            className="border-0 bg-transparent cursor-pointer transition-all duration-500 ml-5 "
          >
            <div className="hidden dark:flex   ">
              <BsSunFill size="26" color="black" />
            </div>
            <div className="dark:hidden flex">
              <BsMoonFill size="22" color="black" />
            </div>
          </button>
  )
}

export default ThemeSwitcher