import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkBackground text-lightTextColor p-4">
      <Link href="https://developer.themoviedb.org/docs/getting-started">
        Documentation de l&apos;API TMDB
      </Link>
    </footer>
  );
}
