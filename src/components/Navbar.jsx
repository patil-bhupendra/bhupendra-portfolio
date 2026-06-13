import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import resumePDF from "../assets/Bhupendra_Patil_Resume.pdf";

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
        entries.forEach(
          (e) => e.isIntersecting && setActiveSection(e.target.id),
        );
      },
      { threshold: 0.6 },
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
            className="fixed w-full z-50 px-6 py-3"
          >
            <nav
              className={`container mx-auto flex items-center justify-between transition-all duration-300 rounded-2xl ${
                scrolled
                  ? "bg-black/30 backdrop-blur-xl border border-white/10 shadow-xl"
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
                  <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center text-white font-bold">
                    BP
                  </div>

                  <div className="leading-tight">
                    <h3 className="text-white font-semibold text-base">
                      Bhupendra Patil
                    </h3>

                    <p className="text-[10px] text-gray-400">
                      Full Stack Developer
                    </p>
                  </div>
                </motion.div>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
                <div className="flex gap-8 items-center">
                  {sections.map((sec) => (
                    <button
                      key={sec.charAt(0).toUpperCase() + sec.slice(1)}
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
                        {sec.charAt(0).toUpperCase() + sec.slice(1)}
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
                  className="
inline-flex items-center gap-2
px-5 py-2.5
rounded-full
bg-purple
hover:bg-purple-700
text-white
font-medium
transition-all duration-300
shadow-lg shadow-purple/30
"
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
              className="fixed inset-y-0 right-0 z-50 w-[86%] max-w-sm bg-black/90 backdrop-blur-xl shadow-2xl p-6"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center text-white font-bold">
                    BP
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-base">
                      Bhupendra Patil
                    </h3>

                    <p className="text-[10px] text-gray-400">
                      Full Stack Developer
                    </p>
                  </div>
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
                    key={sec.charAt(0).toUpperCase() + sec.slice(1)}
                    onClick={(e) => handleSmoothScroll(e, sec)}
                    className={`text-2xl text-left transition ${
                      activeSection === sec
                        ? "text-purple font-semibold"
                        : "text-gray-200/90 hover:text-purple"
                    }`}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </button>
                ))}

                <div className="mt-6 border-t border-white/5 pt-6 flex flex-col gap-3">
                  <a
                    href={resumePDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple hover:bg-purple-700 text-white font-medium transition-all duration-300 border border-purple/30 bg-purple "
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
