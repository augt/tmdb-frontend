"use client";
import MovieThumbnail from "@/components/cards/MovieThumbnail";
import SearchBar from "@/components/inputs/SearchBar";
import { Fragment, useState } from "react";

export type Movie = {
  title: string;
  poster_path: string | null;
  id: number;
  overview: string;
};

export default function Home() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  return (
    <main className="p-8 flex flex-col items-center ">
      <SearchBar setMovieList={setMovieList} />
      <div className="mt-4 flex flex-wrap gap-5 justify-center">
        {movieList.map((movie, index) => (
          <Fragment key={index}>
            <MovieThumbnail movie={movie} />
          </Fragment>
        ))}
      </div>
    </main>
  );
}
