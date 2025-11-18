export default function Home() {
  return (
    <div className="min-h-screen bg-[#d1d1d1]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 lg:px-0">
        <header className="pt-12 pb-8">
          <nav>
            <ul className="flex justify-center gap-24 text-2xl">
              <li>
                <a href="#projects" className="hover:underline">
                  projects
                </a>
              </li>
              <li>
                <a href="#home" className="hover:underline">
                  home
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:underline">
                  contacts
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-1 pb-20">
          <div className="grid gap-12 md:grid-cols-[330px_1fr] md:gap-24 md:items-start">
            <div className="flex justify-start">
              <h1 className="text-[6rem] leading-none font-normal lowercase tracking-tight">
                about me
              </h1>
            </div>
            <div className="max-w-[520px]">
              <p className="text-[1.05rem] leading-[1.9] tracking-wide">
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
