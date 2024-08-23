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
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1733 2.5H3.82667C3.3422 2.5 2.87758 2.69245 2.53502 3.03502C2.19245 3.37758 2 3.8422 2 4.32667V12.6733C2 13.1578 2.19245 13.6224 2.53502 13.965C2.87758 14.3075 3.3422 14.5 3.82667 14.5H12.1733C12.6578 14.5 13.1224 14.3075 13.465 13.965C13.8075 13.6224 14 13.1578 14 12.6733V4.32667C14 3.8422 13.8075 3.37758 13.465 3.03502C13.1224 2.69245 12.6578 2.5 12.1733 2.5ZM4.66667 7.83333H3.33333V6.5H4.66667V7.83333ZM3.33333 9.16667H4.66667V10.5H3.33333V9.16667ZM12.6667 7.83333H11.3333V6.5H12.6667V7.83333ZM11.3333 9.16667H12.6667V10.5H11.3333V9.16667ZM12.6667 4.32667V5.16667H11.3333V3.83333H12.1733C12.2381 3.83333 12.3023 3.84609 12.3621 3.87089C12.422 3.89568 12.4764 3.93202 12.5222 3.97783C12.568 4.02364 12.6043 4.07802 12.6291 4.13788C12.6539 4.19773 12.6667 4.26188 12.6667 4.32667ZM3.82667 3.83333H4.66667V5.16667H3.33333V4.32667C3.33333 4.26188 3.34609 4.19773 3.37089 4.13788C3.39568 4.07802 3.43202 4.02364 3.47783 3.97783C3.52364 3.93202 3.57802 3.89568 3.63788 3.87089C3.69773 3.84609 3.76188 3.83333 3.82667 3.83333ZM3.33333 12.6733V11.8333H4.66667V13.1667H3.82667C3.76188 13.1667 3.69773 13.1539 3.63788 13.1291C3.57802 13.1043 3.52364 13.068 3.47783 13.0222C3.43202 12.9764 3.39568 12.922 3.37089 12.8621C3.34609 12.8023 3.33333 12.7381 3.33333 12.6733ZM12.6667 12.6733C12.6667 12.8042 12.6147 12.9297 12.5222 13.0222C12.4297 13.1147 12.3042 13.1667 12.1733 13.1667H11.3333V11.8333H12.6667V12.6733Z"
              fill="#78828A"
            />
          </svg>

          {(genre[1] && genre[0] + " • " + genre[1]) || genre}
        </span>
        <span className="flex text-sm font-semibold dark:text-white w-fit text-black">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4416 3.42489L12.9083 6.35822C13.1083 6.76656 13.6416 7.15822 14.0916 7.23322L16.7499 7.67489C18.4499 7.95822 18.8499 9.19156 17.6249 10.4082L15.5583 12.4749C15.2083 12.8249 15.0166 13.4999 15.1249 13.9832L15.7166 16.5416C16.1833 18.5666 15.1083 19.3499 13.3166 18.2916L10.8249 16.8166C10.3749 16.5499 9.63326 16.5499 9.17492 16.8166L6.68326 18.2916C4.89992 19.3499 3.81659 18.5582 4.28326 16.5416L4.87492 13.9832C4.98326 13.4999 4.79159 12.8249 4.44159 12.4749L2.37492 10.4082C1.15826 9.19156 1.54992 7.95822 3.24992 7.67489L5.90826 7.23322C6.34992 7.15822 6.88326 6.76656 7.08326 6.35822L8.54992 3.42489C9.34992 1.83322 10.6499 1.83322 11.4416 3.42489Z"
              fill="#FFCD1A"
            />
          </svg>

          {rating}
        </span>
      </div>
    </div>
  );
};

export default Movies;
