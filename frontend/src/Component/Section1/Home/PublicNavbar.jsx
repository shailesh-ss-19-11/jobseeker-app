import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const menu = [
    { name: "Home", link: "/", activeColor: "text-indigo-600" },
    { name: "Jobs", link: "/job", activeColor: "text-sky-600" },
    { name: "Companies", link: "/companies", activeColor: "text-emerald-600" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/40 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black tracking-tight 
          bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 
          bg-clip-text text-transparent"
        >
          JobOrbit
        </motion.div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-12 text-[15px] font-semibold tracking-wide">
          {menu.map((item, index) => {
            const isActive = location.pathname === item.link;

            return (
              <li key={index} className="relative">
                <Link
                  to={item.link}
                  className={`transition duration-300 
                  ${isActive ? item.activeColor : "text-gray-600 hover:text-gray-900"}`}
                >
                  {item.name}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] 
                    rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Direct My Account Button */}
        <Link to="/myaccount">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-2xl 
            bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500
            text-white font-semibold shadow-md"
          >
            My Account
          </motion.button>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
