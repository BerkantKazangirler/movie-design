import { Button } from "../components";
import search from "../assets/Search.png";
import userimage from "../assets/user-image.png";
import arrow from "../assets/arrow.png";
import discover from "../assets/discover.png";
import star from "../assets/star.png";
import clock from "../assets/clock.png";
import timer from "../assets/timer.png";
import file from "../assets/document-download.png";
import moon from "../assets/moon.png";
import setting from "../assets/setting-2.png";
import notification from "../assets/Notification.png";
import "../App.css";

const TopRated = ({}) => {
  return (
    <>
      <div className="flex bg-payment-bg w-full h-screen overflow-y-hidden flex-col">
        <header className="bg-dark-background justify-between px-16 h-fit w-full p-4 flex flex-row gap-40">
          <div className="flex flex-row gap-60">
            <span className="text-xl font-bold">CineMax</span>
            <ul className="flex flex-row gap-5 m-auto">
              <li>Movies</li>
              <li>Series</li>
              <li>Animation</li>
              <li>Genres</li>
            </ul>
          </div>
          <div className="flex flex-row gap-10">
            <img src={search} className="h-6 mr-20 m-auto" />
            <Button paddingpx="large" padding="small" buttontype="submit">
              Payment
            </Button>
            <img src={notification} />
            <div className="flex flex-row gap-2">
              <img src={userimage} />
              <img src={arrow} className="h-2 m-auto" />
            </div>
          </div>
        </header>
        <div className="bg-dark-smooth h-screen w-75">
          <ul className="flex gap-5 flex-col font-bold">
            <li className="text-grayscale-60 uppercase pt-10 pl-10">Menu</li>
            <li className="flex-row flex text-grayscale-70 gap-3 pl-10">
              <img src={discover} />
              Discovery
            </li>
            <li className="border-l-4 gap-3 flex flex-row border-main-primary pl-10">
              <img src={star} />
              Top Rated
            </li>
            <li className="gap-3 flex flex-row pl-10 text-grayscale-70">
              <img src={timer} />
              Coming Soon
            </li>
          </ul>
          <ul className="flex gap-5 flex-col font-bold">
            <li className="text-grayscale-60 uppercase pt-10 pl-10">library</li>
            <li className="flex-row flex text-grayscale-70 gap-3 pl-10">
              <img src={clock} />
              Recent Played
            </li>
            <li className="gap-3 flex flex-row text-grayscale-70 pl-10">
              <img src={file} />
              Download
            </li>
            <li className="gap-3 flex flex-row pl-10 text-grayscale-70">
              <img src={moon} />
              Dark Mode
            </li>
            <li className="gap-3 flex flex-row pl-10 text-grayscale-70">
              <img src={setting} />
              Setting
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopRated;
