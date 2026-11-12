import avatar from "../assets/avtar.png";

function Home() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center px-5 sm:px-8 lg:px-16 py-14"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
        {/* Intro */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e6dfd5] bg-[#fffefa] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#718477] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#718477]" />
            Welcome to my portfolio
          </span>

          <p className="mb-3 text-lg font-medium text-[#73766f] sm:text-xl">
            Hello, I’m
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#252a27] sm:text-5xl lg:text-6xl">
            Amit Kumar<span className="text-[#b76e52]">.</span>
          </h1>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#b76e52] sm:text-4xl lg:text-5xl">
            Software Developer
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#626760] sm:text-lg">
            Computer Science & Engineering student with a strong foundation in
            Data Structures & Algorithms and full-stack development. I build
            practical web applications using Node.js, Express, MongoDB, React,
            and SQL, with a focus on clean APIs and reliable user experiences.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#project"
              className="rounded-full bg-[#b76e52] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#b76e52]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#96563f]"
            >
              Explore Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d8cec2] bg-[#fffefa] px-7 py-3.5 text-sm font-semibold text-[#252a27] transition duration-300 hover:-translate-y-1 hover:border-[#b76e52] hover:text-[#96563f]"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-[#73766f]">
            <span className="h-px w-10 bg-[#b76e52]" />
            Building, learning, and solving problems
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative w-64 sm:w-72 lg:w-[350px]">
            <div className="absolute -inset-4 rotate-6 rounded-[2rem] bg-[#e8d8cd]" />
            <div className="absolute -inset-4 -rotate-6 rounded-[2rem] border border-[#c7d0c7]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border-[10px] border-[#fffefa] bg-[#e9e4da] shadow-[0_24px_60px_rgba(49,43,35,0.14)]">
              <img
                src={avatar}
                alt="Amit Kumar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl border border-[#e6dfd5] bg-[#fffefa] px-5 py-3 shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#73766f]">
                Focus
              </p>
              <p className="mt-1 text-sm font-bold text-[#252a27]">
                Full-stack development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;