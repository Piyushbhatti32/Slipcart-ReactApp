import React from 'react'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container  min-vh-100 my-4">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <Link to="/" className="btn btn-sm btn-primary">Go back to Home</Link>
    </div>
  )
}

export default Contact
