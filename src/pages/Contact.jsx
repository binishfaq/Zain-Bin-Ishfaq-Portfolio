import React, { useState, useRef } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        form.current.reset();

        setTimeout(() => {
          setStatus("");
        }, 3000);
      })
      .catch(() => {
        setStatus("error");

        setTimeout(() => {
          setStatus("");
        }, 3000);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#0B1220] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-amber-400 font-semibold">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-8">
            Whether you're looking for a developer,
            have a freelance opportunity,
            or simply want to say hello,
            I'd love to hear from you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="space-y-6">

            <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-white mb-4">
                Get In Touch
              </h3>

              <p className="text-slate-400 leading-7">
                I'm currently available for internships,
                freelance work, collaborations,
                and exciting MERN Stack projects.
              </p>

            </div>

            {/* Email */}

            <a
              href="mailto:zainbinishfaq@gmail.com"
              className="flex items-center gap-5 bg-[#111827] border border-slate-700 rounded-2xl p-5 hover:border-amber-400 transition"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-400 flex items-center justify-center text-black text-xl">
                <MdEmail />
              </div>

              <div>

                <h4 className="text-white font-semibold">
                  Email
                </h4>

                <p className="text-slate-400 text-sm">
                  zainbinishfaq@gmail.com
                </p>

              </div>

            </a>

            {/* Github */}

            <a
              href="https://github.com/binishfaq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#111827] border border-slate-700 rounded-2xl p-5 hover:border-amber-400 transition"
            >
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-black text-xl">
                <FaGithub />
              </div>

              <div>

                <h4 className="text-white font-semibold">
                  GitHub
                </h4>

                <p className="text-slate-400 text-sm">
                  github.com/binishfaq
                </p>

              </div>

            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com/in/zainbinishfaq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#111827] border border-slate-700 rounded-2xl p-5 hover:border-amber-400 transition"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0A66C2] flex items-center justify-center text-white text-xl">
                <FaLinkedinIn />
              </div>

              <div>

                <h4 className="text-white font-semibold">
                  LinkedIn
                </h4>

                <p className="text-slate-400 text-sm">
                  linkedin.com/in/zainbinishfaq
                </p>

              </div>

            </a>

            <div className="bg-[#111827] border border-emerald-500/40 rounded-2xl p-5">

              <h4 className="text-emerald-400 font-semibold mb-2">
                ✔ Available for Work
              </h4>

              <p className="text-slate-400 text-sm leading-6">
                Open for internships,
                freelance projects,
                and full-stack web development opportunities.
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#111827] border border-slate-700 rounded-3xl p-8 space-y-5">

                      {/* Name */}

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-[#0B1220] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* Email */}

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-[#0B1220] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* Subject */}

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="Project Discussion"
                className="w-full bg-[#0B1220] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* Message */}

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Tell me about your project..."
                className="w-full resize-none bg-[#0B1220] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition"
              ></textarea>
            </div>

            {/* Button */}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-black font-semibold py-3 rounded-xl transition duration-300 disabled:opacity-60"
            >
              <FaPaperPlane />

              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </button>

            {/* Success */}

            {status === "success" && (
              <div className="rounded-xl border border-green-500 bg-green-500/10 p-4 text-green-400 text-center">
                ✅ Your message has been sent successfully.
              </div>
            )}

            {/* Error */}

            {status === "error" && (
              <div className="rounded-xl border border-red-500 bg-red-500/10 p-4 text-red-400 text-center">
                ❌ Something went wrong. Please try again.
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;