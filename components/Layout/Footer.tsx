import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkBackground text-lightTextColor p-8 flex flex-col gap-3">
      <Link
        href="https://developer.themoviedb.org/docs/getting-started"
        className="underline"
      >
        Documentation of the TMDB API
      </Link>
      <Link href="https://www.themoviedb.org/" className="underline">
        The movie DB
      </Link>
    </footer>
  );
}
