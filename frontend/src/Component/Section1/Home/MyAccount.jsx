import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getdata } from "../../../service/Api";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [roles, setRoles] = useState([]);

  const fetchRoles = () => {
    getdata("app/v1/roles",
      (result) => {
        setRoles(result?.data);
      },
      (error) => {
        setRoles([])
        console.log(error);
      }
    );
  };


  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden
    bg-gradient-to-br from-indigo-50 via-white to-sky-50 px-4">

      {/* Animated Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-sky-400/30 rounded-full blur-3xl animate-pulse delay-300" />
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-emerald-400/30 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-md
        bg-white/70 backdrop-blur-2xl
        border border-white/40
        rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
      >
        {/* Tabs */}
        <div className="flex rounded-t-3xl overflow-hidden">
          <button
            onClick={() => setActiveTab("login")}
            className={`w-1/2 py-4 font-semibold transition ${activeTab === "login"
                ? "bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white"
                : "text-gray-600 hover:text-indigo-600"
              }`}
          >
            Login
          </button>

          <button
            onClick={() => setActiveTab("signup")}
            className={`w-1/2 py-4 font-semibold transition ${activeTab === "signup"
                ? "bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 text-white"
                : "text-gray-600 hover:text-emerald-600"
              }`}
          >
            Signup
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {activeTab === "login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <Link
                  to="/auth/jobseeker/login"
                  className="block w-full text-center px-4 py-4 rounded-xl font-semibold
                  bg-white border border-gray-200 text-gray-700
                  hover:bg-indigo-500 hover:text-white transition shadow-sm"
                >
                  Job Seeker Login
                </Link>

                <Link
                  to="/auth/employer/login"
                  className="block w-full text-center px-4 py-4 rounded-xl font-semibold
                  bg-white border border-gray-200 text-gray-700
                  hover:bg-sky-500 hover:text-white transition shadow-sm"
                >
                  Employer Login
                </Link>
              </motion.div>
            )}

            {activeTab === "signup" && (
              <motion.div
                key="signup"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >{
                  roles && roles.map((role) => {
                    if (role.role === "jobseeker") {
                      return (
                        <Link
                          key={role._id}
                          to={"/auth/jobseeker/signup/" + role._id}
                          className="block w-full text-center px-4 py-4 rounded-xl font-semibold text-gray-700 border border-gray-300 hover:bg-emerald-500 hover:text-white transition"
                        >
                          Job Seeker Signup
                        </Link>);}

                    if (role.role === "employer") {
                      return (
                        <Link
                          key={role._id}
                          to={"/auth/employer/signup/" + role._id}
                          className="block w-full mt-4 text-center px-4 py-4 rounded-xl font-semibold text-gray-700 border border-gray-300 hover:bg-sky-600 hover:text-white transition"
                        >
                          Employer Signup
                        </Link>);}
                    return null;})
                }
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default MyAccount;
