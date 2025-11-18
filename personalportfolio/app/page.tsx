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
  )