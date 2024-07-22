import { Button, Input } from "../components";
import "../App.css";

const TopRated = ({}) => {
  return (
    <>
      <div className="flex bg-payment-bg w-full h-screen overflow-y-hidden">
        <header className="bg-dark-background h-fit w-full p-4 flex flex-row gap-40">
          <div className="">
            <span className="text-xl font-bold">CineMax</span>
            <ul className="flex flex-row gap-5">
              <li>Movies</li>
              <li>Series</li>
              <li>Animation</li>
              <li>Genres</li>
            </ul>
          </div>
          <div></div>
        </header>
      </div>
    </>
  );
};

export default TopRated;
