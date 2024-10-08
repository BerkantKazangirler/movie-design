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
