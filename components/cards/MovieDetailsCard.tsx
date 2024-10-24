import { Movie } from "@/app/page";
import Image from "next/image";
export default function MovieDetailsCard({
  movie,
  cast,
}: {
  movie: Movie;
  cast: string;
}) {
  return (
    <div className="bg-greyBackground shadow-md rounded-xl p-5 flex flex-col md:flex-row md:items-start items-center gap-5">
      {movie.poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={`poster of ${movie.title}`}
          width={300}
          height={600}
        />
      ) : (
        <div className="text-gray-500 h-1/2 w-72 flex flex-col justify-center items-center">
          <div>(Poster unavailable)</div>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">{movie.title}</div>
        <div className="font-bold">Overview :</div>
        <div>{movie.overview}</div>
        <div className="font-bold">Cast :</div>
        <div>{cast}.</div>
      </div>
    </div>
  );
}
