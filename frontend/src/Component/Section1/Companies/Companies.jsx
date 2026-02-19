import { motion } from "framer-motion";

const Companies = () => {
  return (
    <section className="relative w-full overflow-hidden 
    bg-gradient-to-br from-sky-100 via-emerald-100 to-yellow-100">

      {/* Floating Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-sky-400/40 rounded-full blur-3xl animate-pulse delay-300" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-emerald-400/40 rounded-full blur-3xl animate-pulse delay-500" />

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">
            Hire Top{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Talent
            </span>
            <br /> Faster Than Ever
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Post jobs, manage applicants, and connect with qualified
            candidates using our modern hiring platform.
          </p>

          <div className="mt-10 flex gap-5">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-2xl text-white font-semibold
              bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500
              hover:brightness-110 transition shadow-lg"
            >
              Post a Job
            </motion.button>

            <button className="px-8 py-3 rounded-2xl border border-gray-300 
            text-gray-700 hover:bg-white/60 backdrop-blur-md transition shadow-sm">
              View Pricing
            </button>
          </div>
        </motion.div>

        {/* Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex justify-center"
        >
          <div className="w-96 h-96 rounded-3xl 
          bg-white/60 backdrop-blur-2xl 
          border border-white/40 shadow-2xl relative">

            <div className="absolute top-10 left-8 
            bg-white/70 backdrop-blur-xl px-5 py-4 
            rounded-2xl shadow-lg">
              <p className="text-sm font-semibold text-gray-800">
                120+ Applicants
              </p>
              <span className="text-xs text-indigo-600">
                For this job
              </span>
            </div>

            <div className="absolute bottom-12 right-8 
            bg-white/70 backdrop-blur-xl px-5 py-4 
            rounded-2xl shadow-lg">
              <p className="text-sm font-semibold text-gray-800">
                Shortlisted
              </p>
              <span className="text-xs text-emerald-600">
                32 Candidates
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
            Hire Better
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Post Jobs Easily",
              desc: "Create and publish job listings in minutes with a simple, intuitive dashboard.",
              color: "from-indigo-500 to-sky-500",
            },
            {
              title: "Manage Applicants",
              desc: "Track, filter, and shortlist candidates efficiently from one place.",
              color: "from-sky-500 to-emerald-500",
            },
            {
              title: "Hire Faster",
              desc: "Reduce hiring time with smart matching and instant communication tools.",
              color: "from-emerald-500 to-yellow-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-6 
              bg-white/70 backdrop-blur-xl 
              border border-white/40 
              shadow-lg hover:shadow-2xl transition"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} mb-5`} />
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Companies;
