export interface MovieTypes {
  big_image: string;
  genre: string[];
  rank: number;
  rating: string;
  title: string;
  year: number;
}

const Movies = ({
  rank,
  big_image,
  rating,
  year,
  title,
  genre,
}: MovieTypes) => {
  return (
    <div className="flex">
      <div className="flex flex-row h-44 pt-5 gap-10">
        <div className="flex flex-row">
          <span className="text-4xl font-extrabold m-auto flex flex-row">
            {rank}
          </span>
          <img
            src={big_image}
            className="ml-4 rounded-2xl h-32 w-28 object-cover object-center"
          />
          <div className="flex flex-col ml-5 gap-3">
            <span className="border dark:border-line-dark font-bold border-line-light dark:text-grayscale-40 text-grayscale-60 rounded-xl px-3 py-1 text-[12px] max-w-fit">
              {year}
            </span>
            <span className="w-36 text-ellipsis whitespace-nowrap dark:text-white text-black overflow-hidden font-semibold">
              {title}
            </span>
            <span className="flex text-sm max-w-fit text-grayscale-70">
              <img src={"./assets/category.png"} className="h-4 m-auto" />
              {genre.slice(0, 2).map((genre, i) => {
                if (i === genre.slice(0, 2).length - 1) return genre;
                return genre + " • ";
              })}
            </span>
            <span className="flex text-sm font-semibold dark:text-white text-black">
              <img src={"./assets/start2.png"} className="h-5" />
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
