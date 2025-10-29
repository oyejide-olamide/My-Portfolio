import React, { useState, useEffect } from 'react';
import { Menu, X, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  
  const titles = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Graphics Designer'];
  
  useEffect(() => {
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        setTypingText(currentTitle.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypingText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }
    };
    
    const timer = setInterval(typeWriter, isDeleting ? 100 : 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white px-5 py-4 flex justify-between lg:justify-around items-center fixed z-50 shadow-xl w-full"
      >
        <div className="text-2xl font-bold gap-3 flex items-center">
          <h1>MyPortfolio</h1>
          <span className="bg-purple-500 rounded-full p-1 font-bold font-sans text-[30px] lg:w-12 w-12 flex justify-center items-center">C</span>
        </div>
        
        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
          <a href="#project" className="hover:text-purple-400 transition-colors">Project</a>
          <a href="#certification" className="hover:text-purple-400 transition-colors">Certification</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 text-white px-6 py-5 space-y-4 fixed top-16 left-0 right-0 z-40 shadow-lg"
        >
          <a href="#home" className="block hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="block hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" className="block hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#project" className="block hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Project</a>
          <a href="#certification" className="block hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Certification</a>
          <a href="#contact" className="block hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="lg:flex flex-col lg:flex-row justify-around items-center min-h-screen p-4 bg-gradient-to-r from-gray-600 via-purple-200 to-gray-600">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 lg:mt-0 flex flex-col items-center justify-center px-4 lg:flex-1"
          >
            <h1 className="font-sans font-bold text-[28px] md:text-[35px] text-black">Hello, I am</h1>
            <h2 className="font-sans font-bold text-[28px] md:text-[35px] text-black">Christianah Oyejide</h2>
            
            <div className="my-4">
              <h1 className="text-xl md:text-4xl font-bold text-black min-h-[3rem]">
                <span className="border-r-2 border-black animate-pulse">{typingText}</span>
              </h1>
            </div>

            <p className="font-sans text-[17px] text-black max-w-xl text-center lg:text-left">
              I'm a freelance developer based in Osun State.<br className="hidden sm:block" />
              I specialize in creating visually captivating, user-focused<br className="hidden sm:block" /> websites
              and offer a wide range of creative digital solutions.
            </p>

            <div className="mt-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="p-3 hover:bg-purple-100 hover:text-black cursor-pointer bg-purple-500 text-[18px] font-sans rounded text-white transition-all"
              >
                Let's Connect
              </motion.a>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap gap-3 mt-6 text-center p-3">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded w-28 bg-gradient-to-r from-purple-400 via-purple-200
                 to-purple-400 shadow-2xs p-2"
              >
                <h1 className="font-sans text-[14px] text-black">5 Y.</h1>
                <h2 className="font-sans text-[16px] text-black cursor-pointer">Experience</h2>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded w-28 bg-gradient-to-r from-purple-400
                 via-purple-200 to-purple-400 shadow-2xs p-2"
              >
                <h1 className="font-sans text-[14px] text-black">10+</h1>
                <h2 className="font-sans text-[16px] text-black cursor-pointer">Projects</h2>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded w-28 bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400 shadow-2xl p-2"
              >
                <h1 className="font-sans text-[14px] text-black">5+</h1>
                <h2 className="font-sans text-[16px] text-black cursor-pointer">Certifications</h2>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 lg:mt-0 lg:flex-1 flex justify-center"
          >
            <div className="bg-gray-600 rounded-full h-[240px] w-[240px] lg:h-[300px] lg:w-[300px] p-4 relative">
              <div className="h-full w-full overflow-hidden">
                <img className="w-full h-full  rounded-full
               flex items-center justify-center" src="./myimage.jpg" alt="" />
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;