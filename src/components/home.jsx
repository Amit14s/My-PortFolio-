
import avtar from '../assets/avtar.png'
function Home(){
    return(
        <div id='home' className='min-h-screen'>
  
{/* below navbar hers section */}
 <div className="flex flex-col md:flex-row mt-35 ">  
    {/* detail section */}
        <div class=" w-full md:w-1/2
    max-w-full
    overflow-hidden
    flex items-start
    order-2 md:order-1 ">
           <div class=' px-6 md:ml-10
  text-center md:text-left
  flex flex-col items-center md:items-start'>
             <div class='text-[15px] sm:text-[15px] md:text-[17px] lg:text-[20px] text-white mb-5'>WELCOME TO MY PORTFOLIO ✨</div>
            <div class='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white'>Hi, I’m <span class='text-3xl sm:text-2xl font-medium '> Amit Kumar</span>
            </div>
            <div class="text-4xl lg:text-5xl mt-6 text-center md:text-left 
"> {/* SOFTWARE */}
    <span
      className="inline-block font-extrabold text-white"
      style={{
        clipPath: "inset(0 100% 0 0)",
        animation: "typeSoftware 6s steps(8) infinite",
      }}
    >
      Software
    </span>

    {/* SPACE */}
    <span>&nbsp;</span>

    {/* DEVELOPER */}
    <span
      className="inline-block font-extrabold text-purple-700"
      style={{
        clipPath: "inset(0 100% 0 0)",
        animation: "typeDeveloper 6s steps(9) infinite",
      }}
    >
      Developer
    </span>
   <style>
    {`
      /* SOFTWARE types first */
      @keyframes typeSoftware {
        0%   { clip-path: inset(0 100% 0 0); }
        25%  { clip-path: inset(0 0 0 0); }
        100% { clip-path: inset(0 0 0 0); }
      }

      /* DEVELOPER starts AFTER software */
      @keyframes typeDeveloper {
        0%   { clip-path: inset(0 100% 0 0); }
        35%  { clip-path: inset(0 100% 0 0); }
        60%  { clip-path: inset(0 0 0 0); }
        100% { clip-path: inset(0 0 0 0); }
      }
    `}
  </style>

            </div>
            <div class='text-emerald-100 mt-5 w-[70%] text-justify '>Computer Science & Engineering student with a strong foundation in
Data Structures & Algorithms and full-stack development. Experienced
in building scalable backend systems using Node.js, Express, MongoDB,
and SQL, with 200+ DSA problems solved and hands-on project experience
in real-time applications.
</div>

<div className='mt-15 flex gap-10 md:gap-10 lg:gap-25'> 
    <a href='#project' className="px-9 py-3 font-bold rounded-full bg-white text-blackshadow-[0_15px_30px_rgba(0,0,0,0.65)] hover:-translate-y-1 transition-all duration-300 ease-out ">My Projects</a>
    <a href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer" className=" px-9 py-3 font-bold rounded-full bg-transparent bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_45px_20px_rgba(120,40,180,0.2)] hover:-translate-y-1 transition-all duration-300 ease-out text-center">Download CV</a>
</div>
           </div>
        </div>
    {/* image section */}
        <div className="
  w-full md:w-1/2
  h-[60vh] md:h-screen
  flex justify-center items-center md:items-start
  order-1 md:order-2 
">

           <div className="relative w-82 h-82">
  {/* 3D FRAME */}
              <div className="
                  absolute inset-0
                  rounded-3xl
                 bg-gradient-to-br
                from-purple-400
                via-purple-900
                to-purple-1200
                p-5
                rotate-z-10
                -rotate-y-25 
               shadow-[0_45px_20px_rgba(120,40,180,0.6)]
  ">
    <div className="
      w-full h-full
      rounded-2xl
      bg-[#4c1a66]
      flex items-center justify-center
    ">
      <img
        src={avtar}
        className="
          w-55 h-85
          object-cover
          translate-y-[-15px]
        "
      />
    </div>
  </div>
</div>

            </div>
        </div>
        </div>
    )
}
export default Home