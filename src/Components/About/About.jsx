import React from 'react';
import { Settings, Briefcase, Gem, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <>
      {/* About Me Section */}
      <section id="about" className="relative z-20 py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="bg-gray-700 mx-4 lg:mx-24 max-w-6xl lg:max-w-none shadow-xl rounded-lg p-6 text-center"
        >
          <h1 className="font-sans font-bold text-purple-500 text-[25px] mb-4">About Me</h1>

          <h1 className="font-bold text-[28px] md:text-[35px] text-white">I am a professional</h1>
          <h1 className="font-bold text-[28px] md:text-[35px] text-white -mt-2">web developer</h1>

          <p className="text-[16px] md:text-[18px] mt-4 text-white leading-relaxed max-w-4xl mx-auto">
            I am a detail-oriented front-end developer with a strong foundation in HTML, CSS, and JavaScript,
            specializing in building responsive, user-friendly web interfaces. Proficient in modern frameworks such as React and Vue.js,
            I focus on creating seamless and accessible user experiences that align with both design and functionality.
            I collaborate effectively with cross-functional teams to translate concepts into high-quality, scalable front-end solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#project" 
              className="rounded w-full sm:w-32 py-2 bg-purple-500 text-white hover:bg-purple-100 hover:text-black transition-all"
            >
              My Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://docs.google.com/document/d/1XPOzeOeGhO9dBfJi5UySFG0eOUGvvQuXeH0nPx9Tidc/edit?usp=sharing" 
              className="rounded w-full sm:w-48 py-2 border border-purple-500 text-purple-500 bg-white hover:bg-purple-100 transition-all"
            >
              Download CV
            </motion.a>
          </div>

          <div className="bg-[#f2f2f2] rounded mt-4 flex justify-center gap-4 p-2">
            <motion.a 
              whileHover={{ scale: 1.2, y: -5 }}
              href="#" 
              className="text-2xl hover:text-purple-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, y: -5 }}
              href="#" 
              className="text-2xl hover:text-purple-500 transition"
            >
              <i className="fab fa-facebook"></i>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, y: -5 }}
              href="#" 
              className="text-2xl hover:text-purple-500 transition"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Skills Cards Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md transition-transform duration-500 hover:shadow-white p-5"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500 w-14 h-14 rounded-[15px] flex items-center justify-center">
                  <Settings className="text-white" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-black">Deeper Skillset</h2>
              </div>
              <p className="text-sm text-black mt-4 font-sans">
                I specialize in building scalable, high-performance, and accessible user interfaces by combining deep expertise in JavaScript, modern frameworks, web performance optimization, browser internals, testing, and frontend architecture.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md transition-transform duration-500 hover:shadow-white p-5"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500 w-14 h-14 rounded-[15px] flex items-center justify-center">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-black">Creative Work</h2>
              </div>
              <p className="text-sm text-black mt-4 font-sans">
                As a frontend developer, creativity is at the core of everything I do. My role goes beyond writing code, it's about bringing ideas to life and crafting engaging user experiences.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md transition-transform duration-500 hover:shadow-white p-5"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500 w-14 h-14 rounded-[15px] flex items-center justify-center">
                  <Gem className="text-white" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-black">Strong Dedication</h2>
              </div>
              <p className="text-sm text-black mt-4 font-sans">
                I am deeply committed to learning and staying updated with evolving technologies, from mastering the foundations to exploring modern frameworks and responsive design principles.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md transition-transform duration-500 hover:shadow-white p-5"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500 w-14 h-14 rounded-[15px] flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-black">Time Management</h2>
              </div>
              <p className="text-sm text-black mt-4 font-sans">
                My disciplined approach helps me balance development, collaboration, and continuous learning while maintaining structured workflow for consistent progress.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Progress Section */}
      <section className="bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-8"
          >
            <h1 className="font-sans text-3xl font-bold text-purple-500">Skills</h1>
            <p className="font-sans text-lg text-white mt-2">I work toward achieving new skills regularly</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {[
              { name: 'HTML', percentage: 95 },
              { name: 'CSS', percentage: 80 },
              { name: 'Tailwind', percentage: 75 },
              { name: 'JavaScript', percentage: 60 },
              { name: 'React', percentage: 50 }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
              >
                <div className="flex justify-between text-white mb-2">
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <div className="relative w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="bg-purple-500 h-2.5 rounded-full" 
                  ></motion.div>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                    className="absolute -top-6 text-purple-500 text-sm font-bold transform -translate-x-1/2" 
                    style={{ left: `${skill.percentage}%` }}
                  >
                    {skill.percentage}%
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;