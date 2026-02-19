import React, { Component } from 'react'
import Job from "./Component/Section1/Jobs/Job"
import Companies from './Component/Section1/Companies/Companies'
import LoginJobseekar from './Component/Section1/Login/LoginJobseekar'
import LoginEmployer from './Component/Section1/Login/LoginEmployer'
import MyAccount from './Component/Section1/Home/MyAccount'
import Home from './Component/Section1/Home/Home'
import EmployerSignup from './Component/Section1/Signup/Employer/EmployerSignup'
import JobSeekerSignup from './Component/Section1/Signup/Job Seeker/JobSeekerSignup'
import EmployerHome from './Component/employer/EmployerHome'
import JobPost from './Component/employer/JobPost'
import SearchJob from './Component/jobSeeker/Searchjob'





export const routesArr = [
    { path: "/auth/jobseeker/login", isProtected: false, Component: LoginJobseekar },
    { path: "/auth/jobseeker/signup/:id", isProtected: false, Component: JobSeekerSignup },
    { path: "/auth/employer/signup/:id", isProtected: false, Component: EmployerSignup },
    { path: "/auth/employer/login", isProtected: false, Component: LoginEmployer },
    { path: "/", isProtected: false, Component: Home },
    { path: "/job", isProtected: false, Component: Job },
    { path: "/companies", isProtected: false, Component: Companies },
    { path: "/myaccount", isProtected: false, Component: MyAccount },

    { path: "/employer/home", isProtected: true, Component: EmployerHome },
    { path: "/employer/jobpost", isProtected: true, Component: JobPost },
    { path: "/jobseeker/search-job", isProtected: true, Component: SearchJob },

]