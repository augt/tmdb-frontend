import { Movie } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

export default function MovieThumbnail({ movie }: { movie: Movie }) {
  return (
    <Link
      className="flex flex-col items-center justify-between max-w-48 bg-greyBackground shadow-md rounded-xl p-2"
      href={`/movie/${movie.id}`}
    >
      {movie.poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={`poster of ${movie.title}`}
          width={185}
          height={330}
        />
      ) : (
        <div className="text-gray-500 h-1/2 w-44 flex flex-col justify-center items-center">
          <div>(Poster unavailable)</div>
        </div>
      )}

      <div className="mt-2 text-center">{movie.title}</div>
    </Link>
  );
}
