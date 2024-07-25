import { Button, SideBar, Movies, Series, Input } from "../components";

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

const Home = () => {
  const [apirated, setApiRated] = useState<MovieTypes[] | undefined>();
  const [apiseries, setApiSeries] = useState<MovieTypes[] | undefined>();

  const darkMode = localStorage.getItem("darkMode");
  console.log(darkMode);

  const limitData = movie100.slice(0, 5);
  const limitedMovieData = series100.slice(0, 5);
  useEffect(() => {
    async function getJson() {
      const response: MovieTypes[] = await fetch(
        "../../top-100-movies.json"
      ).then((res) => res.json());

      const responseseries: MovieTypes[] = await fetch(
        "../../top-100-series.json"
      ).then((res) => res.json());
      setApiRated(response);
      setApiSeries(responseseries);
    }
    getJson();
  }, []);

  return (
    <div className="flex dark:bg-dark-background bg-light-background w-full h-screen overflow-y-hidden flex-col">
      <header className="dark:bg-dark-background bg-light-background justify-between px-16 h-fit w-full p-4 flex flex-row gap-40">
        <div className="flex flex-row gap-60">
          <span className="text-xl font-semibold ml-8 m-auto dark:text-white text-black">
            CineMax
          </span>
          <ul className="flex flex-row gap-5 m-auto dark:text-white text-black">
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Series</a>
            </li>
            <li>
              <a href="#">Animation</a>
            </li>
            <li>
              <a href="#">Genres</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-10">
          <Input
            placeholder="Search..."
            rounded="3xl"
            id="name"
            fontsize="sm"
            // onChange={(e) => )}
          />
          <img
            src={`./assets/${darkMode ? "Search" : "google"}.png`}
            className="h-6 m-auto flex mr-20"
            onClick={() => alert("test")}
          />
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
        <SideBar variant="toprated" />
        <div className="flex flex-col p-10 w-full">
          <span
            className="text-2xl font-semibold pt-5 w-fit dark:text-white text-black
          "
          >
            Top Rated
          </span>
          <div className="flex flex-row">
            {limitData.map((apirated) => (
              <Movies
                rank={apirated.rank}
                big_image={apirated.big_image}
                genre={apirated.genre}
                rating={apirated.rating}
                title={apirated.title}
                year={apirated.year}
              />
            ))}
          </div>
          <span className="text-2xl font-semibold dark:text-white text-black">
            Best Of Series
          </span>
          <div className="flex flex-row gap-10 w-full">
            {limitedMovieData.map((apiseries) => (
              <div className="flex flex-col">
                <Series
                  rank={apiseries.rank}
                  big_image={apiseries.big_image}
                  genre={apiseries.genre}
                  id={apiseries.id}
                  rating={apiseries.rating}
                  title={apiseries.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
