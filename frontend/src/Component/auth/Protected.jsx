import React from 'react'
import { Navigate } from 'react-router-dom'

function Protected({ children, setRole }) {
    const object = JSON.parse(localStorage.getItem("employer"))
    console.log();
    if (object && object.token) {
        if (object.hasOwnProperty("employer")) {
            setRole("employer")
        } else {
            setRole("jobseeker")
        }
        setRole("employer");
        return children;
    } else {
        setRole("public")
        return <Navigate to={"/"} />
    }

}

export default Protected