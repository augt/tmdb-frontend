import { Movie } from "@/app/page";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

type SearchBarProps = {
  setMovieList: Dispatch<SetStateAction<Movie[]>>;
};

export default function SearchBar({ setMovieList }: SearchBarProps) {
  const [searchString, setSearchString] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  async function fetchMovies(searchQuery: string, page: number) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&page=${page}`,

        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjJkNjNjZGRjMDY2ZDk5ZWQzZTgwNmQzMjY3MThjYSIsInN1YiI6IjYyNGVhNTRhYjc2Y2JiMDA2ODIzODc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zuuBq1c63XpADl8SQ_c62hezeus7VibE1w5Da5UdYyo",
          },
        }
      );

      if (response.status === 200) {
        setMovieList([...response.data.results]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col gap-2 w-full items-center">
      <input
        type="text"
        className="border-2 border-black w-1/2 p-2"
        placeholder="search for a movie"
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
      ></input>
      <button
        className="bg-darkBackground text-lightTextColor p-2 w-fit"
        onClick={(e) => {
          e.preventDefault();
          fetchMovies(searchString, pageNumber);
        }}
      >
        Search
      </button>
    </div>
  );
}
