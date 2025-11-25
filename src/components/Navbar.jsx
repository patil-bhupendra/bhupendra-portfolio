// src/components/Navbar.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import resumePDF from "../assets/BhupendraPatil_Resume.pdf";

/* Framer motion variants */
const navVariants = {
  hidden: { y: -90, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: { y: -90, opacity: 0, transition: { duration: 0.3 } },
};

const mobileMenuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 320, damping: 32 },
  },
  exit: { x: "100%", opacity: 0, transition: { ease: "easeInOut" } },
};

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const menuRef = useRef(null);

  // Smooth scroll
  const handleSmoothScroll = useCallback((e, id) => {
    e?.preventDefault?.();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setShowMenu(false);
  }, []);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 40);

      if (current > lastScrollY.current && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id));
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  // Escape closes menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click outside closes menu
  useEffect(() => {
    if (!showMenu) return;

    const onMouseDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [showMenu]);

  const logoScale = scrolled ? 0.96 : 1;

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed w-full z-50 px-4 md:px-8 py-3"
          >
            <nav
              className={`w-full mx-auto flex items-center justify-between container transition-all duration-300 rounded-2xl ${
                scrolled
                  ? "bg-white/6 backdrop-blur-md shadow-lg"
                  : "bg-transparent"
              }`}
            >
              {/* Logo */}
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "home")}
                className="flex items-center gap-3 py-2 px-2 md:px-4"
              >
                <motion.div
                  animate={{ scale: logoScale }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-2 select-none"
                >
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    Bhupendra
                  </span>
                  <span className="text-purple font-bold md:text-2xl">
                    Patil
                  </span>
                  <span
                    className="w-3 h-3 rounded-full block"
                    style={{ backgroundColor: "rgba(139,92,246,0.95)" }}
                  />
                </motion.div>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
                <div className="flex gap-8 items-center">
                  {sections.map((sec) => (
                    <button
                      key={sec}
                      onClick={(e) => handleSmoothScroll(e, sec)}
                      className="relative group text-lg"
                    >
                      <span
                        className={`transition-all ${
                          activeSection === sec
                            ? "text-purple font-semibold"
                            : "text-gray-200/90 hover:text-purple"
                        }`}
                      >
                        {sec}
                      </span>
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-purple transition-all ${
                          activeSection === sec
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Resume button */}
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/90 hover:bg-purple/100 text-white text-sm font-medium transition"
                >
                  Resume
                </a>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setShowMenu(true)}
                className="md:hidden p-2 rounded-md hover:bg-white/5 transition"
              >
                <FaBars className="text-2xl text-white" />
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              ref={menuRef}
              className="fixed inset-y-0 right-0 z-50 w-[86%] max-w-sm bg-white/6 shadow-2xl p-6"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-xl font-bold text-white">Bhupendra</div>
                  <div className="text-purple font-bold">Patil</div>
                </div>
                <button
                  onClick={() => setShowMenu(false)}
                  className="p-2 rounded-md hover:bg-white/5 transition"
                >
                  <FaXmark className="text-2xl text-white" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {sections.map((sec) => (
                  <button
                    key={sec}
                    onClick={(e) => handleSmoothScroll(e, sec)}
                    className={`text-2xl text-left transition ${
                      activeSection === sec
                        ? "text-purple font-semibold"
                        : "text-gray-200/90 hover:text-purple"
                    }`}
                  >
                    {sec}
                  </button>
                ))}

                <div className="mt-6 border-t border-white/5 pt-6 flex flex-col gap-3">
                  <a
                    href={resumePDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-purple/90 text-white font-medium"
                  >
                    View Resume
                  </a>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


