import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React and Tailwind CSS.",
    link: "https://github.com/parth2063/My-Portfolio",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&auto=format&fit=crop",
    tags: ["React", "Tailwind"],
  },
  {
    title: "IPL_2025_Player_Analysis",
    description: "Data analysis of IPL 2025 players using Python and Pandas.",
    link: "https://github.com/parth2063/IPL_2025_Player_Analysis",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&q=80&auto=format&fit=crop",
    tags: ["Python", "Pandas"],
  },
  {
    title: "CricketScore-System",
    description: "Real-time cricket score tracking system built with C++.",
    link: "https://github.com/parth2063/CricketScore-System",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80&auto=format&fit=crop",
    tags: ["C++", "Real-time"],
  },
  {
    title: "Bank-Management-System",
    description: "A comprehensive bank management system built with C.",
    link: "https://github.com/parth2063/Bank-Management-System",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80&auto=format&fit=crop",
    tags: ["C", "System Design"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-12">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-tr from-gray-800 via-gray-900 to-black border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group"
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />

                {/* Tags overlay */}
                <div className="absolute bottom-3 left-4 flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold text-white mb-2 truncate">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Projects;