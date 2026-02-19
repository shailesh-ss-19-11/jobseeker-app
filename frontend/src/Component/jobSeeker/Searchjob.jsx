// import React from 'react'

// const Jobseeker = () => {
//   return (
//     <div>
      import { useState, useMemo } from "react";

const dummyJobs = [
  {
    id: 1,
    jobName: "Frontend Developer",
    jobDescription: "Build modern UI using React and Tailwind.",
    jobExp: "2-4 Years",
    skill: "React",
    package: "6 LPA",
    skillsMustHave: ["React", "JavaScript", "Tailwind"],
    employmentType: "Full-Time",
    education: "B.Tech / MCA",
    employerId: "EMP001",
  },
  {
    id: 2,
    jobName: "Backend Developer",
    jobDescription: "Develop APIs using Node.js and MongoDB.",
    jobExp: "1-3 Years",
    skill: "Node.js",
    package: "5 LPA",
    skillsMustHave: ["Node.js", "Express", "MongoDB"],
    employmentType: "Full-Time",
    education: "B.Tech",
    employerId: "EMP002",
  },
];

const SearchJob = () => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [history, setHistory] = useState([]);

  const filteredJobs = useMemo(() => {
    return dummyJobs.filter((job) => {
      return (
        job.jobName.toLowerCase().includes(search.toLowerCase()) &&
        (filterType ? job.employmentType === filterType : true)
      );
    });
  }, [search, filterType]);

  const handleApply = (job) => {
    if (!appliedJobs.includes(job.id)) {
      setAppliedJobs([...appliedJobs, job.id]);
      setHistory([...history, `Applied: ${job.jobName}`]);
    }
  };

  const handleSave = (job) => {
    if (!savedJobs.includes(job.id)) {
      setSavedJobs([...savedJobs, job.id]);
      setHistory([...history, `Saved: ${job.jobName}`]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none"
        >
          <option value="">All Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
        </select>

      </div>

      {/* Jobs Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="p-6 rounded-2xl shadow-md bg-white/60 backdrop-blur-xl border border-white/30"
          >
            <h2 className="text-xl font-bold text-indigo-600">
              {job.jobName}
            </h2>

            <p className="text-gray-600 mt-2">
              {job.jobDescription}
            </p>

            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <p><b>Experience:</b> {job.jobExp}</p>
              <p><b>Primary Skill:</b> {job.skill}</p>
              <p><b>Package:</b> {job.package}</p>
              <p><b>Employment:</b> {job.employmentType}</p>
              <p><b>Education:</b> {job.education}</p>
              <p><b>Employer ID:</b> {job.employerId}</p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {job.skillsMustHave.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-5">
              <button
                onClick={() => handleApply(job)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white"
              >
                Apply
              </button>

              <button
                onClick={() => handleSave(job)}
                className="px-4 py-2 rounded-xl border border-indigo-400 text-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Info Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">

        <div className="p-4 rounded-xl bg-white/50 backdrop-blur border">
          <h3 className="font-semibold text-indigo-600 mb-2">
            Applied Jobs
          </h3>
          <p>{appliedJobs.length} Jobs Applied</p>
        </div>

        <div className="p-4 rounded-xl bg-white/50 backdrop-blur border">
          <h3 className="font-semibold text-indigo-600 mb-2">
            Saved Jobs
          </h3>
          <p>{savedJobs.length} Jobs Saved</p>
        </div>

        <div className="p-4 rounded-xl bg-white/50 backdrop-blur border">
          <h3 className="font-semibold text-indigo-600 mb-2">
            History
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {history.slice(-5).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
};

export default SearchJob;


 