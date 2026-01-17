import { FiBookOpen } from "react-icons/fi";

function Education() {
  return (
    <section
      id="education"
      className="w-full py-20 px-4 sm:px-8 lg:px-20"
    >
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-purple-300">
          Education
        </h2>
        <p className="mt-3 text-purple-200/80">
          Academic background and performance
        </p>
      </div>

      {/* Education Cards */}
      <div className="max-w-5xl mx-auto space-y-8">

        {/* B.E. */}
        <div
          className="
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl p-8
            text-purple-100
            shadow-[0_20px_40px_rgba(0,0,0,0.35)]
            hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
            transition-all duration-300
          "
        >
          <div className="flex items-start gap-4">
            <FiBookOpen size={28} className="text-purple-400 mt-1" />

            <div>
              <h3 className="text-xl font-semibold">
                B.E. in Computer Science & Engineering
              </h3>

              <p className="text-sm text-purple-200/80 mt-1">
                Panjab University – Swami Sarvanand Giri Regional Centre, Hoshiarpur
              </p>

              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <span className="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-400/30">
                  2024 – 2028
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-400/30">
                  CGPA: 8.6 / 10 (Till 2nd Semester)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Class XII */}
        <div
          className="
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl p-8
            text-purple-100
            shadow-[0_20px_40px_rgba(0,0,0,0.35)]
            hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
            transition-all duration-300
          "
        >
          <div className="flex items-start gap-4">
            <FiBookOpen size={28} className="text-purple-400 mt-1" />

            <div>
              <h3 className="text-xl font-semibold">
                BSEB Class XII (PCM Stream)
              </h3>

              <p className="text-sm text-purple-200/80 mt-1">
                Maharaja College, Ara, Bihar
              </p>

              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <span className="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-400/30">
                  2022 – 2024
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-400/30">
                  Percentage: 86%
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
