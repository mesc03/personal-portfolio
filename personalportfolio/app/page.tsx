import Link from "next/link";

export default function Home() {
  return (
    <div className = "min-h-screen bg-[#d1d1d1]">
      <div className= "mx-auto flex min-h-screen w-full max-w-[1100px] flex-col px-6 lg:px-0" >
        <header className = "pt-10 pb-6">
          <nav>
            <ul className = "flex justify-center gap-24 text-[1.5rem]">
              <li>
                <Link href="#projects" className="hover:underline">
                  projects
                </Link>
                </li>
              <li>
                <Link href="#home" className="hover:underline">
                  home
                </Link>
              </li>
              <Link href="#contacts" className="hover:underline">
                  contacts
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1 pb-20">
          <div className="grid gap-12 md:grid-cols-[360px_minmax(0,1fr)] md:gap-24 md:items-start">
            <div className="flex justify-start">
              <h1 className="text-[6.25rem] leading-none font-normal lowercase tracking-tight">
                about me
              </h1>
              </div>
            <div className="max-w-[500px]">
              <p className="text-[1.05rem] font-medium leading-[1.9] tracking-wide">
                i am michael patrick escalambre, or pat in short. i am in my fourth year college at asia
                pacific college. i am pursuing computer science, specifically software and systems. this
                portfolio alone is created purely because i am interested to showcase my skills as i progress
                further.
                </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}