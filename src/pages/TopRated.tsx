import { Button } from "../components";
import { Home } from "../components/home";
import search from "../../public/assets/Search.png";
import userimage from "../../public/assets/user-image.png";
import arrow from "../../public/assets/arrow.png";
import discover from "../../public/assets/discover.png";
import star from "../../public/assets/star.png";
import clock from "../../public/assets/clock.png";
import timer from "../../public/assets/timer.png";
import file from "../../public/assets/document-download.png";
import moon from "../../public/assets/moon.png";
import setting from "../../public/assets/setting-2.png";
import notification from "../../public/assets/Notification.png";
import "../App.css";

import { useState, useEffect } from "react";

import movie100 from "../../public/top-100-movies.json";
import series100 from "../../public/top-100-series.json";

export interface MovieTypes {
  big_image: string;
  description: string;
  genre: string[];
  id: string;
  image: string;
  imbd_link: string;
  imbid: string;
  rank: number;
  rating: string;
  thumbnail: string;
  title: string;
  year: number;
}

const TopRated = () => {
  const [apirated, setApiRated] = useState<MovieTypes[] | undefined>();
  const [apiseries, setApiSeries] = useState<MovieTypes[] | undefined>();

  const limitData = movie100.slice(0, 5);
  const limitedMovieData = series100.slice(0, 6);
  const limitedMovieDataa = series100.slice(6, 12);
  useEffect(() => {
    async function getJson() {
      const response: MovieTypes[] = await fetch(
        "../../../top-100-movies.json"
      ).then((res) => res.json());

      const responseseries: MovieTypes[] = await fetch(
        "../../../top-100-series.json"
      ).then((res) => res.json());
      setApiRated(response);
      setApiSeries(responseseries);
    }
    getJson();
  }, []);

  return (
    <>
      <div className="flex bg-dark-background w-full h-screen overflow-y-hidden flex-col">
        <header className="bg-dark-background justify-between px-16 h-fit w-full p-4 flex flex-row gap-40">
          <div className="flex flex-row gap-60">
            <span className="text-xl font-bold m-auto">CineMax</span>
            <ul className="flex flex-row gap-5 m-auto">
              <li>Movies</li>
              <li>Series</li>
              <li>Animation</li>
              <li>Genres</li>
            </ul>
          </div>
          <div className="flex flex-row gap-10">
            <img src={search} className="h-6 mr-20 m-auto" />
            <Button size="normal" buttonstyle="primary" type="submit">
              Payment
            </Button>
            <img src={notification} className="h-8" />
            <div className="flex flex-row gap-2">
              <img src={userimage} />
              <img src={arrow} className="h-2 m-auto" />
            </div>
          </div>
        </header>
        <div className="flex flex-row">
          <div className="bg-dark-smooth h-screen">
            <ul className="flex gap-5 flex-col font-bold w-75">
              <li className="text-grayscale-60 uppercase pt-10 pl-10">Menu</li>
              <li className="flex-row flex text-grayscale-70 gap-3 pl-10">
                <img src={discover} />
                Discovery
              </li>
              <li className="border-l-4 gap-3 flex flex-row border-main-primary pl-9">
                <img src={star} />
                Top Rated
              </li>
              <li className="gap-3 flex flex-row pl-10 text-grayscale-70">
                <img src={timer} />
                Coming Soon
              </li>
            </ul>
            <ul className="flex gap-5 flex-col font-bold">
              <li className="text-grayscale-60 uppercase pt-10 pl-10">
                library
              </li>
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
                <input type="checkbox" />
              </li>
              <li className="gap-3 flex flex-row pl-10 text-grayscale-70">
                <img src={setting} />
                Setting
              </li>
            </ul>
          </div>
          {apirated &&
            apiseries &&
            limitData.map((apirated) => (
              <div className="flex flex-row p-10 w-full">
                <Home
                  rankk={apirated && apirated.rank}
                  big_image={apirated && apirated.big_image}
                  description={apirated && apirated.description}
                  title={apirated && apirated.title}
                  image={apirated && apirated.image}
                  genre={apirated && apirated.genre}
                  thumbnail={apirated && apirated.thumbnail}
                  rating={apirated && apirated.rating}
                  id={apirated && apirated.id}
                  year={apirated && apirated.year}
                  imbid={apirated && apirated.imdbid}
                  imbd_link={apirated && apirated.imdb_link}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TopRated;
