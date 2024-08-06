import { Button, SideBar, Movies, Series, Input } from "../components";

import { useState, useEffect } from "react";

import movie100 from "../../public/top-100-movies.json";
import series100 from "../../public/top-100-series.json";
import cn from "classnames";
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

// DARKMODE HER ZAMAN ON GELİYOR BLACKTE KALIYOR

const Home = () => {
  const [apirated, setApiRated] = useState<MovieTypes[] | undefined>();
  const [apiseries, setApiSeries] = useState<MovieTypes[] | undefined>();
  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "on");
      return;
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "off");
      return;
    }
  }, [darkMode]);

  return (
    <div className="flex dark:bg-dark-background bg-light-background w-full h-screen overflow-y-hidden flex-col">
      <header className="dark:bg-dark-background bg-light-background justify-between px-16 h-fit w-full p-4 flex flex-row gap-40">
        <div className="flex flex-row gap-60">
          <span className="text-xl font-semibold m-auto dark:text-white text-black">
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
          <svg
            width="21"
            height="21"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-6 m-auto flex mr-20", {
              "stroke-white": darkMode,
              "stroke-red-500": !darkMode,
            })}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.73876 0C15.1088 0 19.4768 4.368 19.4768 9.738C19.4768 12.2715 18.5045 14.5823 16.9134 16.3165L20.0442 19.4407C20.3372 19.7337 20.3382 20.2077 20.0452 20.5007C19.8992 20.6487 19.7062 20.7217 19.5142 20.7217C19.3232 20.7217 19.1312 20.6487 18.9842 20.5027L15.8156 17.343C14.1488 18.6778 12.0354 19.477 9.73876 19.477C4.36876 19.477 -0.000244141 15.108 -0.000244141 9.738C-0.000244141 4.368 4.36876 0 9.73876 0ZM9.73876 1.5C5.19576 1.5 1.49976 5.195 1.49976 9.738C1.49976 14.281 5.19576 17.977 9.73876 17.977C14.2808 17.977 17.9768 14.281 17.9768 9.738C17.9768 5.195 14.2808 1.5 9.73876 1.5Z"
            />
          </svg>

          <Button size="normal" buttonstyle="primary" type="submit">
            Payment
          </Button>
          <img src={"./assets/Notification.svg"} className="h-8 my-auto" />
          <div className="flex flex-row gap-2">
            <img src={"./assets/user-image.png"} className="h-9 my-auto" />
            <img src={"./assets/a-down.svg"} className="h-2 m-auto" />
          </div>
        </div>
      </header>
      <div className="flex flex-row">
        <SideBar
          darkMode={darkMode}
          setDarkMode={(darkMode) => {
            setDarkMode(darkMode);
          }}
          variant="toprated"
        />
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
