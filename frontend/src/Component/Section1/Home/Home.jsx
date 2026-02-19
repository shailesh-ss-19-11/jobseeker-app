import React from "react";
import { motion } from "framer-motion";


const Home = () => {
  
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-sky-100 via-emerald-100 to-yellow-100 flex items-center overflow-hidden">
      {/* Floating color blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-400/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-emerald-400/40 rounded-full blur-3xl animate-pulse delay-200" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-yellow-400/40 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800">
            Find Your{' '}
            <span className="bg-gradient-to-r from-sky-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
              Dream Job
            </span>
            <br />
            Build Your Career
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-xl">
            Browse thousands of verified jobs, connect with top companies, and take the next step in your professional journey.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-110 transition">
              Browse Jobs
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-400 text-gray-800 hover:border-emerald-500 hover:text-emerald-600 hover:scale-105 transition">
              Post a Job
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
            <div className="p-4 rounded-2xl backdrop-blur-xl bg-white/60 shadow-lg animate-float">
              <h3 className="text-2xl font-bold text-gray-800">10K+</h3>
              <p className="text-gray-600 text-sm">Jobs</p>
            </div>
            <div className="p-4 rounded-2xl backdrop-blur-xl bg-white/60 shadow-lg animate-float delay-200">
              <h3 className="text-2xl font-bold text-gray-800">5K+</h3>
              <p className="text-gray-600 text-sm">Companies</p>
            </div>
            <div className="p-4 rounded-2xl backdrop-blur-xl bg-white/60 shadow-lg animate-float delay-500">
              <h3 className="text-2xl font-bold text-gray-800">1M+</h3>
              <p className="text-gray-600 text-sm">Candidates</p>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-[26rem] h-[26rem] rounded-3xl backdrop-blur-2xl bg-white/60 border border-white/40 shadow-2xl animate-float">
            {/* Floating cards */}
            <div className="absolute top-10 left-8 bg-white/80 px-5 py-4 rounded-xl shadow-xl animate-float">
              <p className="text-sm font-semibold text-gray-800">Frontend Developer</p>
              <span className="text-xs text-sky-600">Remote</span>
            </div>
            <div className="absolute bottom-14 right-8 bg-white/80 px-5 py-4 rounded-xl shadow-xl animate-float delay-300">
              <p className="text-sm font-semibold text-gray-800">UI/UX Designer</p>
              <span className="text-xs text-emerald-600">Full-time</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;


