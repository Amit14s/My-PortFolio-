import ProjectCard from "./ProjectCard";
import { useState } from "react";
import useVisibleCards from '../hooks/useVisible'
function Projects(){
const projects = [
    {
    id: 1,

    title: "Clueso – Full Stack Web App",
    shortDesc: "Feedback management platform with secure authentication and dashboard features.",

    description:
      "A full-stack web application for collecting, managing, and analyzing user feedback with authentication, protected routes, and REST-based communication.",

    features: [
      "JWT & Google OAuth based authentication",
      "Email-based password reset system",
      "Protected dashboard for feedback management",
      "REST API communication between frontend and backend",
    ],

    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: ["JWT", "Google OAuth"],
      tools: ["Git", "GitHub", "Nodemailer"],
    },

    links: {
      github: "https://github.com/Amit14s/Clueso-clone-",
      live: "", 
    },

    image:"/projects/clueso.png", 
    category: "Full Stack",
    status: "Completed",
    year: 2025,
  },
  {
  id: 2,
  
  title: "EdTech Platform Backend API",
  shortDesc: "RESTful backend API for an educational platform supporting users, courses, authentication, and admin actions.",
  
  description:
    "A scalable REST API built for an EdTech platform that handles user authentication, course creation, content delivery, and admin controls, enabling frontend applications to interact with educational resources securely and efficiently.",
  
  features: [
    "User authentication & role-based access",
    "Course creation, retrieval, update and deletion",
    "Secure JWT session management",
    "REST API endpoints for content management"
  ],
  
  techStack: {
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB"],
    auth: ["JWT", "Bcrypt"],
    tools: ["Postman", "Git", "GitHub"]
  },
  
  links: {
    github: "https://github.com/Amit14s/EdTech-Platform-Backend-API",
    live: ""
  },
  
  image: '/projects/edtech.png', 
  category: "Backend API",
  status: "Completed",
  year: 2025,
}
,
   {
  id: 4,
  title: "Combined Small JS Projects",
  shortDesc: "A collection of interactive JavaScript mini-projects showcasing core frontend skills with DOM manipulation and dynamic UI.",
  
  description:
    "This repository includes multiple standalone JavaScript projects demonstrating fundamental skills in web development: calculator logic, dynamic lists (notes), quiz interaction, real-time weather API integration, classic games like Tic-Tac-Toe and Candy Crush, all built with HTML, CSS, and vanilla JavaScript.",

  features: [
    "Builds proficiency with DOM manipulation and events",
    "Interactive logic for games and quizzes",
    "Real-time API integration (weather app)",
    "Responsive layouts and user interaction"
  ],

  techStack: {
    frontend: ["HTML", "CSS", "JavaScript"],
    api: ["OpenWeather API (used by Weather App)"],
    tools: ["Git", "GitHub"]
  },

  links: {
    github: "https://github.com/Amit14s/Combined_Small_JS_Project",
    live: "https://amit14s.github.io/Combined_Small_JS_Project/" 
  },

  image: "/projects/combined.png", 
  category: "Frontend Projects",
  status: "Completed",
  year: 2025,
}
,  {
  id: 5,
  title: "Pokémon API React App",
  shortDesc: "A React app that fetches and displays Pokémon data from a public API with filtering and detail views.",
  
  description:
    "This project is a fully responsive React application that consumes the public Pokémon API to list Pokémon, show details, and support search and filtering. It demonstrates dynamic React UI, state management, API integration, and responsive layout design.",

  features: [
    "Fetches Pokémon data using a public REST API",
    "Displays list and detail views",
    "Real-time search and filters",
    "Responsive grid layout"
  ],

  techStack: {
    frontend: ["React", "JavaScript", "CSS"],
    api: ["Pokémon Public API"],
    tools: ["Git", "GitHub"]
  },

  links: {
    github: "https://github.com/Amit14s/Pokemon-api-react-app",
    live: "https://pokemonapiamit.vercel.app/" 
  },

  image: "/projects/pokemon.png", 
  category: "Frontend Projects",
  status: "Completed",
  year: 2025,
}

];
const CARD_WIDTH = 385; // card width + gap
const visibleCards = useVisibleCards();

const [index, setIndex] = useState(0);

const maxIndex = Math.max(0, projects.length - visibleCards);

const next = () => {
  setIndex((prev) => Math.min(prev + 1, maxIndex));
};

const prev = () => {
  setIndex((prev) => Math.max(prev - 1, 0));
};

return (
    
   <div id="project" className="relative min-w-screen mt-10 p-10 m-auto ">
   <div className="text-center mt-5 text-5xl  font-extrabold text-purple-300">Projects</div>
   <div className="text-center mt-2 text-1xl mb-20 font-medium text-purple-300">Some of MY Work</div>
  {/* LEFT ARROW */}
 <div className="relative w-full flex">
  {/* LEFT ARROW */}
  <button
    onClick={() => {
      document.getElementById("projects").scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }}
    className="
      absolute left-1 mt-75 ml-[-25px]
      z-10 text-3xl text-white
    "
  >
    ◀
  </button>

  {/* SCROLL AREA */}
  <div
    id="projects"
    className="
    
    m-auto
      flex gap-6
      overflow-x-auto
      scroll-smooth
      snap-x snap-mandatory
      px-7
      scrollbar-hide
      [&::-webkit-scrollbar]:h-4 [&::-webkit-scrollbar-track]:bg-purple-950 [&::-webkit-scrollbar-thumb]:bg-purple-500
    "
  >
  {projects.map((project, i) => (
      <ProjectCard key={i} project={project} />
    ))}
  </div>

  {/* RIGHT ARROW */}
  <button
    onClick={() => {
      document.getElementById("projects").scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }}
    className="
      absolute right-1 mt-75 mr-[-25px]
      z-10 text-3xl text-white
    "
  >
    ▶
  </button>
</div>

</div>

)
}
export default Projects