import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[#0B1220] text-white overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default AppLayout;