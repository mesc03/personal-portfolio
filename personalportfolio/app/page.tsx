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
      <main className="pt-32 px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Left side - Title */}
            <div className="md:w-1/3">
              <h1 className="text-6xl md:text-7xl font-normal lowercase">
                about me
              </h1>
            </div>

            {/* Right side - Description */}
            <div className="md:w-2/3 border-l-2 border-black pl-8">
              <p className="text-sm leading-relaxed">
                throughout my college years, i have done different projects that involved ai for strategy and 
                integrating it in a system to help aid lawyers, and lastly my thesis being gigantic ai in 
                education for constructive alignment, as well as created a machine learning model to also give 
                constructive alignment in school syllabi.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
