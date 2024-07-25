export interface MovieTypes {
  big_image: string;
  genre: string[];
  id: string;
  rating: number;
  title: string;
  rank: number;
}
const Series = ({ big_image, rating, title, genre }: MovieTypes) => {
  return (
    <div className="flex gap-5 flex-col">
      <div className="flex h-fit pt-5">
        <div className="flex flex-col">
          <img
            src={big_image}
            className="w-64 h-44 object-cover object-center rounded-2xl"
          />
          <div className="flex flex-col gap-3">
            <span className="w-full text-ellipsis whitespace-nowrap overflow-hidden font-semibold dark:text-white text-black">
              {title}
            </span>
            <span className="flex text-sm font-semibold gap-1 w-full dark:text-white text-black">
              <img src={"./assets/start2.png"} className="h-5" />
              {rating}
              <span className="text-grayscale-70">
                <span className="text-grayscale-70">
                  {(genre[1] && "| " + genre[0] + " • " + genre[1]) ||
                    " | " + genre}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex h-fit pt-5">
        <div className="flex flex-col">
          <img
            src={big_image}
            className="w-64 h-44 object-cover object-center rounded-2xl"
          />
          <div className="flex flex-col gap-3">
            <span className="w-full text-ellipsis whitespace-nowrap overflow-hidden font-semibold dark:text-white text-black">
              {title}
            </span>
            <span className="flex text-sm font-semibold gap-1 w-full dark:text-white text-black">
              <img src={"./assets/start2.png"} className="h-5" />
              {rating}
              <span className="text-grayscale-70">
                <span className="text-grayscale-70">
                  {(genre[1] && "| " + genre[0] + " • " + genre[1]) ||
                    " | " + genre}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Series;
