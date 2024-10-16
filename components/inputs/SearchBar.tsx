import { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
  fetchMovies: (searchString: string, page: number) => void;
  allowFetching: boolean;
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
  pageToLoad: number;
  setPageToLoad: Dispatch<SetStateAction<number>>;
};

export default function SearchBar({
  fetchMovies,
  allowFetching,
  searchString,
  setSearchString,
  setPageToLoad,
}: SearchBarProps) {
  return (
    <form className="flex flex-col gap-4 w-full items-center">
      <input
        type="text"
        className="border-2 border-black w-full p-2 rounded-full text-center md:w-1/2"
        placeholder="Search for a movie"
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
      ></input>
      <button
        className={`bg-darkBackground text-lightTextColor p-2 w-fit rounded-full ${
          allowFetching ? "" : "opacity-70 cursor-default"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setPageToLoad(1);
          fetchMovies(searchString, 1);
        }}
      >
        Search
      </button>
    </form>
  );
}
