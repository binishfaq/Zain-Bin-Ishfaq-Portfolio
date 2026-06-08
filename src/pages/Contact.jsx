import React, { useState, useRef } from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import './Pages.css';

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
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">Contact Me</h1>
        <p className="page-subtitle">Let's work together</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm always open to discussing new projects, creative ideas,
            or opportunities to be part of your visions.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <MdEmail />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:zainbinishfaq@gmail.com">zainbinishfaq@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/binishfaq" target="_blank" rel="noopener noreferrer">
                  github.com/binishfaq
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaLinkedinIn />
              </div>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/zainbinishfaq" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/zainbinishfaq
                </a>
              </div>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>

          {status === 'success' && (
            <div className="success-message">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="error-message">
              ✗ Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;