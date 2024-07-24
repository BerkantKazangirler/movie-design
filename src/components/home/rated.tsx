import Movies from "../home/toprated/bestmovies";
import Series from "../home/toprated/bestseries";

export interface MovieTypes {
  big_image: string;
  description: string;
  genre: string[];
  id: string;
  image: string;
  imbd_link: string;
  imbid: string;
  rankk: number;
  rating: string;
  thumbnail: string;
  title: string;
  year: number;
}

const Films = ({
  rankk,
  big_image,
  description,
  title,
  image,
  genre,
  thumbnail,
  rating,
  id,
  year,
  imbd_link,
  imbid,
}: MovieTypes) => {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-semibold">Top Rated</span>
      <Movies
        rank={rankk}
        big_image={big_image}
        description={description}
        genre={genre}
        id={id}
        image={image}
        imbd_link={imbd_link}
        imbid={imbid}
        rating={rating}
        thumbnail={thumbnail}
        title={title}
        year={year}
      />
      <span className="text-2xl font-semibold pt-5">Best Of Series</span>
      <Series
        rank={rankk}
        big_image={big_image}
        description={description}
        genre={genre}
        id={id}
        image={image}
        imbd_link={imbd_link}
        imbid={imbid}
        rating={rating}
        thumbnail={thumbnail}
        title={title}
        year={year}
      />
    </div>
  );
};

export default Films;
