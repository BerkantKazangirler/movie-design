import { Button, Movies, Series } from "../components";

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
  const limitedMovieData = series100.slice(0, 12);
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
          <img src={"./assets/Search.png"} className="h-6 mr-20 m-auto" />
          <Button size="normal" buttonstyle="primary" type="submit">
            Payment
          </Button>
          <img src={"./assets/Notification.png"} className="h-8" />
          <div className="flex flex-row gap-2">
            <img src={"./assets/user-image.png"} />
            <img src={"./assets/arrow.png"} className="h-2 m-auto" />
          </div>
        </div>
      </header>
      <div className="flex flex-row">
        <div className="bg-dark-smooth h-screen">
          <ul className="flex gap-5 flex-col font-bold w-75">
            <li className="text-grayscale-60 uppercase pt-10 pl-10">Menu</li>
            <li className="flex-row flex text-grayscale-70 gap-3 pl-10">
              <img src={"./assets/discover.png"} />
              Discovery
            </li>
            <li className="border-l-4 gap-3 flex flex-row border-main-primary pl-9">
              <img src={"./assets/star.png"} />
              Top Rated
            </li>
            <li className="gap-3 flex flex-row pl-10 text-grayscale-70">
              <img src={"./assets/timer.png"} />
              Coming Soon
            </li>
          </ul>
          <ul className="flex gap-5 flex-col font-bold">
            <li className="text-grayscale-60 uppercase pt-10 pl-10">library</li>
            <li className="flex-row flex text-grayscale-70 gap-3 pl-10">
              <img src={"./assets/clock.png"} />
              Recent Played
            </li>
            <li className="gap-3 flex flex-row text-grayscale-70 pl-10">
              <img src={"./assets/document-download.png"} />
              Download
            </li>
            <li className="gap-3 flex flex-row pl-10 text-grayscale-70">
              <img src={"./assets/moon.png"} />
              Dark Mode
              <input type="checkbox" />
            </li>
            <li className="gap-3 flex flex-row pl-10 text-grayscale-70">
              <img src={"./assets/setting-2.png"} />
              Setting
            </li>
          </ul>
        </div>
        <div className="flex flex-col p-10 w-full">
          <span className="text-2xl font-semibold pt-5">Top Rated</span>
          <div className="flex flex-row">
            {apirated &&
              limitData.map((apirated) => (
                <Movies
                  rank={apirated.rank}
                  big_image={apirated.big_image}
                  description={apirated.description}
                  genre={apirated.genre}
                  id={apirated.id}
                  image={apirated.image}
                  imbd_link={apirated.imdb_link}
                  imbid={apirated.imdbid}
                  rating={apirated.rating}
                  thumbnail={apirated.thumbnail}
                  title={apirated.title}
                  year={apirated.year}
                />
              ))}
          </div>
          <span className="text-2xl font-semibold pt-5">Best Of Series</span>
          <div className="flex flex-row gap-10">
            {apiseries &&
              limitedMovieData.map((apiseries) => (
                <div className="flex gap-14 flex-col">
                  <div className="flex flex-row h-56 pt-5 gap-5">
                    <div className="flex flex-col">
                      <img
                        src={apiseries.big_image}
                        className="w-64 h-44 object-cover object-center rounded-2xl"
                      />
                      <div className="flex flex-col gap-3">
                        <span className="w-52 text-ellipsis whitespace-nowrap overflow-hidden font-bold">
                          {apiseries.title}
                        </span>
                        <span className="flex text-sm gap-1 w-60">
                          <img src={"./assets/start2.png"} className="h-5" />
                          {apiseries.rating}
                          <span className="text-grayscale-70">
                            <span className="text-grayscale-70">
                              {apiseries.genre.slice(0, 2).map((genre, i) => {
                                if (i === genre.slice(0, 2).length - 1)
                                  return genre;
                                return genre + " • ";
                              })}
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row h-56 pt-5 gap-5">
                    <div className="flex flex-col">
                      <img
                        src={apiseries.big_image}
                        className="w-64 h-44 object-cover object-center rounded-2xl"
                      />
                      <div className="flex flex-col gap-3">
                        <span className="w-52 text-ellipsis whitespace-nowrap overflow-hidden font-bold">
                          {apiseries.title}
                        </span>
                        <span className="flex text-sm gap-1 w-60">
                          <img src={"./assets/start2.png"} className="h-5" />
                          {apiseries.rating}
                          <span className="text-grayscale-70">
                            <span className="text-grayscale-70">
                              {apiseries.genre.slice(0, 2).map((genre, i) => {
                                if (i === genre.slice(0, 2).length - 1)
                                  return genre;
                                return genre + " • ";
                              })}
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
