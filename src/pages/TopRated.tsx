import { Button, HomeBar, Movies, Series } from "../components";

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
  const limitedMovieData = series100.slice(0, 5);
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
          <span className="text-xl font-semibold ml-8 m-auto">CineMax</span>
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
        <HomeBar variant="toprated" />
        <div className="flex flex-col p-10 w-full">
          <span className="text-2xl font-semibold pt-5">Top Rated</span>
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
          <span className="text-2xl font-semibold">Best Of Series</span>
          <div className="flex flex-row gap-10">
            {limitedMovieData.map((apiseries) => (
              <div className="flex gap-14 flex-col">
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

export default TopRated;
