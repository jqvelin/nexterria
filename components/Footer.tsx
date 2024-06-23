import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-14 md:h-16 w-11/12 mt-6 px-6 rounded-xl bg-white flex items-center gap-4 justify-start shadow-md whitespace-nowrap overflow-x-auto">
      <Link href="https://github.com/jqvelin" target="_blank">
        <Image
          src="/logos/github.png"
          width={0}
          height={0}
          sizes="100vw"
          className="min-w-10"
          alt="GitHub"
        />
      </Link>
    </footer>
  );
}
