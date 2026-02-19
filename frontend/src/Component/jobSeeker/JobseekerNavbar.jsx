import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const JobSeekerNavbar = ({ setRole }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jobseeker");
    setRole("public");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/40 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* Left - Logo */}
        <div className="flex-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent"
          >
            JobSeeker Panel
          </motion.div>
        </div>

        {/* Center - Menu (Manual Links with Active Condition) */}
        <ul className="flex-1 flex justify-center items-center gap-10 text-[15px] font-semibold tracking-wide">

          {/* Search Jobs */}
          <li className="relative">
            <Link
              to="/jobseeker/search-job"
              className={`transition duration-300 ${
                location.pathname === "/jobseeker/search-job"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Search Jobs
            </Link>

            {location.pathname === "/jobseeker/search-job" && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
              />
            )}
          </li>

          {/* Applied Jobs */}
          <li className="relative">
            <Link
              to="/applied-jobs"
              className={`transition duration-300 ${
                location.pathname === "/applied-jobs"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Applied Jobs
            </Link>

            {location.pathname === "/applied-jobs" && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
              />
            )}
          </li>

          {/* Saved Jobs */}
          <li className="relative">
            <Link
              to="/saved-jobs"
              className={`transition duration-300 ${
                location.pathname === "/saved-jobs"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Saved Jobs
            </Link>

            {location.pathname === "/saved-jobs" && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
              />
            )}
          </li>

          {/* Update Resume */}
          <li className="relative">
            <Link
              to="/update-resume"
              className={`transition duration-300 ${
                location.pathname === "/update-resume"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Update Resume
            </Link>

            {location.pathname === "/update-resume" && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
              />
            )}
          </li>

        </ul>

        {/* Right - Profile Avatar with Dropdown */}
        <div className="flex-1 flex justify-end items-center relative" ref={dropdownRef}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md cursor-pointer"
          >
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-14 w-44 backdrop-blur-xl bg-white/60 border border-white/30 rounded-2xl shadow-lg p-2"
              >
                <Link
                  to="/profile"
                  className="block px-4 py-2 rounded-xl text-gray-700 hover:bg-white/70 transition"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 rounded-xl text-red-500 hover:bg-white/70 transition"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </nav>
  );
};

export default JobSeekerNavbar;
