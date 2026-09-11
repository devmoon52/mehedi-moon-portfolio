import { MdArrowOutward } from "react-icons/md";
import { memo } from "react";

const Card = ({ data }) => {
  const { title, desc, tech, link, image } = data;

  return (
    <div className={`w-full`}>
      <div className="w-full aspect-15/10 flex justify-center items-center font-semibold bg-slate-400 text-gray-500">
        <img
          src={image}
          alt={title}
          loading="lazy"
          fetchPriority="low"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="px-3 py-4 space-y-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-300 text-sm">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-white/10 border border-gray-600 rounded-full text-xs px-4 py-1.5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* github & live link */}
        {link && (
          <div className="flex items-start gap-3">
            <a
              href={link.github}
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline flex items-center font-medium"
              target="_blank"
            >
              Github
            </a>
            <a
              href={link.live}
              className="text-teal-500 hover:underline flex items-center font-medium gap-0.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
              <MdArrowOutward aria-hidden="true" size={18} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Card);
