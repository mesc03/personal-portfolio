export default function Home() {
  return (
    <div className="min-h-screen bg-[#d1d1d1]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#d1d1d1] border-b border-black z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <ul className="flex justify-center gap-16 text-sm">
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

      {/* Main Content */}
      <main className="pt-24 px-16 pb-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row gap-24 items-center min-h-[75vh]">
            {/* Left side - Title */}
            <div className="md:w-[40%]">
              <h1 className="text-[6rem] md:text-[7rem] leading-none font-normal lowercase tracking-tight">
                about me
              </h1>
            </div>

            {/* Right side - Description */}
            <div className="md:w-[60%]">
              <p className="text-[1rem] leading-[1.75] tracking-normal">
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
