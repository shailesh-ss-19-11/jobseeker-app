import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../../../constant";
import { getdata } from "../../../../service/Api";
import Select from "react-select";
const JobSeekerSignup = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    expectedSalary: "",
    currentSalary: "",
    address: "",
    location: "",
    gender: "",
    skills: [],
    education: "",
    password: "",
    confirmPassword: "",
    role: "JOB_SEEKER_ROLE_ID",
  });

  const getSkills = () => {
    getdata("app/v1/skills", (success) => {
      const skillsArray = success.data.map((skill) => {
        return { value: skill.skills, label: skill.skills }
      })
      setSkills(skillsArray);
    }, (error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getSkills();
  }, [])


  const handleChange = (e,name) => {

    if(name==="skills"){
      const selectedSkills = e.map((skill) => skill.value);
      setFormData({ ...formData, skills: selectedSkills });
      return;
    }
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newobj = { ...formData, role: params.id }
      const result = await axios.post(baseURL + "auth/jobseeker/signup", newobj)
      alert(result.data.message)
      if (result.status === 201) {
        navigate("/auth/jobseeker/login/")
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
        className="relative z-10 w-full max-w-3xl
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
            Create Job Seeker Account
          </h2>
          <p className="mt-2 text-gray-500 text-sm">
            Build your profile and get hired faster
          </p>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="space-y-5">

            {/* Name + Age */}
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Full Name *" name="name" onChange={handleChange} />
              <Input label="Age *" name="age" type="number" onChange={handleChange} />
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Email *" name="email" type="email" onChange={handleChange} />
              <Input label="Phone *" name="phone" type="tel" onChange={handleChange} />
            </div>

            {/* Salary */}
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Current Salary *" name="currentSalary" onChange={handleChange} />
              <Input label="Expected Salary *" name="expectedSalary" onChange={handleChange} />
            </div>

            {/* Location + Gender */}
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Location *" name="location" onChange={handleChange} />

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Gender *
                </label>
                <select
                  name="gender"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl 
                bg-white border border-gray-200
                focus:ring-2 focus:ring-indigo-400 
                focus:outline-none transition"
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <Select
              closeMenuOnSelect={false}
              defaultValue={null}
              isMulti
              options={skills}
              onChange={(e)=>handleChange(e,"skills")}
              name="skills"
              // styles={colourStyles}
            />

            {/* <Input label="Skills *" name="skills" placeholder="React, Node, MongoDB" onChange={handleChange} /> */}

            <Input label="Education *" name="education" onChange={handleChange} />
            <Input label="Address *" name="address" onChange={handleChange} />

            {/* Password */}
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Password *" name="password" type="password" onChange={handleChange} />
              <Input label="Confirm Password *" name="confirmPassword" type="password" onChange={handleChange} />
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
              Create Job Seeker Account
            </motion.button>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/auth/jobseeker/login"
            className="font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent hover:opacity-80 transition"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div >
  );
};

/* Reusable Input Component (Theme Locked) */
const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-gray-600 mb-1">{label}</label>
    <input
      {...props}
      required
      className="w-full px-4 py-3 rounded-xl 
      bg-white border border-gray-200
      focus:ring-2 focus:ring-sky-400 
      focus:outline-none transition"
    />
  </div>
);

export default JobSeekerSignup;
