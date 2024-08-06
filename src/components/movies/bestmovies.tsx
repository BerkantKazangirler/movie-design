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
    <div className="flex h-fit py-5 flex-row">
      <span className="text-4xl font-extrabold m-auto flex flex-row dark:text-white text-black">
        {rank}
      </span>
      <img
        src={big_image}
        className="ml-2 rounded-2xl h-32 w-28 object-cover object-center"
      />
      <div className="flex flex-col ml-4 gap-3">
        <span className="border dark:border-line-dark font-bold border-line-light dark:text-grayscale-40 text-grayscale-60 rounded-xl px-3 py-1 text-[12px] max-w-fit">
          {year}
        </span>
        <span className="w-36 text-ellipsis whitespace-nowrap dark:text-white text-black overflow-hidden font-semibold">
          {title}
        </span>
        <span className="flex text-sm max-w-fit text-grayscale-70">
          <img src={"./assets/film.svg"} className="h-4 m-auto" />
          {(genre[1] && genre[0] + " • " + genre[1]) || genre}
        </span>
        <span className="flex text-sm font-semibold dark:text-white w-fit text-black">
          <img src={"./assets/film-star.svg"} className="h-5" />
          {rating}
        </span>
      </div>
    </div>
  );
};

export default Movies;
