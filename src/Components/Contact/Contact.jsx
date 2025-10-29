import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, ArrowRight, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 text-white py-20" ref={sectionRef}>
       
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-bold font-sans text-center text-2xl py-24 -mt-24 text-purple-500 transition-all duration-700">
            Contact Me
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="mt-10 opacity-0 transition-all duration-700 delay-200" ref={infoRef}>
              <h2 className="text-3xl font-bold mb-6">
                Get In <span className="text-purple-500">Touch</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions or ready to work together? Reach out to me anytime.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-purple-500 mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-300">No56, Oke-ola lasole road Odeomu, Osun State.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-purple-500 mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-300">+2348142337187</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-purple-500 mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-300">oyejidebukola8@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center hover:bg-gray-700 transition-colors">
                 <Facebook size={18} className="text-white" />
                </a>

                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Instagram size={18} className="text-white" />
                </a>

                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Linkedin size={18} className="text-white" />
                </a>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl opacity-0 transition-all duration-700 delay-300" ref={formRef}>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" 
                    placeholder="Enter your name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" 
                    placeholder="Enter your email" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white h-32" 
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-white">Let's <span className="text-purple-500">Connect</span></h1>
            <hr className="w-full max-w-6xl mx-auto border-gray-500 mt-4" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-white">
            <div>
              <h1 className="text-purple-500 text-lg mb-2">Christianah</h1>
              <p className="text-sm">
                A detail-oriented front-end developer with a strong foundation in HTML, CSS, and JavaScript, specializing in building responsive, user-friendly web interfaces.
              </p>
              <div className="flex gap-2 mt-4">
                <a href="#" className="text-2xl hover:text-purple-500 transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-2xl hover:text-purple-500 transition">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-2xl hover:text-purple-500 transition">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h1 className="text-purple-500 text-lg mb-2">Navigation</h1>
              <div className="space-y-2">
                <a href="#home" className="block text-white hover:text-purple-400 transition text-sm">Home</a>
                <a href="#about" className="block text-white hover:text-purple-400 transition text-sm">About</a>
                <a href="#services" className="block text-white hover:text-purple-400 transition text-sm">Services</a>
                <a href="#project" className="block text-white hover:text-purple-400 transition text-sm">Portfolio</a>
                <a href="#contact" className="block text-white hover:text-purple-400 transition text-sm">Contact</a>
              </div>
            </div>
            
            <div>
              <h1 className="text-purple-500 text-lg mb-2">Contact</h1>
              <div className="space-y-2 text-sm">
                <p>+2348142337187</p>
                <p>oyejidebukola8@gmail.com</p>
                <p>No56, Oke-ola lasole road Odeomu, Osun State.</p>
              </div>
            </div>
            
            <div>
              <h1 className="text-purple-500 text-lg mb-2">Get the latest information</h1>
              <form className="flex">
                <input 
                  className="flex-1 h-12 bg-gray-700 text-sm p-3 rounded-l-lg text-white" 
                  type="email" 
                  placeholder="Email"
                />
                <button 
                  className="bg-purple-500 p-3 rounded-r-lg hover:bg-purple-600 transition" 
                  type="submit"
                >
                  <ArrowRight className="text-white" size={20} />
                </button>
              </form>
            </div>
          </div>
          
          <hr className="border-gray-500 mt-8" />
          <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900 px-4 py-4 mt-4 rounded">
            <p className="text-sm text-white mb-2 md:mb-0">
              Copyright © 2025 <span className="text-purple-500">Christianah.</span> All Rights Reserved.
            </p>
            <p className="text-sm text-white">
              <a href="#" className="hover:text-purple-400">User Terms & Conditions | Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;