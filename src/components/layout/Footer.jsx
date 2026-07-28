import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiCode } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
   <footer className="border-t border-slate-800 bg-[#0B1220]">
  <div className="max-w-7xl mx-auto px-6 py-8">

    {/* Top Row */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      {/* Brand */}
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-xl bg-amber-400 flex items-center justify-center">
          <FiCode className="text-2xl text-black" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Zain Bin Ishfaq
          </h2>

          <p className="text-slate-400 text-sm">
            MERN Stack Developer
          </p>
        </div>

      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4">

        <a
          href="https://github.com/binishfaq"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-xl bg-[#111827] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/zainbinishfaq"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-xl bg-[#111827] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400 transition"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:zainbinishfaq@gmail.com"
          className="w-11 h-11 rounded-xl bg-[#111827] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400 transition"
        >
          <MdEmail />
        </a>

      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-slate-800 mt-6 pt-6 text-center">
      <p className="text-sm text-slate-500">
        © {year} Zain Bin Ishfaq • Built with React, Vite & Tailwind CSS
      </p>
    </div>

  </div>
</footer>
  );
};

export default Footer;