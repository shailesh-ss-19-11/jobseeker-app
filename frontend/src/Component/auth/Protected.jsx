import React from 'react'
import { Navigate } from 'react-router-dom'

function Protected({ children, setRole }) {
    const object = JSON.parse(localStorage.getItem("employer"));
    const object2 = JSON.parse(localStorage.getItem("jobseeker"));
    console.log(object, object2);
    if (object && object.token) {
        setRole("employer")
        return children;
    } else if (object2 && object2.token) {
        setRole("jobseeker");
        return children;
    } else {
        setRole("public");
        return <Navigate to={"/"} />
    }
}

export default Protected;