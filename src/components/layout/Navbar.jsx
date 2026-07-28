import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  FolderGit2,
  Mail,
} from "lucide-react";
import { FiCode } from "react-icons/fi";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: User },
    { to: "/projects", label: "Projects", icon: FolderGit2 },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1220]/80 backdrop-blur-xl border-b border-slate-800">
  <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

    {/* Logo */}
    <NavLink
      to="/"
      className="flex items-center gap-3"
    >
      <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center shadow-lg">
        <FiCode className="text-2xl text-black" />
      </div>

      <div className="leading-tight">
        <h1 className="text-xl font-bold text-white">
          Zain <span className="text-amber-400">Bin</span> Ishfaq
        </h1>

        <p className="text-xs text-slate-400 tracking-wide">
          MERN Stack Developer
        </p>
      </div>
    </NavLink>

          {/* Desktop */}

          <nav className="hidden md:flex items-center gap-8">

            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-amber-400"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

          </nav>

          {/* Mobile */}

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>

        </div>

      </header>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* Drawer */}

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-[#111827] border-l border-slate-700 z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between p-6 border-b border-slate-700">

          <h2 className="text-white text-xl font-bold">
            Menu
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-white"
          >
            <X />
          </button>

        </div>

        <nav className="flex flex-col p-6 gap-2">

          {links.map(({ to, label, icon: Icon }) => (

            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-amber-400 text-black"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>

          ))}
        </nav>

      </aside>
    </>
  );
};

export default Navbar;