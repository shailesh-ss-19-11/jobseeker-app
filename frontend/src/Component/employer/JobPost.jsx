import React from "react";

const JobPost = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-8"
    >
      <div className="max-w-5xl w-full">

        {/* Main Glass Card */}
        <div
          className="bg-white/70 backdrop-blur-2xl
          border border-white/40
          rounded-3xl
          shadow-[0_25px_60px_rgba(0,0,0,0.08)]
          p-10 m-auto"

        >
          <h1
            className="text-3xl font-bold mb-8
            bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500
            bg-clip-text text-transparent"
          >
            Employer Details
          </h1>

          <div className="space-y-6 mb-12">
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
                focus:ring-2 focus:ring-indigo-400
                focus:outline-none transition"
              />
            </div>

            <button
              className="mt-4 px-6 py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500
              hover:brightness-110 transition shadow-lg"
            >
              Save Details
            </button>
          </div>

          {/* Job Posts Section */}
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Posted Jobs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white/80 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-gray-800">
                Frontend Developer
              </h3>
              <p className="text-sm text-gray-600 mt-3">Location: Delhi</p>
              <p className="text-sm text-gray-600">Experience: 2-4 Years</p>
              <p className="text-sm text-gray-600">Salary: ₹4-6 LPA</p>
              <button className="mt-5 px-4 py-2 rounded-xl text-sm font-medium text-white
              bg-gradient-to-r from-sky-500 to-indigo-500 hover:brightness-110 transition">
                View Details
              </button>
            </div>

            <div className="bg-white/80 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-gray-800">
                Backend Developer
              </h3>
              <p className="text-sm text-gray-600 mt-3">Location: Mumbai</p>
              <p className="text-sm text-gray-600">Experience: 3-5 Years</p>
              <p className="text-sm text-gray-600">Salary: ₹6-8 LPA</p>
              <button className="mt-5 px-4 py-2 rounded-xl text-sm font-medium text-white
              bg-gradient-to-r from-sky-500 to-indigo-500 hover:brightness-110 transition">
                View Details
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default JobPost;
