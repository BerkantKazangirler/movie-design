import { Switch } from "@headlessui/react";

import classname from "classnames";
import { useEffect } from "react";

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
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}
function SideBar({ variant, darkMode, setDarkMode }: BarProps) {
  let local = localStorage.getItem("darkMode");

  useEffect(() => {
    if (local == "on") {
      document.body.classList.toggle("dark");
      setDarkMode(true);
      return;
    }
    setDarkMode(false);
  }, []);
  return (
    <div className="dark:bg-dark-smooth h-screen bg-grayscale-10">
      <ul className="flex gap-5 flex-col font-bold w-64 2xl:w-75">
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.90999 22.82C3.81999 22.82 2.88999 22.47 2.20999 21.79C1.23999 20.82 0.939994 19.34 1.36999 17.62L3.84999 7.69001C4.27999 5.97001 5.95999 4.30001 7.66999 3.87001L17.6 1.39001C19.32 0.960013 20.8 1.26001 21.77 2.23001C22.74 3.20001 23.04 4.68001 22.61 6.40001L20.13 16.33C19.7 18.05 18.02 19.72 16.31 20.15L6.37999 22.63C5.86999 22.75 5.37999 22.82 4.90999 22.82ZM17.98 2.83001L8.04999 5.32001C6.87999 5.61001 5.60999 6.88001 5.30999 8.05001L2.82999 17.98C2.52999 19.17 2.68999 20.14 3.26999 20.73C3.84999 21.31 4.82999 21.47 6.01999 21.17L15.95 18.69C17.12 18.4 18.39 17.12 18.68 15.96L21.16 6.03001C21.46 4.84001 21.3 3.87001 20.72 3.28001C20.14 2.69001 19.17 2.54001 17.98 2.83001Z"
              fill="#78828A"
            />
            <path
              d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
              fill="#78828A"
            />
          </svg>
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7299 3.50989L15.4899 7.02989C15.7299 7.51989 16.3699 7.98989 16.9099 8.07989L20.0999 8.60989C22.1399 8.94989 22.6199 10.4299 21.1499 11.8899L18.6699 14.3699C18.2499 14.7899 18.0199 15.5999 18.1499 16.1799L18.8599 19.2499C19.4199 21.6799 18.1299 22.6199 15.9799 21.3499L12.9899 19.5799C12.4499 19.2599 11.5599 19.2599 11.0099 19.5799L8.01991 21.3499C5.87991 22.6199 4.57991 21.6699 5.13991 19.2499L5.84991 16.1799C5.97991 15.5999 5.74991 14.7899 5.32991 14.3699L2.84991 11.8899C1.38991 10.4299 1.85991 8.94989 3.89991 8.60989L7.08991 8.07989C7.61991 7.98989 8.25991 7.51989 8.49991 7.02989L10.2599 3.50989C11.2199 1.59989 12.7799 1.59989 13.7299 3.50989Z"
              fill="#B43FEB"
            />
          </svg>
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75C17.24 3.75 21.5 8.01 21.5 13.25C21.5 18.49 17.24 22.75 12 22.75ZM12 5.25C7.59 5.25 4 8.84 4 13.25C4 17.66 7.59 21.25 12 21.25C16.41 21.25 20 17.66 20 13.25C20 8.84 16.41 5.25 12 5.25Z"
              fill="#78828A"
            />
            <path
              d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
              fill="#78828A"
            />
            <path
              d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
              fill="#78828A"
            />
          </svg>
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              fill="#78828A"
            />
            <path
              d="M15.71 15.93C15.58 15.93 15.45 15.9 15.33 15.82L12.23 13.97C11.46 13.51 10.89 12.5 10.89 11.61V7.51001C10.89 7.10001 11.23 6.76001 11.64 6.76001C12.05 6.76001 12.39 7.10001 12.39 7.51001V11.61C12.39 11.97 12.69 12.5 13 12.68L16.1 14.53C16.46 14.74 16.57 15.2 16.36 15.56C16.21 15.8 15.96 15.93 15.71 15.93Z"
              fill="#78828A"
            />
          </svg>
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17.75C8.9 17.75 8.81 17.73 8.71 17.69C8.43 17.58 8.25 17.3 8.25 17V11C8.25 10.59 8.59 10.25 9 10.25C9.41 10.25 9.75 10.59 9.75 11V15.19L10.47 14.47C10.76 14.18 11.24 14.18 11.53 14.47C11.82 14.76 11.82 15.24 11.53 15.53L9.53 17.53C9.39 17.67 9.19 17.75 9 17.75Z"
              fill="#78828A"
            />
            <path
              d="M9 17.75C8.81 17.75 8.62 17.68 8.47 17.53L6.47 15.53C6.18 15.24 6.18 14.76 6.47 14.47C6.76 14.18 7.24 14.18 7.53 14.47L9.53 16.47C9.82 16.76 9.82 17.24 9.53 17.53C9.38 17.68 9.19 17.75 9 17.75Z"
              fill="#78828A"
            />
            <path
              d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
              fill="#78828A"
            />
            <path
              d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"
              fill="#78828A"
            />
          </svg>
          Download
        </li>
        <li className="gap-3 flex flex-row pl-10 text-grayscale-70">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2218_33)">
              <path
                d="M15.46 22.75C15.29 22.75 15.12 22.75 14.95 22.74C9.35001 22.49 4.67001 17.98 4.28001 12.48C3.94001 7.75999 6.67001 3.34999 11.07 1.49999C12.32 0.979992 12.98 1.37999 13.26 1.66999C13.54 1.94999 13.93 2.59999 13.41 3.78999C12.95 4.84999 12.72 5.97999 12.73 7.13999C12.75 11.57 16.43 15.33 20.92 15.51C21.57 15.54 22.21 15.49 22.83 15.38C24.15 15.14 24.7 15.67 24.91 16.01C25.12 16.35 25.36 17.08 24.56 18.16C22.44 21.06 19.07 22.75 15.46 22.75ZM5.77001 12.37C6.11001 17.13 10.17 21.03 15.01 21.24C18.3 21.4 21.42 19.9 23.34 17.28C23.49 17.07 23.56 16.92 23.59 16.84C23.5 16.83 23.34 16.82 23.09 16.87C22.36 17 21.6 17.05 20.85 17.02C15.57 16.81 11.25 12.38 11.22 7.15999C11.22 5.77999 11.49 4.44999 12.04 3.19999C12.14 2.97999 12.16 2.82999 12.17 2.74999C12.08 2.74999 11.92 2.76999 11.66 2.87999C7.85001 4.47999 5.49001 8.29999 5.77001 12.37Z"
                fill="#78828A"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2218_33"
                x="0.251526"
                y="1.24792"
                width="28.8634"
                height="29.5021"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2218_33"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2218_33"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          Dark Mode
          <Switch
            checked={darkMode}
            onChange={(e) => {
              setDarkMode(e);
            }}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-main-primary"
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
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2218_90)">
              <path
                d="M15 15.75C12.93 15.75 11.25 14.07 11.25 12C11.25 9.93 12.93 8.25 15 8.25C17.07 8.25 18.75 9.93 18.75 12C18.75 14.07 17.07 15.75 15 15.75ZM15 9.75C13.76 9.75 12.75 10.76 12.75 12C12.75 13.24 13.76 14.25 15 14.25C16.24 14.25 17.25 13.24 17.25 12C17.25 10.76 16.24 9.75 15 9.75Z"
                fill="#78828A"
              />
              <path
                d="M18.21 22.19C18 22.19 17.79 22.16 17.58 22.11C16.96 21.94 16.44 21.55 16.11 21L15.99 20.8C15.4 19.78 14.59 19.78 14 20.8L13.89 20.99C13.56 21.55 13.04 21.95 12.42 22.11C11.79 22.28 11.14 22.19 10.59 21.86L8.87 20.87C8.26 20.52 7.82 19.95 7.63 19.26C7.45 18.57 7.54 17.86 7.89 17.25C8.18 16.74 8.26 16.28 8.09 15.99C7.92 15.7 7.49 15.53 6.9 15.53C5.44 15.53 4.25 14.34 4.25 12.88V11.12C4.25 9.65998 5.44 8.46998 6.9 8.46998C7.49 8.46998 7.92 8.29998 8.09 8.00998C8.26 7.71998 8.19 7.25998 7.89 6.74998C7.54 6.13998 7.45 5.41998 7.63 4.73998C7.81 4.04998 8.25 3.47998 8.87 3.12998L10.6 2.13998C11.73 1.46998 13.22 1.85998 13.9 3.00998L14.02 3.20998C14.61 4.22998 15.42 4.22998 16.01 3.20998L16.12 3.01998C16.8 1.85998 18.29 1.46998 19.43 2.14998L21.15 3.13998C21.76 3.48998 22.2 4.05998 22.39 4.74998C22.57 5.43998 22.48 6.14998 22.13 6.75998C21.84 7.26998 21.76 7.72998 21.93 8.01998C22.1 8.30998 22.53 8.47998 23.12 8.47998C24.58 8.47998 25.77 9.66998 25.77 11.13V12.89C25.77 14.35 24.58 15.54 23.12 15.54C22.53 15.54 22.1 15.71 21.93 16C21.76 16.29 21.83 16.75 22.13 17.26C22.48 17.87 22.58 18.59 22.39 19.27C22.21 19.96 21.77 20.53 21.15 20.88L19.42 21.87C19.04 22.08 18.63 22.19 18.21 22.19ZM15 18.49C15.89 18.49 16.72 19.05 17.29 20.04L17.4 20.23C17.52 20.44 17.72 20.59 17.96 20.65C18.2 20.71 18.44 20.68 18.64 20.56L20.37 19.56C20.63 19.41 20.83 19.16 20.91 18.86C20.99 18.56 20.95 18.25 20.8 17.99C20.23 17.01 20.16 16 20.6 15.23C21.04 14.46 21.95 14.02 23.09 14.02C23.73 14.02 24.24 13.51 24.24 12.87V11.11C24.24 10.48 23.73 9.95998 23.09 9.95998C21.95 9.95998 21.04 9.51998 20.6 8.74998C20.16 7.97998 20.23 6.96998 20.8 5.98998C20.95 5.72998 20.99 5.41998 20.91 5.11998C20.83 4.81998 20.64 4.57998 20.38 4.41998L18.65 3.42998C18.22 3.16998 17.65 3.31998 17.39 3.75998L17.28 3.94998C16.71 4.93998 15.88 5.49998 14.99 5.49998C14.1 5.49998 13.27 4.93998 12.7 3.94998L12.59 3.74998C12.34 3.32998 11.78 3.17998 11.35 3.42998L9.62 4.42998C9.36 4.57998 9.16 4.82998 9.08 5.12998C9 5.42998 9.04 5.73998 9.19 5.99998C9.76 6.97998 9.83 7.98998 9.39 8.75998C8.95 9.52998 8.04 9.96998 6.9 9.96998C6.26 9.96998 5.75 10.48 5.75 11.12V12.88C5.75 13.51 6.26 14.03 6.9 14.03C8.04 14.03 8.95 14.47 9.39 15.24C9.83 16.01 9.76 17.02 9.19 18C9.04 18.26 9 18.57 9.08 18.87C9.16 19.17 9.35 19.41 9.61 19.57L11.34 20.56C11.55 20.69 11.8 20.72 12.03 20.66C12.27 20.6 12.47 20.44 12.6 20.23L12.71 20.04C13.28 19.06 14.11 18.49 15 18.49Z"
                fill="#78828A"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2218_90"
                x="0.25"
                y="1.81219"
                width="29.52"
                height="28.3818"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2218_90"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2218_90"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          Settings
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
