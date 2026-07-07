import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

const ErrPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-[#F8F0E5] via-white to-[#F8F0E5]">
      <div className="max-w-lg w-full text-center relative">
        {/* Decorative Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* 404 Number with Glow Effect */}
        <div className="relative mb-6">
          <div className="text-[120px] sm:text-[160px] font-black leading-none tracking-tighter select-none">
            <span className="bg-gradient-to-r from-[#082052] via-blue-600 to-[#082052] bg-clip-text text-transparent">4</span>
            <span className="bg-gradient-to-r from-[#082052] via-white-500 to-[#082052] bg-clip-text text-transparent">0</span>
            <span className="bg-gradient-to-r from-[#082052] via-blue-600 to-[#082052] bg-clip-text text-transparent">4</span>
          </div>
          {/* Glow Effect */}
          <div className="absolute inset-0 flex items-center justify-center blur-2xl opacity-20">
            <span className="text-[120px] sm:text-[160px] font-black text-[#082052]">404</span>
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#082052]/10 to-blue-500/10 flex items-center justify-center border border-[#082052]/10">
            <AlertCircle className="w-10 h-10 text-[#082052]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#082052] mb-2">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm sm:text-base mb-2 max-w-sm mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mb-8">
          Error Code: 404
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#082052] to-[#0a2a6e] text-white rounded-xl hover:from-[#0a2a6e] hover:to-[#082052] transition-all duration-300 font-medium shadow-lg shadow-[#082052]/20 hover:shadow-[#082052]/40 hover:-translate-y-0.5 group"
          >
            <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#082052]/20 text-[#082052] rounded-xl hover:bg-[#082052] hover:text-white transition-all duration-300 font-medium hover:border-[#082052] hover:-translate-y-0.5 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 pt-6 border-t border-gray-200/50">
          <p className="text-xs text-gray-400 mb-3">You might want to try:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition">
              Homepage
            </Link>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <Link to="/projects" className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition">
              Projects
            </Link>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <Link to="/about" className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition">
              About
            </Link>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <Link to="/contact" className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrPage;