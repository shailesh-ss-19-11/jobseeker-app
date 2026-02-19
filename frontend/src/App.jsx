
import { useEffect, useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { routesArr } from './Routes'

import Job from './Component/Section1/Jobs/Job'
import Navbar from './Component/Section1/Home/PublicNavbar'
import Protected from './Component/auth/Protected'
import EmployerNavbar from './Component/employer/EmployerNavbar'
import JobseekerNavbar from './Component/jobSeeker/JobseekerNavbar'


function App() {
  const [role, setRole] = useState('public')
  return (
    <>
      {role === 'employer' ? (
        <EmployerNavbar setRole={setRole} />
      ) : role === 'jobseeker' ? (
        <JobseekerNavbar setRole={setRole} />
      ) : (
        <Navbar setRole={setRole} />
      )}



      {/* {tokenE ? <EmployerNavbar/>:<Navbar/>} */}

      <div className="container">

        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/job' element={<Job />} />
        </Routes> */}

        <Routes>
          {routesArr.length > 0 ?
            routesArr.map((route) => {
              if (route.isProtected) {
                return <Route path={route.path} element={<Protected setRole={setRole}>{<route.Component />}</Protected>} />
              } else {
                return <Route path={route.path} Component={route.Component} />
              }
            })
            : null}

        </Routes>
      </div>

    </>
  )
}

export default App

// import { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { routesArr } from "./Routes";

// import Navbar from "./Component/Section1/Home/PublicNavbar";
// import EmployerNavbar from "./Component/employer/EmployerNavbar";

// import Protected from "./Component/auth/Protected";

// function App() {

//   const [authType, setAuthType] = useState("public");

//   useEffect(() => {
//     const employer = JSON.parse(localStorage.getItem("employer"));
//     const jobseeker = JSON.parse(localStorage.getItem("jobseeker"));

//     if (employer) {
//       setAuthType("employer");
//     } else if (jobseeker) {
//       setAuthType("jobseeker");
//     } else {
//       setAuthType("public");
//     }
//   }, []);

//   return (
//     <>
//       {/* Navbar Switch */}
//       {authType === "public" && <Navbar />}
//       {authType === "employer" && <EmployerNavbar />}
//       {authType === "jobseeker" && <JobseekerNavbar />}

//       <div className="container">
//         <Routes>
//           {routesArr.map((route, index) => (
//             <Route
//               key={index}
//               path={route.path}
//               element={
//                 route.isProtected ? (
//                   <Protected>
//                     <route.Component />
//                   </Protected>
//                 ) : (
//                   <route.Component />
//                 )
//               }
//             />
//           ))}
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;









