import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../../constant";
import axios from "axios";

const LoginJobseekar = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      const result= await axios.post(baseURL + "auth/jobseeker/login/", formData)
      if(result.status===200){
        localStorage.setItem("jobseeker",JSON.stringify(result?.data?.user))
        navigate("/jobseeker/search-job")
      }
      
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-indigo-50 via-white to-sky-50 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md 
        bg-white/70 backdrop-blur-2xl
        border border-white/40
        rounded-3xl 
        shadow-[0_25px_60px_rgba(0,0,0,0.08)]
        p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold 
          bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 
          bg-clip-text text-transparent">
            Job Seeker Login
          </h2>
          <p className="mt-2 text-gray-500 text-sm">
            Login to apply for jobs
          </p>
        </div>

        {/* Form */}
        <form action="" onSubmit={handleSubmit}>

        <div className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email or Phone *
            </label>
            <input
              name="identifier"
              onChange={handleChange}
              required
              placeholder="email@example.com or 9876543210"
              className="w-full px-4 py-3 rounded-xl 
              bg-white border border-gray-200
              focus:ring-2 focus:ring-indigo-400 
              focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password *
            </label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl 
              bg-white border border-gray-200
              focus:ring-2 focus:ring-sky-400 
              focus:outline-none transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500
            hover:brightness-110 transition shadow-lg"
          >
            Login
          </motion.button>
        </div>
              </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/auth/jobseeker/signup"
            className="font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent hover:opacity-80 transition"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginJobseekar;
