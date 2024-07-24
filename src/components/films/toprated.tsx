import { useState, useEffect } from "react";
import category from "../../../public/assets/category.png";
import star from "../../../public/assets/start2.png";
import movie100 from "../../../public/top-100-movies.json";
import series100 from "../../../public/top-100-series.json";

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
const Films = () => {
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
      setApiSeries(responseseries);
      setApiRated(response);
    }
    getJson();
  }, []);

  console.log(apirated);

  return (
    <div className="flex flex-col">
      <span className="text-2xl font-semibold">Top Rated</span>
      <div className="flex flex-row h-44 pt-5 max-w-40 gap-48">
        {apirated &&
          limitData.map((apirated) => (
            <div className="flex flex-row">
              <span className="text-4xl font-extrabold m-auto flex flex-row">
                {apirated.rank}
              </span>
              <img src={apirated.big_image} className="ml-4 rounded-2xl" />
              <div className="flex flex-col ml-5 gap-3">
                <span className="border border-line-dark rounded-xl px-3 py-2 text-[12px] max-w-fit">
                  {apirated.year}
                </span>
                <span className="w-36 text-ellipsis whitespace-nowrap overflow-hidden font-semibold">
                  {apirated.title}
                </span>
                <span className="flex text-sm max-w-fit text-grayscale-70">
                  <img src={category} className="h-4 m-auto" />
                  {(apirated.genre[1] &&
                    apirated.genre[0] + " • " + apirated.genre[1]) ||
                    apirated.genre}
                </span>
                <span className="flex text-sm">
                  <img src={star} className="h-5" />
                  {apirated.rating}
                </span>
              </div>
            </div>
          ))}
      </div>
      <span className="text-2xl font-semibold pt-5">Best Of Series</span>
      <div className="flex gap-14 flex-col">
        <div className="flex flex-row h-56 pt-5 gap-5">
          {apiseries &&
            limitedMovieData.map((apiseries) => (
              <div className="flex flex-col">
                <img
                  src={apiseries.big_image}
                  className="w-128 h-52 rounded-2xl"
                />
                <div className="flex flex-col gap-3">
                  <span className="w-52 text-ellipsis whitespace-nowrap overflow-hidden font-bold">
                    {apiseries.title}
                  </span>
                  <span className="flex text-sm gap-1 w-60">
                    <img src={star} className="h-5" />
                    {apiseries.rating}
                    <span className="text-grayscale-70">
                      {(apiseries.genre[1] &&
                        "| " +
                          apiseries.genre[0] +
                          " • " +
                          apiseries.genre[1]) ||
                        apiseries.genre}
                    </span>
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-row h-56 pt-5 gap-5">
          {apiseries &&
            limitedMovieDataa.map((apiseries) => (
              <div className="flex flex-col">
                <img
                  src={apiseries.big_image}
                  className="w-128 h-52 rounded-2xl"
                />
                <div className="flex flex-col gap-3">
                  <span className="w-52 text-ellipsis whitespace-nowrap overflow-hidden font-bold">
                    {apiseries.title}
                  </span>
                  <span className="flex text-sm gap-1 w-60">
                    <img src={star} className="h-5" />
                    {apiseries.rating}
                    <span className="text-grayscale-70">
                      {(apiseries.genre[1] &&
                        "| " +
                          apiseries.genre[0] +
                          " • " +
                          apiseries.genre[1]) ||
                        apiseries.genre}
                    </span>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Films;
