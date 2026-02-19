import React from 'react'
import JobCard from './JobCard'

const Job = () => {
  const jobInfoProps = [
    {
      jobTitle: "Frontend Developer",
      companyName: "TechNova Solutions",
      experience: "1-3 Years",
      salary: "₹4,00,000 - ₹6,00,000 / year",
      jobType: "Full Time",
      postedDays: "2 days ago",
      skills1: "React",
      skills2: "JavaScript",
      skills3: "HTML",
      skills4: "CSS",
      skills5: "Tailwind CSS",
      message:
        "We are looking for a skilled Frontend Developer to build modern, scalable user interfaces using React and Tailwind CSS."
    },
    {
      jobTitle: "Backend Developer",
      companyName: "CodeCraft Pvt Ltd",
      experience: "2-5 Years",
      salary: "₹6,00,000 - ₹9,00,000 / year",
      jobType: "Full Time",
      postedDays: "5 days ago",
      skills1: "ReaNode.js",
      skills2: "Java",
      skills3: "MongoDB",
      skills4: "API Development",
      skills5: "Express.js",
      message:
        "We are hiring a Backend Developer who can design and maintain high-performance server-side applications."
    },
    {
      jobTitle: "Full Stack Developer",
      companyName: "InnovateX Labs",
      experience: "0-2 Years",
      salary: "₹3,00,000 - ₹5,00,000 / year",
      jobType: "Full Time",
      postedDays: "1 day ago",
      skills1: "Node.js",
      skills2: "React",
      skills3: "JavaScript",
      skills4: "MySQL",
      skills5: "Git",
      message:
        "Looking for a passionate Full Stack Developer to work on both frontend and backend technologies."
    },
    {
      jobTitle: "UI/UX Designer",
      companyName: "PixelWave Studio",
      experience: "1-4 Years",
      salary: "₹3,50,000 - ₹6,50,000 / year",
      jobType: "Part Time",
      postedDays: "3 days ago",
      skills1: "Figma",
      skills2: "Adobe XD",
      skills3: "UI Desig",
      skills4: "UX Research",
      skills5: "Python",
      message:
        "We are seeking a creative UI/UX Designer to design intuitive and engaging user experiences."
    },
    {
      jobTitle: "Mobile App Developer",
      companyName: "AppVerse Technologies",
      experience: "2-4 Years",
      salary: "₹5,00,000 - ₹8,00,000 / year",
      jobType: "Full Time",
      postedDays: "7 days ago",
      skills1: "Flutter",
      skills2: "React Native",
      skills3: "Android",
      skills4: "iOS",
      skills5: "Java",
      message:
        "We are looking for a Mobile App Developer to build high-quality Android and iOS applications."
    }
  ];
  return (
  
      <div className='parent'>
        {
          jobInfoProps.map((info,index) => {
            return (
            <div key={index} ><JobCard jobTitle={info.jobTitle} companyName={info.companyName} experience={info.experience}
            salary={info.salary} jobType={info.jobType} postedDays={info.postedDays} skills1={info.skills1}
            skills2={info.skills2} skills3={info.skills3} skills4={info.skills4} skills5={info.skills5}
            message={info.message} /></div>
            )
          })
        }
      </div>
  )
}

export default Job