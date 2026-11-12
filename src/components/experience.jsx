
import {
  FiAward,
  FiCode,
  FiLayers,
} from "react-icons/fi";

function Experience() {
  const cardClass = `
    bg-white
    border border-[#E6DFD5]
    rounded-2xl p-7
    text-[#252A27]
    shadow-[0_8px_30px_rgba(37,42,39,0.06)]
    hover:-translate-y-2
    hover:shadow-[0_18px_40px_rgba(37,42,39,0.12)]
    transition-all duration-300
  `;

  const iconClass = "text-[#B76E52] mb-5";

  return (
    <section
      id="experience"
      className="w-full py-20 px-4 sm:px-8 lg:px-20"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-[#252A27]">
          Experience & Achievements
        </h2>

        <p className="mt-3 text-[#718477]">
          Building projects, solving problems, and continuously growing
          as a software engineer.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

        {/* Card 1: Problem Solving */}
        <div className={cardClass}>
          <FiCode size={34} className={iconClass} />

          <h3 className="text-xl font-bold mb-4">
            Problem Solving
          </h3>

          <ul className="space-y-3 text-sm text-[#555D57] leading-relaxed">
            <li>
              • Solved 600+ problems on LeetCode, including 350+ Medium,
              150+ Easy, and 90+ Hard problems.
            </li>

            <li>
              • Consistent practice of Data Structures and Algorithms,
              including Dynamic Programming, Graphs, Trees, and Segment Trees.
            </li>

            <li>
              • Achieved a 982 rating on Codeforces.
            </li>

            <li>
              • Strong focus on algorithm optimization, problem-solving
              patterns, and time-space complexity.
            </li>
          </ul>
        </div>

        {/* Card 2: Full-Stack Engineering */}
        <div className={cardClass}>
          <FiLayers size={34} className={iconClass} />

          <h3 className="text-xl font-bold mb-4">
            Full-Stack Engineering
          </h3>

          <ul className="space-y-3 text-sm text-[#555D57] leading-relaxed">
            <li>
              • Developed a full-stack EdTech LMS with Admin, Instructor,
              and Student roles.
            </li>

            <li>
              • Integrated Razorpay payments, JWT authentication,
              and role-based access control.
            </li>

            <li>
              • Building a real-time chat application using Socket.IO,
              React, Node.js, and MongoDB.
            </li>

            <li>
              • Designed REST APIs, database schemas, file uploads,
              and authentication workflows.
            </li>

            <li>
              • Experienced with Git, GitHub, Postman, Cloudinary,
              and deployment workflows.
            </li>
          </ul>
        </div>

        {/* Card 3: Achievements & Leadership */}
       {/* Card 3: Achievements */}
<div className={cardClass}>
  <FiAward size={34} className={iconClass} />

  <h3 className="text-xl font-bold mb-4">
    Achievements & Competitions
  </h3>

  <ul className="space-y-3 text-sm text-[#555D57] leading-relaxed">
    <li>
      • Participated in Smart India Hackathon (SIH) and
      developed a full-stack civic reporting prototype.
    </li>

    <li>
      • Earned a 4-Star C++ badge on HackerRank.
    </li>

    <li>
      • Shortlisted for Hackvega 2.0 Hackathon.
    </li>

    <li>
      • Continuously exploring competitive programming
      and collaborative software development.
    </li>
  </ul>
</div>
      </div>
    </section>
  );
}

export default Experience;
