import { motion } from "framer-motion";
import React from "react";

const JobCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="w-full rounded-3xl p-6 
      bg-white/70 backdrop-blur-xl 
      border border-white/40 
      shadow-xl hover:shadow-2xl 
      transition-all duration-300"
    >
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          
          {/* Company Logo */}
          <div className="w-14 h-14 rounded-2xl 
          bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500
          flex items-center justify-center 
          text-white font-bold text-lg shadow-md">
            {props.companyName?.charAt(0)}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {props.jobTitle}
            </h3>
            <p className="text-gray-500 text-sm">
              {props.companyName}
            </p>
          </div>
        </div>

        {/* Job Type Badge */}
        <span className="px-3 py-1 text-xs rounded-full 
        bg-gradient-to-r from-sky-500 to-indigo-500 
        text-white shadow">
          {props.jobType}
        </span>
      </div>

      {/* Meta Info */}
      <div className="mt-5 flex flex-wrap gap-6 text-sm text-gray-600">
        <span>📍 {props.location || "Remote"}</span>
        <span>💼 {props.experience}</span>
        <span>💰 {props.salary}</span>
      </div>

      {/* Description */}
      <p className="mt-5 text-gray-600 text-sm leading-relaxed">
        {props.message}
      </p>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-3">
        {[props.skills1, props.skills2, props.skills3, props.skills4, props.skills5]
          .filter(Boolean)
          .map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-xl 
              bg-indigo-100 text-indigo-600 
              hover:bg-indigo-200 transition"
            >
              {skill}
            </span>
          ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-gray-400">
          {props.postedDays}
        </span>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 rounded-xl text-white font-semibold
          bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500
          hover:brightness-110 transition shadow-md"
        >
          Apply Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default JobCard;
