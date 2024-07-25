import { Switch } from "@headlessui/react";
import { useState } from "react";

import classname from "classnames";

//classnames bir kütüphane
interface BarProps {
  //buttonun bütün elemanlarını al (onclick vb)
  variant:
    | "discovery"
    | "toprated"
    | "comming-soon"
    | "recent-played"
    | "download"
    | "settings";
}
function HomeBar({ variant }: BarProps) {
  const [darkMode, setDarkMode] = useState(false);

  localStorage.setItem("darkMode", "");

  const toogleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="dark:bg-dark-smooth h-screen bg-grayscale-10">
      <ul className="flex gap-5 flex-col font-bold w-75">
        <li className="text-grayscale-60 uppercase pt-10 pl-10">Menu</li>
        <li
          className={classname("flex-row flex text-grayscale-70 gap-3 pl-10", {
            "border-l-4": variant == "discovery",
            "text-black": variant == "discovery",
            "dark:text-white": variant == "discovery",
            "border-main-primary": variant == "discovery",
            "pl-9": variant == "discovery",
          })}
        >
          <img src={"./assets/discover.png"} />
          Discovery
        </li>
        <li
          className={classname("flex-row flex gap-3 pl-10", {
            "border-l-4": variant == "toprated",
            "text-black": variant == "toprated",
            "dark:text-white": variant == "toprated",
            "border-main-primary": variant == "toprated",
            "pl-9": variant == "toprated",
          })}
        >
          <img src={"./assets/star.png"} />
          Top Rated
        </li>
        <li
          className={classname("flex-row flex text-grayscale-70 gap-3 pl-10", {
            "border-l-4": variant == "comming-soon",
            "text-white": variant == "comming-soon",
            "dark:text-black": variant == "comming-soon",
            "border-main-primary": variant == "comming-soon",
            "pl-9": variant == "comming-soon",
          })}
        >
          <img src={"./assets/timer.png"} />
          Coming Soon
        </li>
      </ul>
      <ul className="flex gap-5 flex-col font-bold">
        <li className="text-grayscale-60 uppercase pt-10 pl-10">library</li>
        <li
          className={classname("flex-row flex text-grayscale-70 gap-3 pl-10", {
            "border-l-4": variant == "recent-played",
            "text-white": variant == "recent-played",
            "dark:text-black": variant == "recent-played",
            "border-main-primary": variant == "recent-played",
            "pl-9": variant == "recent-played",
          })}
        >
          <img src={"./assets/clock.png"} />
          Recent Played
        </li>
        <li
          className={classname("flex-row flex text-grayscale-70 gap-3 pl-10", {
            "border-l-4": variant == "download",
            "text-white": variant == "download",
            "dark:text-black": variant == "download",
            "border-main-primary": variant == "download",
            "pl-9": variant == "download",
          })}
        >
          <img src={"./assets/document-download.png"} />
          Download
        </li>
        <li className="gap-3 flex flex-row pl-10 text-grayscale-70">
          <img src={"./assets/moon.png"} />
          Dark Mode
          <Switch
            onChange={toogleTheme}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        </li>
        <li
          className={classname("flex-row flex text-grayscale-70 gap-3 pl-10", {
            "border-l-4": variant == "settings",
            "text-white": variant == "settings",
            "border-main-primary": variant == "settings",
            "pl-9": variant == "settings",
          })}
        >
          <img src={"./assets/setting-2.png"} />
          Settings
        </li>
      </ul>
    </div>
  );
}

export default HomeBar;
