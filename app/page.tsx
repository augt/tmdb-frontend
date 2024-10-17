"use client";
import MovieThumbnail from "@/components/cards/MovieThumbnail";
import SearchBar from "@/components/inputs/SearchBar";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export type Movie = {
  title: string;
  poster_path: string | null;
  id: number;
  overview: string;
};

export default function Home() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [allowFetching, setAllowFetching] = useState(true);
  const [maxPage, setMaxPage] = useState(0);
  const [pageToLoad, setPageToLoad] = useState(1);
  const [searchString, setSearchString] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  async function fetchMovies(searchQuery: string, page: number) {
    if (!allowFetching) return;
    setAllowFetching(false);
    searchQuery.replace(" ", "%20").replace("'", "%27");

    try {
      const response = await axios.get(
        !searchQuery
          ? "https://api.themoviedb.org/3/trending/movie/week"
          : `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&page=${page}`,

        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjJkNjNjZGRjMDY2ZDk5ZWQzZTgwNmQzMjY3MThjYSIsInN1YiI6IjYyNGVhNTRhYjc2Y2JiMDA2ODIzODc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zuuBq1c63XpADl8SQ_c62hezeus7VibE1w5Da5UdYyo",
          },
        }
      );

      setMovieList(
        page === 1
          ? [...response.data.results]
          : [...movieList, ...response.data.results]
      );

      if (response.data.results.length === 0) {
        setInfoMessage("No movie corresponding to your research");
      } else {
        setInfoMessage("");
      }

      setMaxPage(response.data.total_pages);
      if (pageToLoad <= maxPage) setPageToLoad(pageToLoad + 1);
    } catch {
      setInfoMessage("An error has occurred...");
    } finally {
      setTimeout(() => setAllowFetching(true), 1000);
    }
  }

  const infiniteScrollTrigger = useRef<HTMLDivElement>(null);

  const [infiniteScrollTriggerIsVisible, setInfiniteScrollTriggerIsVisible] =
    useState(false);

  useEffect(() => {
    fetchMovies("", pageToLoad);

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setInfiniteScrollTriggerIsVisible(entry.isIntersecting);
    });
    if (infiniteScrollTrigger.current)
      observer.observe(infiniteScrollTrigger.current);
  }, []);

  useEffect(() => {
    if (infiniteScrollTriggerIsVisible && pageToLoad <= maxPage) {
      fetchMovies(searchString, pageToLoad);
    }
  }, [infiniteScrollTriggerIsVisible]);

  return (
    <main className="p-8 flex flex-col items-center ">
      <SearchBar
        fetchMovies={fetchMovies}
        allowFetching={allowFetching}
        searchString={searchString}
        setSearchString={setSearchString}
        pageToLoad={pageToLoad}
        setPageToLoad={setPageToLoad}
      />
      <div className="mt-4 flex flex-wrap gap-5 justify-center">
        {movieList.map((movie, index) => (
          <div key={index}>
            <MovieThumbnail movie={movie} />
          </div>
        ))}
      </div>
      {infoMessage && <div>{infoMessage}</div>}
      <div className="w-full h-5" ref={infiniteScrollTrigger}></div>
    </main>
  );
}
