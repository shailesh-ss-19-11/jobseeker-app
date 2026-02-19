import axios from "axios";
import { motion } from "framer-motion";
import { input } from "framer-motion/client";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../../../constant";

const EmployerSignup = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    companyName: "",
    dob: "",
    password: "",
    confirmPassword: "",
    role: "EMPLOYER_ROLE_ID",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newobj = { ...formData, role: params.id }
      const result = await axios.post(baseURL + "auth/employer/signup/", newobj)

      console.log(result);
      alert(result.data.message)
      if(result.status===201){
          navigate("/auth/employer/login")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden
    bg-gradient-to-br from-indigo-50 via-white to-sky-50 px-4 py-10">

      {/* Animated Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-sky-400/30 rounded-full blur-3xl animate-pulse delay-300" />
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-emerald-400/30 rounded-full blur-3xl animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl
        bg-white/70 backdrop-blur-2xl
        border border-white/40
        rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold 
          bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 
          bg-clip-text text-transparent">
            Create Employer Account
          </h2>
          <p className="mt-2 text-gray-500 text-sm">
            Start hiring top talent for your company
          </p>
        </div>

        {/* Form */}
        <form action="" onSubmit={handleSubmit}>
          <div className="space-y-5">

            {/* Company */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Company Name *
              </label>
              <input
                name="companyName"
                onChange={handleChange}
                type="text"
                placeholder="Enter Company Name"
                required
                className="w-full px-4 py-3 rounded-xl 
              bg-white border border-gray-200
              focus:ring-2 focus:ring-indigo-400 
              focus:outline-none transition"
              />
            </div>

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Your Name *
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl 
                bg-white border border-gray-200
                focus:ring-2 focus:ring-sky-400 
                focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Work Email *
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl 
                bg-white border border-gray-200
                focus:ring-2 focus:ring-emerald-400 
                focus:outline-none transition"
                />
              </div>
            </div>

            {/* Phone + DOB */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  onChange={handleChange}
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl 
                bg-white border border-gray-200
                focus:ring-2 focus:ring-indigo-400 
                focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Date of Birth
                </label>
                <input
                  name="dob"
                  onChange={handleChange}
                  type="date"
                  className="w-full px-4 py-3 rounded-xl 
                bg-white border border-gray-200
                focus:ring-2 focus:ring-sky-400 
                focus:outline-none transition"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Address
              </label>
              <input
                name="address"
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-3 rounded-xl 
              bg-white border border-gray-200
              focus:ring-2 focus:ring-emerald-400 
              focus:outline-none transition"
              />
            </div>

            {/* Password */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Password *
                </label>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-xl 
                bg-white border border-gray-200
                focus:ring-2 focus:ring-indigo-400 
                focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Confirm Password *
                </label>
                <input
                  name="confirmPassword"
                  onChange={handleChange}
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-xl 
                bg-white border border-gray-200
                focus:ring-2 focus:ring-sky-400 
                focus:outline-none transition"
                />
              </div>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500
            hover:brightness-110 transition shadow-lg"
            >
              Create Employer Account
            </motion.button>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an employer account?{" "}
          <Link
            to="/auth/employer/login"
            className="font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent hover:opacity-80 transition"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default EmployerSignup;
