import {
  FiAward,
  FiCode,
  FiServer,
} from "react-icons/fi";

function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-20 px-4 sm:px-8 lg:px-20"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-purple-300">
          Experience & Achievements
        </h2>
        <p className="mt-3 text-purple-200/80">
          Practical experience through projects, problem-solving, and competitions
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-2xl p-6
          text-purple-100
          shadow-[0_20px_40px_rgba(0,0,0,0.35)]
          hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
          transition-all duration-300
        ">
          <FiAward size={32} className="text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">
            Hackathons & Achievements
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Smart India Hackathon (SIH): Built a full-stack civic reporting prototype</li>
            <li>• 4-Star C++ rating on HackerRank</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-2xl p-6
          text-purple-100
          shadow-[0_20px_40px_rgba(0,0,0,0.35)]
          hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
          transition-all duration-300
        ">
          <FiCode size={32} className="text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">
            Problem Solving
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Solved 400+ DSA problems on LeetCode & Codeforces</li>
            <li>• Includes 100+ Medium and 12 Hard problems</li>
            <li>• Strong focus on algorithms & data structures</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-2xl p-6
          text-purple-100
          shadow-[0_20px_40px_rgba(0,0,0,0.35)]
          hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
          transition-all duration-300
        ">
          <FiServer size={32} className="text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">
            Backend Development
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Built backend services using Node.js, Express & MongoDB</li>
            <li>• Implemented JWT authentication & role-based access</li>
            <li>• Designed & tested REST APIs using Postman</li>
            <li>• Actively learning Java & applying OOP concepts</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;
