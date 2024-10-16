import MovieDetailsCard from "@/components/cards/MovieDetailsCard";
import axios from "axios";
import Link from "next/link";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}`,

    {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjJkNjNjZGRjMDY2ZDk5ZWQzZTgwNmQzMjY3MThjYSIsInN1YiI6IjYyNGVhNTRhYjc2Y2JiMDA2ODIzODc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zuuBq1c63XpADl8SQ_c62hezeus7VibE1w5Da5UdYyo",
      },
    }
  );
  const movie = response.data;

  return (
    <main className="p-8 flex flex-col gap-4">
      <Link
        href="/"
        className="bg-darkBackground text-lightTextColor p-2 w-fit rounded-full"
      >
        Back
      </Link>

      <MovieDetailsCard movie={movie} />
    </main>
  );
}
