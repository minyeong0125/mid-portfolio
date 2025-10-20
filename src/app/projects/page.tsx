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
              className="text-[#76B5FF] hover:text-white transition-colors duration-700" // 마지막 항목 mr-4 제거
            >
              Team
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center w-full flex-grow text-center px-4 py-16">
        <section className="w-full max-w-4xl mb-20">
          <h2 className="text-white text-4xl font-extrabold mb-12 drop-shadow-lg">
            1학기 Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-md">
                WebDemo
              </h3>

              <Link
                href="https://web-demo-eosin.vercel.app/"
                target="_blank"
                className="block w-full h-48 rounded-lg overflow-hidden border-4 border-[#FFD93B] shadow-md mb-6 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/다운로드.jpeg"
                  alt="Project B Screenshot"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </Link>

              <Link
                href="https://github.com/minyeong0125/HCJDEMO"
                target="_blank"
                className="bg-[#FFD93B] text-[#76B5FF] font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#FFD93B] transition-colors duration-700"
              >
                GitHub Link
              </Link>
            </div>

            <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-md">
                HTML
              </h3>

              <Link
                href="https://html1-rosy.vercel.app/"
                target="_blank"
                className="block w-full h-48 rounded-lg overflow-hidden border-4 border-[#FFD93B] shadow-md mb-6 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/다운로드1.jpeg"
                  alt="Project B Screenshot"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </Link>

              <Link
                href="https://github.com/minyeong0125/html1"
                target="_blank"
                className="bg-[#FFD93B] text-[#76B5FF] font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#FFD93B] transition-colors duration-700"
              >
                GitHub Link
              </Link>
            </div>

            <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-md">
                중간 개인 프로젝트
              </h3>

              <Link
                href="https://homepage-nine-ochre.vercel.app/"
                target="_blank"
                className="block w-full h-48 rounded-lg overflow-hidden border-4 border-[#FFD93B] shadow-md mb-6 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/다운로드2.jpeg"
                  alt="Project B Screenshot"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </Link>

              <Link
                href="https://github.com/minyeong0125/homepage"
                target="_blank"
                className="bg-[#FFD93B] text-[#76B5FF] font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#FFD93B] transition-colors duration-700"
              >
                GitHub Link
              </Link>
            </div>

            <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-md">
                중간 팀 프로젝트
              </h3>

              <Link
                href="https://teamproject-six.vercel.app/"
                target="_blank"
                className="block w-full h-48 rounded-lg overflow-hidden border-4 border-[#FFD93B] shadow-md mb-6 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/다운로드3.jpeg"
                  alt="Project B Screenshot"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </Link>

              <Link
                href="https://github.com/minyeong0125/teamproject"
                target="_blank"
                className="bg-[#FFD93B] text-[#76B5FF] font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#FFD93B] transition-colors duration-700"
              >
                GitHub Link
              </Link>
            </div>

            <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-md">
                기말 개인 프로젝트
              </h3>

              <Link
                href="https://portfolio-dusky-six-54.vercel.app/index.html"
                target="_blank"
                className="block w-full h-48 rounded-lg overflow-hidden border-4 border-[#FFD93B] shadow-md mb-6 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/다운로드4.jpeg"
                  alt="Project B Screenshot"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </Link>

              <Link
                href="https://github.com/minyeong0125/portfolio"
                target="_blank"
                className="bg-[#FFD93B] text-[#76B5FF] font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#FFD93B] transition-colors duration-700"
              >
                GitHub Link
              </Link>
            </div>

            <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-md">
                기말 팀 프로젝트
              </h3>

              <Link
                href="https://teamfinal.vercel.app/"
                target="_blank"
                className="block w-full h-48 rounded-lg overflow-hidden border-4 border-[#FFD93B] shadow-md mb-6 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/다운로드5.jpeg"
                  alt="Project B Screenshot"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </Link>

              <Link
                href="https://github.com/minyeong0125/teamfinal"
                target="_blank"
                className="bg-[#FFD93B] text-[#76B5FF] font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#FFD93B] transition-colors duration-700"
              >
                GitHub Link
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl">
          <h2 className="text-white text-3xl font-bold mb-12 drop-shadow-lg">
            2학기 Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-md">
                clerk-app
              </h3>

              <Link
                href="https://clerk-app-teal.vercel.app/"
                target="_blank"
                className="block w-full h-48 rounded-lg overflow-hidden border-4 border-[#FFD93B] shadow-md mb-6 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/다운로드6.jpeg"
                  alt="Project B Screenshot"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </Link>

              <Link
                href="https://github.com/minyeong0125/clerk-app"
                target="_blank"
                className="bg-[#FFD93B] text-[#76B5FF] font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#FFD93B] transition-colors duration-700"
              >
                GitHub Link
              </Link>
            </div>

            <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-md">
                중간 개인 프로젝트
              </h3>

              <Link
                href="https://mid-portfolio-gamma.vercel.app/"
                target="_blank"
                className="block w-full h-48 rounded-lg overflow-hidden border-4 border-[#FFD93B] shadow-md mb-6 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/다운로드7.jpeg"
                  alt="Project B Screenshot"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </Link>

              <Link
                href="https://github.com/minyeong0125/mid-portfolio"
                target="_blank"
                className="bg-[#FFD93B] text-[#76B5FF] font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#FFD93B] transition-colors duration-700"
              >
                GitHub Link
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
