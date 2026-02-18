import { useState, useEffect } from "react";
import { MobileHeader } from "./MobileHeader";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import "../index.css";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 md:top-6 left-0 right-0 z-50 px-3 sm:px-6 md:px-10 lg:px-12">
      <nav
        className="
          mx-auto w-full max-w-6xl
          h-14 sm:h-16 lg:h-20
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-full
          px-4 sm:px-6 md:px-10 lg:px-12 py-2
          shadow-lg shadow-black/10
          flex items-center justify-between
        "
      >
        {/* Left Side */}
        <div className="hidden md:flex items-center gap-8 lg:gap-14 text-base lg:text-xl font-medium">
          {navItems.slice(0, 3).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`hover-underline transition ${
                activeSection === item.id ? "text-cyan-400 active-underline" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Logo Center */}
        <a
          href="#home"
          className="shrink-0 w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30 flex items-center justify-center"
        >
          <img
            src={logo}
            alt="AMC Logo"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-8 lg:gap-14 text-base lg:text-xl font-medium">
          {navItems.slice(3).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`hover-underline transition ${
                activeSection === item.id ? "text-cyan-400 active-underline" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white p-2 -mr-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <IoCloseOutline size={26} /> : <IoMenuOutline size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU COMPONENT */}
      {open && (
        <MobileHeader
          navItems={navItems}
          activeSection={activeSection}
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
};
