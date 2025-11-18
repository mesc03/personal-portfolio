export default function Home() {
  return (
    <div className="min-h-screen bg-[#d1d1d1]">
      <nav className="fixed top-0 left-0 right-0 bg-[#d1d1d1] z-50">
        <div className="max-w-full px-20 py-5">
          <ul className="flex justify-center gap-36 text-2xl">
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
        </div>
      </nav>
      <main className="pt-48 px-20 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-32 items-center min-h-[50vh]">
            <div className="md:w-[40%] flex justify-start">
              <h1 className="text-[6.5rem] leading-none font-normal lowercase tracking-tight">
                about me
              </h1>
            </div>
            <div className="md:w-[60%]">
              <p className="text-[1rem] leading-[1.8] tracking-normal">
                i am michael patrick escalambre, or pat in short. i am in my fourth year college at asia 
                pacific college. i am pursuing computer science, specifically software and systems. this 
                portfolio alone is created purely because i am interested to showcase my skills as i progress 
                further.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
