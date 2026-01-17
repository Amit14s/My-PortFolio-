import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-4 sm:px-8 lg:px-20"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-purple-300">
          Let’s Connect
        </h2>
        <p className="mt-3 text-purple-200/80">
          Open to internships, projects, and learning opportunities
        </p>
      </div>

      {/* Contact Card */}
      <div className="max-w-4xl mx-auto">
        <div
          className="
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl p-10
            text-purple-100
            shadow-[0_25px_50px_rgba(0,0,0,0.4)]
          "
        >
          {/* Contact Items */}
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Email */}
            <a
              href="mailto:amitmouar098@gmail.com"
              className="
                flex items-center gap-4
                p-4 rounded-xl
                bg-white/5
                hover:bg-white/10
                transition
              "
            >
              <FiMail size={22} className="text-purple-400" />
              <span>amitmouar098@gmail.com</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/amit14s"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4
                p-4 rounded-xl
                bg-white/5
                hover:bg-white/10
                transition
              "
            >
              <FiGithub size={22} className="text-purple-400" />
              <span>github.com/amit14s</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/amit-kumar-a6bb10313/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4
                p-4 rounded-xl
                bg-white/5
                hover:bg-white/10
                transition
              "
            >
              <FiLinkedin size={22} className="text-purple-400" />
              <span>linkedin.com/in/amit-kumar</span>
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="
                flex items-center gap-4
                p-4 rounded-xl
                bg-purple-600/30
                hover:bg-purple-600/40
                transition
              "
            >
              <FiDownload size={22} className="text-purple-200" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg font-medium mb-4">
              Interested in working together?
            </p>
            <a
              href="mailto:amitmouar098@gmail.com"
              className="
                inline-block
                px-8 py-3
                rounded-full
                bg-purple-600
                text-white font-semibold
                hover:-translate-y-1
                hover:shadow-[0_15px_30px_rgba(168,60,210,0.6)]
                transition-all duration-300
              "
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
