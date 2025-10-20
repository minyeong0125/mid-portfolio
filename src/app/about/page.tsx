import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-[#76B5FF] flex flex-col items-center">
      <nav className="bg-[#FFD93B] py-4 px-8 w-full sticky top-0 z-10 shadow-md">
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
              className="text-[#76B5FF] hover:text-white transition-colors duration-700" // 마지막 항목 mr-4 제거
            >
              Team
            </Link>
          </div>
        </div>
      </nav>

      <div className="w-full max-w-xl mx-auto flex flex-col p-4 flex-grow justify-center">
        <div className="pt-4 pb-12 text-center">
          <h1 className="text-white text-4xl font-extrabold drop-shadow-lg">
            About
          </h1>
        </div>

        <div className="mb-6 bg-gray-50 p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02] border-4 border-[#FFD93B] gap-10">
          <div className="flex items-center gap-6 md:gap-8 flex-row-reverse justify-center text-left">
            <div className="flex-shrink-0">
              <Image
                src="/다운.jpeg"
                alt="about"
                width={150}
                height={150}
                className="rounded-xl object-cover border-2 border-[#76B5FF] shadow-md"
              />
            </div>

            <div>
              <h2 className="text-2xl text-[#76B5FF] font-bold mb-2">
                About me
              </h2>
              <p className="mt-1 text-neutral-900">이름: 박민영</p>
              <p className="mt-1 text-neutral-900">생년월일: 20051215</p>
              <p className="mt-1 text-neutral-900">
                이메일 : minyeong05125@gmail.com
              </p>
              <p className="mt-1 text-neutral-900">
                GitHub :
                <Link
                  href="https://github.com/minyeong0125"
                  className="text-neutral-900 hover:underline ml-1"
                >
                  minyeong0125
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-gray-50 p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02] border-4 border-[#FFD93B]">
          <div className="flex items-center gap-30 justify-center text-left">
            <div className="flex-shrink-0">
              <Image
                src="/다운1.jpeg"
                alt="skills"
                width={150}
                height={150}
                className="rounded-full object-cover border-2 border-[#76B5FF] shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl text-[#76B5FF] font-bold mb-2">Skills</h2>
              <p className="mt-1 text-neutral-900">HTML</p>
              <p className="mt-1 text-neutral-900">CSS</p>
              <p className="mt-1 text-neutral-900">JavaScript</p>
              <p className="mt-1 text-neutral-900">Python</p>
              <p className="mt-1 text-neutral-900">Next.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
