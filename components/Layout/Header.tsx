import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-darkBackground flex justify-center h-24">
      <Image
        className="p-4"
        src="/logo.svg"
        alt="logo TMDB"
        height={24}
        width={184}
      />
    </header>
  );
}
