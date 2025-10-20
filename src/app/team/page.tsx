import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
  const teamMembers = [
    {
      name: '92410756 박민영',
      img: '/alsdud.png',
      github: 'https://github.com/minyeong0125',
    },
    {
      name: '92410794 송미강',
      img: '/alrkd.png',
      github: 'https://github.com/Junbyung2',
    },
    {
      name: '92410823 원종은',
      img: '/whddms.png',
      github: 'https://github.com/euniii0224',
    },
    {
      name: '92415548 이성혜',
      img: '/tjdgP.png',
      github: 'https://github.com/SuNghYe414',
    },
    {
      name: '92410990 허다현',
      img: '/ekgus.png',
      github: 'https://github.com/chick127',
    },
  ];

  return (
    <div className="min-h-screen bg-[#76B5FF] flex flex-col ">
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

      <div className="flex flex-col items-center flex-grow text-center pt-40 pb-12 ">
        <h1 className="text-white text-4xl font-extrabold mb-12 drop-shadow-lg">
          Team 미정!
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-[#76B5FF] p-2 rounded-xl"
            >
              <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-[#FFD93B] shadow-lg mb-3 bg-amber-50">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={170}
                  height={170}
                  className="object-cover"
                />
              </div>

              <p className="text-white text-xl font-bold mb-2 drop-shadow-lg">
                {member.name}
              </p>

              <Link
                href={member.github}
                target="_blank"
                className="bg-[#FFD93B] text-[#76B5FF] font-semibold py-1 px-4 rounded-full 
          hover:bg-white hover:text-[#FFD93B] transition-colors duration-700 text-sm"
              >
                GitHub
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
