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
      <div className="flex flex-row h-56 py-5 gap-5">
        <div className="flex flex-col">
          <img
            src={big_image}
            className="w-64 h-44 object-cover object-center rounded-2xl"
          />
          <div className="flex flex-col gap-3">
            <span className="w-52 text-ellipsis whitespace-nowrap overflow-hidden font-bold">
              {title}
            </span>
            <span className="flex text-sm gap-1 w-60">
              <img src={"./assets/start2.png"} className="h-5" />
              {rating}
              <span className="text-grayscale-70">
                <span className="text-grayscale-70">
                  {genre.slice(0, 2).map((genre, i) => {
                    if (i === genre.slice(0, 2).length - 1) return genre;
                    return genre + " • ";
                  })}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-56 pt-8 gap-5">
        <div className="flex flex-col">
          <img
            src={big_image}
            className="w-64 h-44 object-cover object-center rounded-2xl"
          />
          <div className="flex flex-col gap-3">
            <span className="w-52 text-ellipsis whitespace-nowrap overflow-hidden font-bold">
              {title}
            </span>
            <span className="flex text-sm gap-1 w-60">
              <img src={"./assets/start2.png"} className="h-5" />
              {rating}
              <span className="text-grayscale-70">
                {genre.map((genre) => genre + " • ")}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Series;
