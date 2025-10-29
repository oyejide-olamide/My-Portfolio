import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Project = () => {
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

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
      technologies: ["JavaScript", "Tailwind CSS", "HTML"],
      image: "./public/ecommerce.png",
      liveLink: "https://e-commerce-website-five-sand.vercel.app/",
      githubLink: "https://github.com/oyejide-olamide?tab=repositories"
    },
    {
      title: "NoteTaking App",
      description: "A lightweight web application for writing, editing, and managing notes with a clean and responsive design.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "./public/note.png",
      liveLink: "https://note-taking-app-two-rho.vercel.app/",
      githubLink: "https://github.com/oyejide-olamide?tab=repositories"
    },
    {
      title: "Restaurant Websites",
      description: "a modern, fully responsive restaurant site built with HTML, CSS, and JavaScript, featuring an elegant design and seamless user experience across all devices.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "./public/restaurant.png",
      _liveLink: "https://restaurant-website-alpha-indol.vercel.app/",
      get liveLink() {
        return this._liveLink;
      },
      set liveLink(value) {
        this._liveLink = value;
      },
      githubLink: "https://github.com/oyejide-olamide?tab=repositories"
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      id="project" 
      className="py-20 bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          variants={fadeIn}
          className="text-3xl font-bold text-center text-purple-500 mb-12"
        >
          Projects
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >   
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-600 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-purple-500 text-white text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink} 
                    className="flex items-center text-white bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink} 
                    className="flex items-center text-white bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Project;