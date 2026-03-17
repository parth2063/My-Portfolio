import useReveal from "../hooks/useReveal";
import profile from "../assets/myprofile.jpeg";
import { motion } from "framer-motion";

const About = () => {
  const [ref, visible] = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-24 px-6 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src={profile}
              alt="Sudip Mahat"
              className="w-100 h-100 object-cover rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h3>

          <p className="text-gray-400 leading-8 mb-6">
            I am a passionate <span className="text-cyan-400 font-semibold">Web Developer</span> 
            who loves building scalable web applications and creating 
            clean, modern user interfaces. I specialize in React, Django, 
            and modern web technologies.
          </p>

          <p className="text-gray-400 leading-8 mb-8">
            I enjoy solving complex problems, learning new technologies, 
            and turning ideas into real-world digital solutions that make impact.
          </p>

          {/* Highlight Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <h4 className="text-2xl font-bold text-cyan-400">3+</h4>
              <p className="text-sm text-gray-400">Years Learning</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <h4 className="text-2xl font-bold text-cyan-400">10+</h4>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <h4 className="text-2xl font-bold text-cyan-400">100%</h4>
              <p className="text-sm text-gray-400">Dedication</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;