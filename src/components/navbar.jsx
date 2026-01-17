import { useState } from "react";
import {
  FiHome,
  FiUser,
  FiLayers,
  FiFileText,
  FiMail,
} from "react-icons/fi";
function Navbar() {
   const [open, setOpen] = useState(false);
  return (
    <div className="w-screen h-20 flex justify-center items-center ">
      <div
        className="
          w-[90%] max-w-6xl
          rounded-full
          bg-white/10 backdrop-blur-xl
          border border-white/20
          px-6 py-3
          flex items-center justify-between md:justify-start
          text-white
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2 md:w-[25%]">
          <div className="
            w-12 h-10
            rounded-full
            border-2 border-purple-400
            relative
            flex items-center justify-center
            animate-[pulse_2s_ease-in-out_infinite]
          ">
            <span className="
              absolute inset-2
              rounded-full
              border border-purple-500
              animate-[spin_2s_linear_infinite]
            "></span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
        <li> <a href="#home" className="hover:text-purple-500 flex items-center gap-4">
    <FiHome size={20} />
    Home
  </a>
  </li>
  <li>
    <a href="#skills" className="hover:text-purple-500 flex items-center gap-4">
    <FiUser size={20} />
    Skills
  </a>
  </li>
  <a href="#project" className="hover:text-purple-500 flex items-center gap-4">
    <FiLayers size={20} />
    Projects
  </a>
  <a href="" className="hover:text-purple-500 flex items-center gap-4">
    <FiFileText size={20} />
    Resume
  </a>
  <a href="#contact" className="hover:text-purple-500 flex items-center gap-4">
    <FiMail size={20} />
    Contact
  </a>
        </ul>

       {/* Mobile Hamburger */}
<div
  className="md:hidden flex flex-col gap-1 cursor-pointer z-50"
  onClick={() => setOpen(true)}
>
  <span className="w-6 h-[2px] bg-white"></span>
  <span className="w-6 h-[2px] bg-white"></span>
  <span className="w-6 h-[2px] bg-white"></span>
</div>

      </div>

      {/* BACKDROP */}

{open && (
  <div
    className="
      fixed inset-0
      bg-black/40
      backdrop-blur-sm
      z-40
    "
    onClick={() => setOpen(false)}
  />
)}

{/* SLIDE MENU */}
<div
  className={`
    fixed top-0 right-0 h-full
    w-[75%] max-w-xs
    bg-white/10 backdrop-blur-xl
    border-l border-white/20
    text-white
    z-50
    transform transition-transform duration-300 ease-out
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
>
  {/* Close button */}
  <div className="flex justify-end p-6">
    <button
      className="text-2xl"
      onClick={() => setOpen(false)}
    >
      ✕
    </button>
  </div>

  {/* Menu items */}
  <ul className="flex flex-col gap-6 px-8 text-lg font-medium items-center mt-15 gap-10 "> 
    <a href="#home"  className='hover:text-purple-500 flex items-center gap-2'onClick={() => setOpen(false)}> <FiHome size={16} />Home</a>
    <a href="#skills" className='hover:text-purple-500 flex items-center gap-2' onClick={() => setOpen(false)}> <FiUser size={16} />Skills</a>
    <a href="#project" className='hover:text-purple-500 flex items-center gap-2' onClick={() => setOpen(false)}> <FiLayers size={16} />Projects</a>
    <li className='hover:text-purple-500 flex items-center gap-2' onClick={() => setOpen(false)}><FiFileText size={16} />Resume</li>
    <li className='hover:text-purple-500 flex items-center gap-2' onClick={() => setOpen(false)}><FiMail size={16} />Contact</li>
  </ul>
</div>


    </div>
  );
}
export default Navbar