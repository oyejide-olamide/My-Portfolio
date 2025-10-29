import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certification = () => {
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

  const certifications = [
    {
      title: "Introduction to Programming Using HTML and CSS",
      issuer: "CEPHAS ICT HUB",
      date: " October 2024",
      image:"./CEPHAS.png",
      credentialLink: "#",
      description: "Reusable HTML and CSS classes, global styles, and clean code for faster performance."
    },
    {
      title: "Create Digital Content, Communicate and Collaborate Online",
      issuer: "CISCO",
      date: "April 2025",
       image:"./CISCO.png",
      credentialLink: "https://www.credly.com/badges/b7ebc26a-ac34-4811-8a57-4f6ef5734f87/linked_in_profile",
      description: "Studied how to create digital content, communicate effectively, and collaborate online using modern tools."
    },
    {
      title: "Microsoft Professional Program in Front-End Web Development",
      issuer: "AFRICA AGILITY",
      date: "18 May 2025",
       image:"./AFRICA.png",
      credentialLink: "https://credential.certifyme.online/verify/f180d46f23770",
      description:
       "Completed the Microsoft Professional Program in Front-End Web Development, gaining skills in building responsive and user-friendly websites."
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      id="certification" 
      className="py-20 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          variants={fadeIn}
          className="text-3xl font-bold text-center text-purple-500 mb-12"
        >
          Certifications
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="bg-purple-500 p-2 rounded-full mr-4">
                  <Award className="text-white" size={16} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  <p className="text-purple-400">{cert.issuer}</p>
                  <img className='w-80 justify-center align-middle -mx-5' src={cert.image} alt="" />
                </div>
              </div>
              
              <div className="flex items-center text-gray-300 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-gray-300 mb-4">{cert.description}</p>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={cert.credentialLink} 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                View Credential
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certification;