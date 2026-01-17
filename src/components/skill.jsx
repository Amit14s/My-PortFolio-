import { SiCplusplus, SiJavascript, SiMysql,SiHtml5,SiCss3,SiMongodb,

SiReact,SiRedux,SiGit,
  SiGithub,
  SiPostman,
  SiCodeforces } from "react-icons/si";
import { SiNodedotjs, SiExpress } from "react-icons/si";
import { FiServer } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { FaJava } from "react-icons/fa";
import { MdOutlineAccountTree, MdOutlineClass, MdOutlineAutorenew } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { BiLogoVisualStudio } from "react-icons/bi";

function Skill(){
return(
   <>
   <div id="skills" className=" min-h-screen pb-20 mt-20 ">
    <div className="text-center mt-5 text-4xl mb-[-50px] font-extrabold text-purple-300">Skills & Technologies</div>

    <b className="flex flex-row flex-wrap justify-center gap-10 mt-25">
           {/* programming and Querying */}
           <div
  className="
    flex flex-col
    h-70 w-100
    bg-white/15 backdrop-blur-xl
            border border-white/20
    rounded-3xl
    shadow-[25px_30px_15px_rgba(0,0,0,0.3)]
    hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
    transition-all duration-300
  "
>
  {/* Card Header */}
  <div
    className="
      text-center text-2xl font-semibold
      bg-purple-600
      py-3
      rounded-t-3xl
      text-white
    "
  >
    Programming & Querying
  </div>

  {/* Skills List */}
  <div className="flex flex-col gap-4 p-6 text-white">
    <div className="flex items-center gap-4">
      <SiCplusplus size={26} className="text-white/90" />
      <span className="text-lg">C / C++</span>
    </div>

    <div className="flex items-center gap-4">
      <SiJavascript size={26} className="text-yellow-300" />
      <span className="text-lg">JavaScript (ES6+)</span>
    </div>

    <div className="flex items-center gap-4">
      <SiMysql size={26} className="text-blue-300" />
      <span className="text-lg">SQL</span>
    </div>

    <div className="flex items-center gap-4">
  <FaJava size={26} className="text-orange-400" />
  <span className="text-lg">Java (Learning)</span>
</div>

    
  </div>
</div>
{/* Frontend Developmen */}
            <div
  className="
    flex flex-col
    h-70 w-100
    bg-white/15 backdrop-blur-xl
            border border-white/20
    rounded-3xl
    shadow-[25px_30px_15px_rgba(0,0,0,0.3)]
    hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
    transition-all duration-300
  "
>
  {/* Card Header */}
  <div
    className="
      text-center text-2xl font-semibold
      bg-purple-600
      py-3
      rounded-t-3xl
      text-white
    "
  >
    Frontend Development
  </div>

  {/* Skills List */}
  <div className="flex flex-col gap-4 p-6 text-white">
    <div className="flex items-center gap-4">
  <SiHtml5 size={26} className="text-orange-500" />
  <span>HTML5</span>
</div>

<div className="flex items-center gap-4">
  <SiCss3 size={26} className="text-blue-500" />
  <span>CSS3</span>
</div>

<div className="flex items-center gap-4">
  <SiJavascript size={26} className="text-yellow-300" />
  <span>JavaScript (Vanilla)</span>
</div>

<div className="flex items-center gap-4">
  <SiReact size={26} className="text-cyan-400" />
  <span>React</span>
</div>

<div className="flex items-center gap-4">
  <SiRedux size={26} className="text-purple-400" />
  <span>Redux Toolkit</span>
</div>

    
  </div>
</div>
{/*Backend Development  */}
    <div
  className="
    flex flex-col
    h-70 w-100
    bg-white/15 backdrop-blur-xl
            border border-white/20
    rounded-3xl
    shadow-[25px_30px_15px_rgba(0,0,0,0.3)]
    hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
    transition-all duration-300
  "
>
  {/* Card Header */}
  <div
    className="
      text-center text-2xl font-semibold
      bg-purple-600
      py-3
      rounded-t-3xl
      text-white
    "
  >
   Backend Development
  </div>

  {/* Skills List */}
  <div className="flex flex-col gap-4 p-6 text-white">
   <div className="flex items-center gap-4">
  <SiNodedotjs size={26} className="text-green-500" />
  <span>Node.js</span>
</div>

<div className="flex items-center gap-4">
  <SiExpress size={26} className="text-gray-200" />
  <span>Express.js</span>
</div>

<div className="flex items-center gap-4">
  <FiServer size={26} className="text-blue-400" />
  <span>RESTful APIs</span>
</div>

<div className="flex items-center gap-4">
  <MdSecurity size={26} className="text-yellow-400" />
  <span>JWT Authentication</span>
</div>

    
  </div>
</div>
    {/* Database Management */}

        <div
  className="
    flex flex-col
    h-70 w-100
  bg-white/15 backdrop-blur-xl
            border border-white/20
    rounded-3xl
    shadow-[25px_30px_15px_rgba(0,0,0,0.3)]
    hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
    transition-all duration-300
  "
>
  {/* Card Header */}
  <div
    className="
      text-center text-2xl font-semibold
      bg-purple-600
      py-3
      rounded-t-3xl
      text-white
    "
  >
   Database Management
  </div>

  {/* Skills List */}
  <div className="flex flex-col gap-4 p-6 text-white">
   <div className="flex items-center gap-4">
  <SiMongodb size={26} className="text-green-500" />
  <span>MongoDB</span>
</div>

<div className="flex items-center gap-4">
  <SiMongodb size={26} className="text-green-400" />
  <span>Mongoose (ODM)</span>
</div>

<div className="flex items-center gap-4">
  <SiMysql size={26} className="text-blue-500" />
  <span>MySQL (Querying)</span>
</div>

    
  </div>
</div>

{/* CS fundamentals */}        <div
  className="
    flex flex-col
    h-70 w-100
     bg-white/15 backdrop-blur-xl
            border border-white/20

    rounded-3xl
    shadow-[25px_30px_15px_rgba(0,0,0,0.3)]
    hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
    transition-all duration-300
  "
>
  {/* Card Header */}
  <div
    className="
      text-center text-2xl font-semibold
      bg-purple-600
      py-3
      rounded-t-3xl
      text-white
    "
  >
   CS Fundamentals
  </div>

  {/* Skills List */}
  <div className="flex flex-col gap-4 p-6 text-white">
    <div className="flex items-center gap-4">
  <MdOutlineAccountTree size={26} className="text-purple-400" />
  <span>Data Structures & Algorithms</span>
</div>

<div className="flex items-center gap-4">
  <MdOutlineClass size={26} className="text-blue-400" />
  <span>OOPs</span>
</div>

<div className="flex items-center gap-4">
  <FiDatabase size={26} className="text-green-400" />
  <span>DBMS</span>
</div>

<div className="flex items-center gap-4">
  <MdOutlineAutorenew size={26} className="text-yellow-400" />
  <span>SDLC (Agile)</span>
</div>

    
  </div>
</div>

{/* tools and Platform */}
    <div
  className="
    flex flex-col
    h-70 w-100
    bg-white/15 backdrop-blur-xl
            border border-white/20
    rounded-3xl
    shadow-[25px_30px_15px_rgba(0,0,0,0.3)]
    hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
    transition-all duration-300
  "
>
  {/* Card Header */}
  <div
    className="
      text-center text-2xl font-semibold
      bg-purple-600
      py-3
      rounded-t-3xl
      text-white
    "
  >
    Tools and Platforms
  </div>

  {/* Skills List */}
  <div className="flex flex-col gap-4 p-6 text-white">
    <div className="flex items-center gap-4">
  <SiGit size={24} className="text-orange-500" />
  <span>Git</span>
</div>

<div className="flex items-center gap-4">
  <SiGithub size={24} className="text-gray-200" />
  <span>GitHub</span>
</div>

<div className="flex items-center gap-4">
  <BiLogoVisualStudio size={24} className="text-blue-400" />
  <span>VS Code</span>
</div>

<div className="flex items-center gap-4">
  <SiPostman size={24} className="text-orange-400" />
  <span>Postman</span>
</div>

<div className="flex items-center gap-4">
  <SiCodeforces size={24} className="text-red-400" />
  <span>Codeforces</span>
</div>


    
  </div>
</div>
    </b>
   </div>
   </>

)
}
export default Skill