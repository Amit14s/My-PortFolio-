const ProjectCard = ({ project }) => {
  const {
    title,
    shortDesc,
    features,
    techStack,
    links,
    image,
    category,
    status,
    year,
  } = project;

  return (
    <div
      className="
        snap-start shrink-0
        w-[310px] sm:w-[320px] lg:w-[380px]
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl
        text-white
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="h-60 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Category & Status */}
      <div className="flex items-center justify-between px-6 pt-4">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
          {category}
        </span>

        <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-medium">
          {status}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 pt-4">
        {/* Title */}
        <h3 className="text-lg font-semibold leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/70 leading-relaxed">
          {shortDesc}
        </p>

        {/* Features */}
        <ul className="space-y-1 text-sm text-white/80">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-blue-400">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="space-y-2">
          {Object.entries(techStack).map(([key, values]) => (
            <div key={key} className="flex flex-wrap gap-2">
              <span className="text-xs text-white/50 capitalize">
                {key}:
              </span>
              {values.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3">
          <span className="text-xs text-white/50">
            {year}
          </span>

          <div className="flex gap-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                GitHub
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-emerald-400 hover:underline"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
