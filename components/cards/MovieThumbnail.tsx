import { Movie } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

export default function MovieThumbnail({ movie }: { movie: Movie }) {
  return (
    <Link className="flex flex-col items-center" href={`/movie/${movie.id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        alt={`poster of ${movie.title}`}
        width={185}
        height={330}
      />
      <div>{movie.title}</div>
    </Link>
  );
}
