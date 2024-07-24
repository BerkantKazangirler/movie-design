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
  return (
    <div className="bg-dark-smooth h-screen">
      <ul className="flex gap-5 flex-col font-bold w-75">
        <li className="text-grayscale-60 uppercase pt-10 pl-10">Menu</li>
        <li
          className={classname("flex-row flex text-grayscale-70 gap-3 pl-10", {
            "border-l-4": variant == "discovery",
            "text-white": variant == "discovery",
            "border-main-primary": variant == "discovery",
            "pl-9": variant == "discovery",
          })}
        >
          <img src={"./assets/discover.png"} />
          Discovery
        </li>
        <li
          className={classname("flex-row flex text-grayscale-70 gap-3 pl-10", {
            "border-l-4": variant == "toprated",
            "text-white": variant == "toprated",
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
          <input type="checkbox" />
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
