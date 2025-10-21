import Image from 'next/image';
import Link from 'next/link';

export default function Projets() {
  return (
    <div className="min-h-screen bg-[#76B5FF] flex flex-col">
      <nav className="bg-[#FFD93B] py-4 px-8">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-[#76B5FF] font-extrabold">Hi!</div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            <Link
              href="/about"
              className="text-[#76B5FF] hover:text-white mr-4 transition-colors duration-700"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-[#76B5FF] hover:text-white mr-4 transition-colors duration-700"
            >
              Projects
            </Link>
            <Link
              href="/team"
              className="text-[#76B5FF] hover:text-white transition-colors duration-700"
            >
              Team
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center flex-grow text-center px-4 py-16">
        <h1 className="text-white text-5xl sm:text-4xl font-extrabold mb-4 drop-shadow-lg tracking-wider">
          Welcome to Minyeong&apos;s Page!
        </h1>
        <p className="text-white text-2xl sm:text-2xl font-semibold mb-12 drop-shadow-md">
          92410756 박민영
        </p>

        <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-[#FFD93B] shadow-lg mb-8">
          <Image
            src="/1.jpeg"
            alt="Character"
            width={256}
            height={256}
            className="object-cover"
            priority
          />
        </div>

        <a
          href="https://github.com/minyeong0125"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFD93B] text-[#76B5FF] font-extrabold py-3 px-10 rounded-full 
          shadow-xl hover:bg-white hover:text-[#76B5FF] transition-all duration-300 text-lg border-2 border-[#FFD93B]
          transform hover:translate-y-[-2px]"
        >
          My GitHub
        </a>
      </main>
    </div>
  );
}
