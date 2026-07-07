import React, { useState, useRef } from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 3000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      });
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 min-h-[70vh] bg-[#ffff]">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#082052] to-[#0a2a6e] bg-clip-text text-transparent">
          Contact Me
        </h1>
        <p className="text-[#666] text-sm sm:text-base mt-2">Let's work together</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 bg-[#ffff] rounded-2xl p-4 sm:p-6 md:p-10 border border-[#082052]/20">
        {/* Contact Info */}
        <div>
          <h3 className="text-[#082052] text-xl sm:text-2xl font-bold mb-3">Get in Touch</h3>
          <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas,
            or opportunities to be part of your visions.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
              <div className="text-2xl sm:text-3xl min-w-[40px] sm:min-w-[50px] text-[#082052] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <MdEmail />
              </div>
              <div>
                <h4 className="text-[#0a2a6e] text-sm sm:text-base font-semibold">Email</h4>
                <a href="mailto:zainbinishfaq@gmail.com" className="text-[#555] no-underline text-sm sm:text-base hover:text-[#082052] transition-colors duration-300">
                  zainbinishfaq@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
              <div className="text-2xl sm:text-3xl min-w-[40px] sm:min-w-[50px] text-[#082052] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <FaGithub />
              </div>
              <div>
                <h4 className="text-[#0a2a6e] text-sm sm:text-base font-semibold">GitHub</h4>
                <a href="https://github.com/binishfaq" target="_blank" rel="noopener noreferrer" className="text-[#555] no-underline text-sm sm:text-base hover:text-[#082052] transition-colors duration-300">
                  github.com/binishfaq
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
              <div className="text-2xl sm:text-3xl min-w-[40px] sm:min-w-[50px] text-[#082052] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <FaLinkedinIn />
              </div>
              <div>
                <h4 className="text-[#0a2a6e] text-sm sm:text-base font-semibold">LinkedIn</h4>
                <a href="https://linkedin.com/in/zainbinishfaq" target="_blank" rel="noopener noreferrer" className="text-[#555] no-underline text-sm sm:text-base hover:text-[#082052] transition-colors duration-300">
                  linkedin.com/in/zainbinishfaq
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-[#082052] text-sm font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="bg-[#ffff] border border-[#082052]/30 rounded-lg px-3 sm:px-4 py-2.5 text-[#333] text-sm sm:text-base transition-all duration-300 focus:outline-none focus:border-[#082052] focus:bg-[#082052]/2 placeholder:text-[#999]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[#082052] text-sm font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="bg-[#ffff] border border-[#082052]/30 rounded-lg px-3 sm:px-4 py-2.5 text-[#333] text-sm sm:text-base transition-all duration-300 focus:outline-none focus:border-[#082052] focus:bg-[#082052]/2 placeholder:text-[#999]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[#082052] text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Tell me about your project..."
              className="bg-[#ffff] border border-[#082052]/30 rounded-lg px-3 sm:px-4 py-2.5 text-[#333] text-sm sm:text-base transition-all duration-300 focus:outline-none focus:border-[#082052] focus:bg-[#082052]/2 placeholder:text-[#999] resize-none font-inherit"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-gradient-to-r from-[#082052] to-[#0a2a6e] text-[#ffff] border-none px-6 py-3 rounded-lg text-sm sm:text-base font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(8,32,82,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>

          {status === 'success' && (
            <div className="bg-[#082052]/10 border border-[#082052] text-[#082052] px-4 py-3 rounded-lg text-center text-sm">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-100/10 border border-red-600 text-red-600 px-4 py-3 rounded-lg text-center text-sm">
              ✗ Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;