// Components/Services/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Monitor,ShoppingCart,Plug,Smartphone } from 'lucide-react';

const Services = () => {
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

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      id="services" 
      className="py-20 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          variants={fadeIn}
          className="text-3xl font-bold text-center text-purple-500 mb-12"
        >
          Services
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -10 }}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Web Development</h3>
            <p className="text-gray-300 text-center"> I develop dynamic, component-based applications in React, using props, state, 
              and API integration to create scalable and interactive features.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -10 }}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center">
                <Palette className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">UI/UX Implementation</h3>
            <p className="text-gray-300 text-center">From wireframes to polished designs, I bring interfaces 
              to life with HTML, CSS, JavaScript, and TailwindCSS—focusing on usability and simplicity.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -10 }}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center">
                <Monitor className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Responsive Website Development</h3>
            <p className="text-gray-300 text-center">I build clean and modern websites that adapt seamlessly to mobile, tablet,
               and desktop devices, ensuring the best experience for every user.</p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -10 }}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center">
                <ShoppingCart className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">E-commerce & Cart Features</h3>
            <p className="text-gray-300 text-center">I design and implement product pages, shopping carts, 
              and interactive components tailored for online stores.</p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -10 }}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center">
                <Plug className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">API Integration</h3>
            <p className="text-gray-300 text-center">I connect applications with back-end services, fetching and 
              displaying data in real time to enhance functionality.</p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -10 }}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center">
                <Smartphone className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Mobile-Friendly Navigation</h3>
            <p className="text-gray-300 text-center">I create modern navigation systems, such as responsive hamburger menus
               and smooth transitions, for easy browsing on any device.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;