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
              "fill-white": darkMode,
              "fill-black": !darkMode,
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
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("my-auto", {
              "stroke-white": darkMode,
              "stroke-black": !darkMode,
            })}
          >
            <path
              d="M12.02 28.53C9.68999 28.53 7.35999 28.16 5.14999 27.42C4.30999 27.13 3.66999 26.54 3.38999 25.77C3.09999 25 3.19999 24.15 3.65999 23.39L4.80999 21.48C5.04999 21.08 5.26999 20.28 5.26999 19.81V16.92C5.26999 13.2 8.29999 10.17 12.02 10.17C15.74 10.17 18.77 13.2 18.77 16.92V19.81C18.77 20.27 18.99 21.08 19.23 21.49L20.37 23.39C20.8 24.11 20.88 24.98 20.59 25.77C20.3 26.56 19.67 27.16 18.88 27.42C16.68 28.16 14.35 28.53 12.02 28.53ZM12.02 11.67C9.12999 11.67 6.76999 14.02 6.76999 16.92V19.81C6.76999 20.54 6.46999 21.62 6.09999 22.25L4.94999 24.16C4.72999 24.53 4.66999 24.92 4.79999 25.25C4.91999 25.59 5.21999 25.85 5.62999 25.99C9.80999 27.39 14.24 27.39 18.42 25.99C18.78 25.87 19.06 25.6 19.19 25.24C19.32 24.88 19.29 24.49 19.09 24.16L17.94 22.25C17.56 21.6 17.27 20.53 17.27 19.8V16.92C17.27 14.02 14.92 11.67 12.02 11.67Z"
              fill="#F9F9F9"
            />
            <path
              d="M13.88 11.9401C13.81 11.9401 13.74 11.9301 13.67 11.9101C13.38 11.8301 13.1 11.7701 12.83 11.7301C11.98 11.6201 11.16 11.6801 10.39 11.9101C10.11 12.0001 9.80999 11.9101 9.61999 11.7001C9.42999 11.4901 9.36999 11.1901 9.47999 10.9201C9.88999 9.87005 10.89 9.18005 12.03 9.18005C13.17 9.18005 14.17 9.86005 14.58 10.9201C14.68 11.1901 14.63 11.4901 14.44 11.7001C14.29 11.8601 14.08 11.9401 13.88 11.9401Z"
              fill="#F9F9F9"
            />
            <path
              d="M12.02 30.8101C11.03 30.8101 10.07 30.4101 9.37002 29.7101C8.67002 29.0101 8.27002 28.0501 8.27002 27.0601H9.77002C9.77002 27.6501 10.01 28.2301 10.43 28.6501C10.85 29.0701 11.43 29.3101 12.02 29.3101C13.26 29.3101 14.27 28.3001 14.27 27.0601H15.77C15.77 29.1301 14.09 30.8101 12.02 30.8101Z"
              fill="#F9F9F9"
            />
            <circle cx="23" cy="9" r="9" fill="#EB3F5E" />
            <path
              d="M22.528 14.144C22.056 14.144 21.616 14.06 21.208 13.892C20.8 13.724 20.448 13.488 20.152 13.184C19.856 12.872 19.636 12.504 19.492 12.08L20.488 11.672C20.656 12.12 20.92 12.468 21.28 12.716C21.64 12.964 22.056 13.088 22.528 13.088C22.896 13.088 23.224 13.016 23.512 12.872C23.8 12.728 24.024 12.52 24.184 12.248C24.352 11.976 24.436 11.648 24.436 11.264C24.436 10.872 24.352 10.544 24.184 10.28C24.024 10.008 23.8 9.8 23.512 9.656C23.224 9.512 22.892 9.44 22.516 9.44C22.396 9.44 22.264 9.448 22.12 9.464C21.984 9.48 21.868 9.504 21.772 9.536L21.52 8.996L23.908 6.08H19.948V5.06H25.24V6.044L22.96 8.852L22.888 8.54C23.424 8.556 23.896 8.68 24.304 8.912C24.712 9.144 25.032 9.46 25.264 9.86C25.496 10.252 25.612 10.712 25.612 11.24C25.612 11.784 25.48 12.276 25.216 12.716C24.952 13.156 24.588 13.504 24.124 13.76C23.66 14.016 23.128 14.144 22.528 14.144Z"
              fill="#FAFAFA"
            />
          </svg>

          <div className="flex flex-row gap-2">
            <img src={"./assets/user-image.png"} className="h-9 my-auto" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn("my-auto", {
                "stroke-white": darkMode,
                "stroke-black": !darkMode,
              })}
            >
              <path
                d="M3.72475 6.64143C3.94663 6.41954 4.29385 6.39937 4.53853 6.58092L4.60863 6.64143L10 12.0325L15.3914 6.64143C15.6133 6.41954 15.9605 6.39937 16.2052 6.58092L16.2753 6.64143C16.4972 6.86332 16.5174 7.21054 16.3358 7.45522L16.2753 7.52532L10.442 13.3586C10.2201 13.5805 9.87285 13.6007 9.62818 13.4192L9.55808 13.3586L3.72475 7.52532C3.48067 7.28124 3.48067 6.88551 3.72475 6.64143Z"
                fill="#F9F9F9"
              />
            </svg>
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
