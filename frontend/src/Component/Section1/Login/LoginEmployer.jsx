import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../../../constant";

const LoginEmployer = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(baseURL + "auth/employer/login/",formData);

      if (result.status === 200) {
        localStorage.setItem("employer",JSON.stringify(result?.data?.user))
        navigate("/employer/home");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-sky-100 via-indigo-100 to-emerald-100 
    relative overflow-hidden px-4">

      {/* Floating Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-pulse delay-200" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-md 
        bg-white/70 backdrop-blur-2xl 
        border border-white/40 
        rounded-3xl shadow-2xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight 
          bg-gradient-to-r from-sky-600 via-indigo-600 to-emerald-600 
          bg-clip-text text-transparent">
            Employer Login
          </h2>
          <p className="mt-2 text-gray-500 text-sm">
            Manage your job postings & hiring
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email or Phone *
            </label>
            <input
              name="identifier"
              onChange={handleChange}
              required
              placeholder="hr@company.com or 9876543210"
              className="w-full px-4 py-3 rounded-xl 
              bg-white/80 border border-gray-200
              focus:ring-2 focus:ring-sky-400
              focus:border-sky-400
              outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password *
            </label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl 
              bg-white/80 border border-gray-200
              focus:ring-2 focus:ring-indigo-400
              focus:border-indigo-400
              outline-none transition"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500
            shadow-lg hover:brightness-110 transition"
          >
            Login
          </motion.button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          New employer?{" "}
          <Link
            to="/auth/employer/signup"
            className="font-semibold 
            bg-gradient-to-r from-sky-600 to-indigo-600 
            bg-clip-text text-transparent hover:opacity-80 transition"
          >
            Create account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginEmployer;
