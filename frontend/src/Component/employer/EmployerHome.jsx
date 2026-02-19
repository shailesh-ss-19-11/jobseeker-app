import React from "react";
import { Link } from "react-router-dom";

const  EmployerHome=()=> {
  return (
    <div
      className="max-w-3xl
      bg-white/70 backdrop-blur-2xl
      border border-white/40
      rounded-3xl
      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      p-10"
    >
      <h1
        className="text-3xl font-bold mb-10
        bg-gradient-to-r from-sky-600 via-indigo-500 to-emerald-500
        bg-clip-text text-transparent"
      >
        Employer Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Company Name
          </label>
          <input
            type="text"
            placeholder="ABC Pvt Ltd"
            className="w-full px-4 py-3 rounded-xl
            bg-white border border-gray-200
            focus:ring-2 focus:ring-sky-400
            focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Industry
          </label>
          <input
            type="text"
            placeholder="IT Services"
            className="w-full px-4 py-3 rounded-xl
            bg-white border border-gray-200
            focus:ring-2 focus:ring-sky-400
            focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Location
          </label>
          <input
            type="text"
            placeholder="Delhi, India"
            className="w-full px-4 py-3 rounded-xl
            bg-white border border-gray-200
            focus:ring-2 focus:ring-sky-400
            focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Company Size
          </label>
          <input
            type="text"
            placeholder="50-100 Employees"
            className="w-full px-4 py-3 rounded-xl
            bg-white border border-gray-200
            focus:ring-2 focus:ring-sky-400
            focus:outline-none transition"
          />
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <button
          className="px-8 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500
          hover:brightness-110 transition shadow-lg"
        >
          Save Details
        </button>
      </div>
    </div>
  );
}

export default EmployerHome




// import React from 'react'
// import { motion } from "framer-motion";
// import { useState } from "react";

// const EmployerHome = () => {

//  const [jobs] = useState([
//     {
//       id: 1,
//       title: "Frontend Developer",
//       location: "Delhi",
//       type: "Full-Time",
//       applications: 12,
//     },
//     {
//       id: 2,
//       title: "Backend Developer",
//       location: "Remote",
//       type: "Remote",
//       applications: 8,
//     },
//   ]);

//   return (
//     <div className="min-h-screen flex bg-gradient-to-br from-indigo-50 via-white to-sky-50">

//       {/* Sidebar */}
//       <div className="w-64 bg-white/70 backdrop-blur-xl border-r border-gray-200 p-6 hidden md:block">
//         <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
//           Employer Panel
//         </h2>

//         <nav className="mt-10 space-y-4 text-gray-600">
//           <p className="hover:text-indigo-500 cursor-pointer">Dashboard</p>
//           <p className="hover:text-indigo-500 cursor-pointer">Post Job</p>
//           <p className="hover:text-indigo-500 cursor-pointer">My Jobs</p>
//           <p className="hover:text-indigo-500 cursor-pointer">Applicants</p>
//           <p className="hover:text-indigo-500 cursor-pointer">Profile</p>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">

//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">
//             Dashboard Overview
//           </h1>

//           <button className="px-6 py-2 rounded-xl text-white font-semibold
//           bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500
//           hover:brightness-110 transition shadow-lg">
//             + Post New Job
//           </button>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid md:grid-cols-3 gap-6 mb-10">
//           <StatCard title="Total Jobs" value="5" />
//           <StatCard title="Active Jobs" value="3" />
//           <StatCard title="Total Applications" value="47" />
//         </div>

//         {/* Recent Jobs */}
//         <div className="bg-white/70 backdrop-blur-xl border border-white/40 
//         rounded-3xl shadow-lg p-6">

//           <h2 className="text-xl font-semibold mb-6 text-gray-700">
//             Recent Job Posts
//           </h2>

//           <div className="space-y-4">
//             {jobs.map((job) => (
//               <motion.div
//                 key={job.id}
//                 whileHover={{ scale: 1.02 }}
//                 className="p-4 rounded-xl border border-gray-200 
//                 bg-white flex justify-between items-center"
//               >
//                 <div>
//                   <h3 className="font-semibold text-gray-800">
//                     {job.title}
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     {job.location} • {job.type}
//                   </p>
//                 </div>

//                 <div className="text-sm text-gray-600">
//                   {job.applications} Applicants
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* Stats Card */
// const StatCard = ({ title, value }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     className="bg-white/70 backdrop-blur-xl border border-white/40
//     rounded-3xl shadow-lg p-6 text-center"
//   >
//     <h3 className="text-gray-500 text-sm">{title}</h3>
//     <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
//       {value}
//     </p>
//   </motion.div>
// );


// export default EmployerHome